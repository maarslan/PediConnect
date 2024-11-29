import React from 'react';
import { User } from '../../types/auth';
import { Users, BookOpen, DollarSign } from 'lucide-react';

interface Props {
  user: User;
}

export const CreatorStats: React.FC<Props> = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">Total Subscribers</span>
          </div>
          <span className="font-semibold text-blue-600">245</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-green-600" />
            <span className="text-gray-700">Published Content</span>
          </div>
          <span className="font-semibold text-green-600">12</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700">Total Earnings</span>
          </div>
          <span className="font-semibold text-purple-600">$1,234</span>
        </div>
      </div>
    </div>
  );
};