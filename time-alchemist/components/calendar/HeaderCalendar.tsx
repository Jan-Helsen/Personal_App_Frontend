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
        prevMonth.setMonth(currentMonth.getMonth() - 1);
        setCurrentMonth(prevMonth);
        setMonth(prevMonth.toLocaleString('default', { month: 'long' }));
        setYear(prevMonth.getFullYear());
    };
    
    const nextMonth = (): void => {
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(currentMonth.getMonth() + 1);
        setCurrentMonth(nextMonth);
        setMonth(nextMonth.toLocaleString('default', { month: 'long' }));
        setYear(nextMonth.getFullYear());
    };

    return (
        <div className="flex flex-row justify-between items-center px-64 min-h-[6%]">
            <button onClick={prevMonth}>
                <p>Prev</p>
            </button>
            <p>{month} {year}</p>
            <button onClick={nextMonth}>
                <p>Next</p>
            </button>
        </div>
    )
};

export default HeaderCalendar;