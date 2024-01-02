import { Event } from "@/types";

type Props = {
    currentMonth: Date;
    generateCalendar: () => ({day: number, events: Event[]})[];
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
        <div className="flex flex-row flex-wrap h-[91%]">
            {calendar.map(({day, events}: {day: number, events: Event[]}, index: number) => (
                <div className={handleStyle(day, index) ? "flex flex-col w-[14.28%] min-h-[16.67%] justify-start items-center border border-[#cccccc6e] hover:cursor-pointer" : "flex flex-col w-[14.28%] min-h-[16.67%] justify-start items-center border border-[#cccccc6e] bg-[#66666636] hover:cursor-pointer"} key={index} onClick={(event) => handleDayPress(event, day)}>
                    <p className={`text-white text-center pb-1 ${(day === new Date().getDate() && handleStyle(day, index) && currentMonth.getMonth() === new Date().getMonth()) && "w-6 rounded-full bg-slate-500"} `}>{day}</p>
                    <div className="flex flex-col w-full h-full items-center gap-1">
                        {events.map((event: Event, index: number) => (
                            <>
                            {index < 4 && (
                                <p key={index} className={`w-[95%] text-sm text-center rounded-lg bg-blue-500 text-white`}>{event.title}</p>
                            )}
                            </>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default GridCalendar;