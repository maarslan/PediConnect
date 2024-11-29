import React from 'react';
import { MessageCircle } from 'lucide-react';

export const UserMessages: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-center py-8">
        <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-500">No messages yet</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Start a Conversation
        </button>
      </div>
    </div>
  );
};