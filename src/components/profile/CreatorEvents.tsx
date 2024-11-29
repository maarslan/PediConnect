import React from 'react';
import { Calendar, Users, Clock } from 'lucide-react';

export const CreatorEvents: React.FC = () => {
  const events = [
    {
      id: '1',
      title: 'Early Reading Workshop',
      date: '2024-03-20',
      time: '10:00 AM',
      attendees: 15,
      maxCapacity: 25,
    },
    {
      id: '2',
      title: 'Q&A Session: Child Development',
      date: '2024-03-25',
      time: '2:00 PM',
      attendees: 30,
      maxCapacity: 50,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Schedule Event
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
            <h4 className="text-lg font-medium text-gray-900 mb-3">{event.title}</h4>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span>{new Date(event.date).toLocaleDateString()}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center space-x-3 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{event.attendees}/{event.maxCapacity} Attendees</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};