import { useState } from "react";

type Props = {
    currentMonth: Date;
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
};

const HeaderCalendar: React.FC<Props> = ({ currentMonth, setCurrentMonth }: Props) => {
    const [month, setMonth] = useState(currentMonth.toLocaleString('default', { month: 'long' }));
    const [year, setYear] = useState(currentMonth.getFullYear());

    const prevMonth = (): void => {
        const prevMonth = new Date(currentMonth);
        if (prevMonth.getMonth() === 0) {
            prevMonth.setFullYear(prevMonth.getFullYear() - 1)
            prevMonth.setMonth(11);
        }
        else {
            prevMonth.setMonth(prevMonth.getMonth() - 1);
        }
        setCurrentMonth(new Date(prevMonth.toISOString()));
        setMonth(prevMonth.toLocaleString('default', { month: 'long' }));
        setYear(prevMonth.getFullYear());
    };
    
    const nextMonth = (): void => {
        const nextMonth = new Date(currentMonth);
        if (nextMonth.getMonth() === 11) {
            nextMonth.setFullYear(nextMonth.getFullYear() + 1)
            nextMonth.setMonth(0);
        }
        else {
            nextMonth.setMonth(nextMonth.getMonth() + 1);
        }
        setCurrentMonth(new Date(nextMonth.toDateString()));
        setMonth(nextMonth.toLocaleString('default', { month: 'long' }));
        setYear(nextMonth.getFullYear());
    };

    return (
        <div className="flex flex-row justify-between items-center px-64 min-h-[6%]">
            <button className='m-2 text-xl bg-blue-500 hover:bg-blue-600 rounded-md p-1.5 duration-125 shadow w-28 ' onClick={prevMonth}>
                <p>Prev</p>
            </button>
            <p className="text-2xl font-bold">{month} {year}</p>
            <button className='m-2 text-xl bg-blue-500 hover:bg-blue-600 rounded-md p-1.5 duration-125 shadow w-28 ' onClick={nextMonth}>
                <p>Next</p>
            </button>
        </div>
    )
};

export default HeaderCalendar;