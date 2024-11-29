import React from 'react';
import { ChevronRight } from 'lucide-react';
import { topics } from '../../data/mockTopics';

export const TopicsList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Topics</h2>
      <div className="space-y-4">
        {topics.map((topic) => (
          <div key={topic.id} className="space-y-2">
            <div className="flex items-center justify-between cursor-pointer hover:text-blue-600">
              <span className="font-medium">{topic.name}</span>
              <ChevronRight className="w-5 h-5" />
            </div>
            <div className="pl-4 space-y-1">
              {topic.subtopics.map((subtopic) => (
                <div
                  key={subtopic}
                  className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  {subtopic}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};