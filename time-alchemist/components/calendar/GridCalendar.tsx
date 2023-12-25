import { useEffect } from "react";
import { start } from "repl";

type Props = {
    currentMonth: Date;
    generateCalendar: () => (number)[];
    daysInMonth: (month: number, year: number) => number;
    firstDayOfMonth: (month: number, year: number) => number;
};

const GridCalendar: React.FC<Props> = ({ currentMonth, generateCalendar, daysInMonth, firstDayOfMonth }: Props) => {
    const calendar = generateCalendar();

    const handleDayPress = (
        event: any,
        day: number | null
    ): void => {
        // Add your logic for handling day press here
        console.log(`Day ${day} pressed!`);
    };

    const handleStyle = (day: number, index: number): Boolean => {
        const startingDay = firstDayOfMonth(
            currentMonth.getMonth(),
            currentMonth.getFullYear()
        );
        if (startingDay === 0) {
            if (day === (index + 1)) {
                return true;
            }
            return false;
        }
        else {
            if ((day + startingDay) === (index + 2)) {
                return true;
            }
            return false;
        }
    };
    return (
        <div className="flex flex-row flex-wrap h-[90%]">
            {calendar.map((day: number, index: number) => (
                <button className={handleStyle(day, index) ? "flex-col w-[14.28%] min-h-[16.67%] justify-start items-center border border-[#cccccc6e]" : "flex-col w-[14.28%] min-h-[16.67%] justify-start items-center border border-[#cccccc6e] bg-[#66666636]"} key={index} onClick={(event) => handleDayPress(event, day)}>
                    <p className={`text-white ${(day === new Date().getDate() && handleStyle(day, index) && currentMonth.getMonth() === new Date().getMonth()) && "w-6 rounded-full bg-slate-500"} `}>{day}</p>
                </button>
            ))}
        </div>
    )
};

export default GridCalendar;