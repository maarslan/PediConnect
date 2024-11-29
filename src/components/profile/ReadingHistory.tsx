import React from 'react';
import { ContentCard } from '../content/ContentCard';
import { contents } from '../../data/mockContent';

export const ReadingHistory: React.FC = () => {
  // Simulate reading history with mock data
  const history = contents.slice(0, 3);

  return (
    <div className="space-y-6">
      {history.length > 0 ? (
        history.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">No reading history yet</p>
      )}
    </div>
  );
};