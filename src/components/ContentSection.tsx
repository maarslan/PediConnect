import React from 'react';
import { BookOpen, Lightbulb } from 'lucide-react';
import { ContentSection as ContentSectionType } from '../types';

interface Props {
  section: ContentSectionType;
}

export const ContentSection: React.FC<Props> = ({ section }) => {
  return (
    <div className="mb-8 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
      </div>
      <p className="text-gray-600 mb-4">{section.content}</p>
      <div className="flex items-start gap-2 bg-blue-50 p-4 rounded-md">
        <Lightbulb className="w-5 h-5 text-blue-600 mt-1" />
        <div>
          <span className="font-medium text-blue-800">Expert Tip: </span>
          <span className="text-blue-700">{section.expertTip}</span>
        </div>
      </div>
      <div className="mt-4 inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
        Age Group: {section.ageGroup}
      </div>
    </div>
  );
};