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
                endDate.setDate((44-(totalDays + startingDay)));
            }
            getEvents(startDate, endDate)
        }
    }, [totalDays, startingDay]);


    const getEvents = async (startDate: Date, endDate: Date) => {
    try {
        const events = await getEventsByUserIdAndTimeWindow({ userId: user.id, token, startDate: startDate.toISOString(), endDate: endDate.toISOString() });
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
            const date = new Date(currentMonth);
            date.setMonth(date.getMonth() - 1);
            date.setDate(daysInMonth(date.getMonth(), date.getFullYear()) - i + 2);
            const evnts = events.filter((event: Event) => date.toLocaleDateString() === new Date(event.startDate).toLocaleDateString());

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
            const date = new Date(currentMonth);
            date.setDate(i);
            const evnts = events.filter((event: Event) => {
                console.log("Date: ", date.toLocaleDateString());
                console.log("Event date: ", new Date(event.startDate).toLocaleDateString());
                return date.toLocaleDateString() === new Date(event.startDate).toLocaleDateString()
            });
            calendar.push({day: i, events: evnts});
        }

        let nextDays = 1;
        while (calendar.length < 42) {
            const date = new Date(currentMonth);
            date.setMonth(date.getMonth() + 1);
            date.setDate(nextDays);
            const evnts = events.filter((event: Event) => date.toLocaleDateString() === new Date(event.startDate).toLocaleDateString());
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