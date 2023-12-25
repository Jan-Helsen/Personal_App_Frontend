import React, { useState } from 'react';
import DaysCalendar from './DaysCalendar';
import GridCalendar from './GridCalendar';
import HeaderCalendar from './HeaderCalendar';

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const daysInMonth = (month: number, year: number): number => {
        return new Date(year, month + 1, 0).getDate();
    };

    const firstDayOfMonth = (month: number, year: number): number => {
        return new Date(year, month, 1).getDay();
    };

    const generateCalendar = (): (number)[] => {
        const totalDays = daysInMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );
        const startingDay = firstDayOfMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );

        const calendar: (number)[] = [];

        for (let i = startingDay; i > 1; i--) {
            calendar.push(
                daysInMonth(
                    currentMonth.getMonth() - 1,
                    currentMonth.getFullYear()
                ) -
                    i +
                    2
            );
        }

        for (let i = 1; i <= totalDays; i++) {
            calendar.push(i);
        }

        let nextDays = 1;
        while (calendar.length < 42) {
            calendar.push(nextDays);
            nextDays++;
        }
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