import React from 'react';
import { ContentCard } from '../content/ContentCard';
import { contents } from '../../data/mockContent';
import { Plus } from 'lucide-react';

export const CreatorContent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">My Content</h3>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Create New</span>
        </button>
      </div>

      <div className="space-y-6">
        {contents.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};