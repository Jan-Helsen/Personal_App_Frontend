import React, { useState } from 'react';
import DailyCalendar from '../calendar/DailyCalendar';
import { Event } from '@/types';

type Props = {
    events: Event[];
}

const HomeEvents: React.FC<Props> = ({ events }) => {
    

    return (
        <div className="row-span-3 col-start-2 row-start-1 bg-gradient-to-b from-[#178cc6] to-[#005e59] rounded-3xl w-10/12 h-[95%] p-4">
            <h2 className="text-2xl pb-2 text-center font-bold text-white">Events</h2>
                    {events.length > 0 ? (
                        <ul>
                            {events.map((event: Event) => (
                                <li className="flex justify-between items-center" key={event.id}>
                                    <h3>{event.title}</h3>
                                    <p>{event.subject}</p>
                                    <div>
                                        <p>{new Date(event.startDate).toLocaleTimeString()}</p>
                                        <p>{new Date(event.endDate).toLocaleTimeString()}</p>
                                </div>
                                </li>
                        ))}
                        </ul>
                        ) : (
                        <p className="text-center">
                            No events for today
                        </p>
                    )}
        </div>
    )
};

export default HomeEvents;