import React from 'react';
import { User } from '../../types/auth';
import { UserCircle, Mail, Award } from 'lucide-react';

interface Props {
  user: User;
}

export const CreatorProfileInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-6">
        <div className="bg-purple-100 p-3 rounded-full">
          <UserCircle className="w-12 h-12 text-purple-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-purple-600">Healthcare Professional</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">{user.email}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Award className="w-5 h-5 text-gray-500" />
          <span className="text-gray-600">Verified Professional</span>
        </div>
      </div>
    </div>
  );
};