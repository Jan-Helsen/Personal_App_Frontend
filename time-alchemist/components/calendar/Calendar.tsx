import React, { useEffect, useState } from 'react';
import DaysCalendar from './DaysCalendar';
import GridCalendar from './GridCalendar';
import HeaderCalendar from './HeaderCalendar';
import { Event, User } from '@/types';
import { getEventsByUserIdAndTimeWindow } from '@/services/eventService';

type Props = {
    user: User;
    token: string;
}

const Calendar: React.FC<Props> = ({ user, token }: Props) => {
    const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
    const [totalDays, setTotalDays] = useState(0);
    const [startingDay, setStartingDay] = useState(0);
    const [events, setEvents] = useState<Event[]>([]);

    useEffect(() => {
        setTotalDays(daysInMonth(currentMonth.getMonth(), currentMonth.getFullYear()));
        setStartingDay(firstDayOfMonth(currentMonth.getMonth(), currentMonth.getFullYear()));
    }, [currentMonth]);

    useEffect(() => {
        if (totalDays !== 0 && startingDay !== 0) {
            let startDate = new Date(currentMonth.toDateString());
            let endDate = new Date(currentMonth.toDateString());
            if (startingDay > 0) {
                startDate.setMonth(currentMonth.getMonth() - 1);
                startDate.setDate(daysInMonth(startDate.getMonth(), startDate.getFullYear()) - startingDay + 2);
            }
            if (totalDays + startingDay <= 42) {
                endDate.setMonth(currentMonth.getMonth() + 1);
                endDate.setDate((43-(totalDays + startingDay)));
            }
            getEvents(startDate, endDate)
        }
    }, [totalDays, startingDay]);


    const getEvents = async (startDate: Date, endDate: Date) => {
    try {
        const events = await getEventsByUserIdAndTimeWindow({ userId: user.id, token, startDate: startDate.toISOString(), endDate: endDate.toISOString() });
        console.log(events);
        setEvents(events);   
    } catch (error) {
        console.log(error);
    }
    }


    const daysInMonth = (month: number, year: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month: number, year: number): number => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendar = (): ({ day: number, events: Event[]})[] => {
        const totalDays = daysInMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );
        const startingDay = firstDayOfMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );

        const calendar: ({day: number, events: Event[]})[] = [];

        for (let i = startingDay; i > 1; i--) {
            let year = currentMonth.getUTCFullYear();
            let month = currentMonth.getUTCMonth();
            if (currentMonth.getUTCMonth() === 0) {
                year--;
                month = 11;
            }
            const date = new Date( year, month, i - 1);
            const evnts = events.filter((event) => new Date(event.startDate).getUTCDate() === date.getUTCDate() && new Date(event.startDate).getUTCMonth() === date.getUTCMonth() && new Date(event.startDate).getUTCFullYear() === date.getUTCFullYear());
            calendar.push(
                {day: daysInMonth(
                    currentMonth.getMonth() - 1,
                    currentMonth.getFullYear()
                ) -
                    i +
                    2,
                events: evnts}
            );
        }

        for (let i = 1; i <= totalDays; i++) {
            const evnts = events.filter((event) => new Date(event.startDate).getUTCDate() === i && new Date(event.startDate).getUTCMonth() === currentMonth.getUTCMonth() && new Date(event.startDate).getUTCFullYear() === currentMonth.getUTCFullYear());
            calendar.push({day: i, events: evnts});
        }

        let nextDays = 1;
        while (calendar.length < 42) {
            let year = currentMonth.getUTCFullYear();
            let month = currentMonth.getUTCMonth() + 1;
            if (currentMonth.getUTCMonth() === 11) {
                year++;
                month = 0;
            }
            const date = new Date(year, month, nextDays + 1);
            const evnts = events.filter((event, index) => {
                if (new Date(event.startDate).getUTCFullYear() === date.getUTCFullYear() && (new Date(event.startDate).getUTCMonth() <= date.getUTCMonth() && date.getMonth() <= new Date(event.endDate).getUTCMonth()) && (new Date(event.startDate).getUTCDate() <= date.getUTCDate() && date.getUTCDate() <= new Date(event.endDate).getUTCDate())) {
                    console.log("startDate: ", index, new Date(event.startDate).getUTCMonth());
                    console.log("endDate: ", index, new Date(event.endDate).getUTCMonth())
                    console.log(date.getUTCMonth());
                }
                return new Date(event.startDate).getUTCFullYear() === date.getUTCFullYear() && (new Date(event.startDate).getUTCMonth() <= date.getUTCMonth() && date.getMonth() <= new Date(event.endDate).getUTCMonth()) && (new Date(event.startDate).getUTCDate() <= date.getUTCDate() && date.getUTCDate() <= new Date(event.endDate).getUTCDate())
            });
            calendar.push({day: nextDays, events: evnts});
            nextDays++;
        }
        console.log(calendar);
        return calendar;
    };
    return (
        <>
            <div className="flex flex-col min-h-[85%] w-full justify-between">
                <HeaderCalendar currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
                <DaysCalendar />
                <GridCalendar currentMonth={currentMonth} generateCalendar={generateCalendar} daysInMonth={daysInMonth} firstDayOfMonth={firstDayOfMonth} />
            </div>
        </>
    )
};

export default Calendar;