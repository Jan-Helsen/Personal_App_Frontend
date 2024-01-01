

interface DailyCalendarProps {
    hour: number;
  }
  
  const DailyCalendar: React.FC<DailyCalendarProps> = ({ hour }) => {
    return (
      <div className="w-[100%] h-5/6 border ">
        <strong>{`${hour < 10 ? `0${hour}` : hour }:00`}</strong>
        
      </div>
    );
  };
  
  export default DailyCalendar;