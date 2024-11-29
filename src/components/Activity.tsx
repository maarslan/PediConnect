import React from 'react';
import { Clock, List, Package } from 'lucide-react';
import { Activity as ActivityType } from '../types';

interface Props {
  activity: ActivityType;
}

export const Activity: React.FC<Props> = ({ activity }) => {
  return (
    <div className="mb-6 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{activity.title}</h3>
      <p className="text-gray-600 mb-4">{activity.description}</p>
      
      <div className="flex items-center gap-2 mb-3">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{activity.duration}</span>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Package className="w-4 h-4 text-gray-500" />
          <span className="font-medium text-gray-700">Materials Needed:</span>
        </div>
        <ul className="list-disc list-inside pl-4 text-gray-600">
          {activity.materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-2">
          <List className="w-4 h-4 text-gray-500" />
          <span className="font-medium text-gray-700">Steps:</span>
        </div>
        <ol className="list-decimal list-inside pl-4 text-gray-600">
          {activity.steps.map((step, index) => (
            <li key={index} className="mb-1">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};