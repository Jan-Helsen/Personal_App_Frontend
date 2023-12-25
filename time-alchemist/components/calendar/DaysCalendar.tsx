
const DaysCalendar: React.FC = () => {
    const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="w-full h-[4%] flex flex-row border-[#ccc]">
            {dayNames.map((day: string, index) => (
                <p className="w-[14.28%] text-center text-white" key={index}>{day}</p>
            ))}
        </div>
    )
};

export default DaysCalendar;