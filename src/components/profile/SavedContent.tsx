import React from 'react';
import { ContentCard } from '../content/ContentCard';
import { contents } from '../../data/mockContent';

export const SavedContent: React.FC = () => {
  // Simulate saved content with mock data
  const savedContent = contents.slice(0, 2);

  return (
    <div className="space-y-6">
      {savedContent.length > 0 ? (
        savedContent.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">No saved content yet</p>
      )}
    </div>
  );
};