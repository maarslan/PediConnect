import React from 'react';
import { ContentCard } from '../components/content/ContentCard';
import { ExpertsList } from '../components/sidebar/ExpertsList';
import { TopicsList } from '../components/sidebar/TopicsList';
import { contents } from '../data/mockContent';

export const ContentFeed: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Left Sidebar - Experts */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-8">
            <ExpertsList />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Content</h2>
          <div className="grid gap-6">
            {contents.map((content) => (
              <ContentCard key={content.id} content={content} />
            ))}
          </div>
        </div>

        {/* Right Sidebar - Topics */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-8">
            <TopicsList />
          </div>
        </div>
      </div>
    </div>
  );
};