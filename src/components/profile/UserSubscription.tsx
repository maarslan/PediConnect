import React from 'react';
import { User } from '../../types/auth';
import { CreditCard, Star } from 'lucide-react';

interface Props {
  user: User;
}

export const UserSubscription: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscription</h3>
      
      {user.isPremium ? (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-medium text-gray-900">Premium Plan</span>
          </div>
          <div className="text-sm text-gray-600">
            <p>Next billing date: March 15, 2024</p>
            <p>$9.99/month</p>
          </div>
          <button className="w-full mt-4 px-4 py-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors">
            Cancel Subscription
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600">Upgrade to Premium to access exclusive content and features!</p>
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Upgrade to Premium
          </button>
        </div>
      )}
    </div>
  );
};