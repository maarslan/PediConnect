import React from 'react';
import { Calendar, Clock, Lock } from 'lucide-react';
import { Content } from '../../types/content';
import { Link } from 'react-router-dom';

interface Props {
  content: Content;
}

export const ContentCard: React.FC<Props> = ({ content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{content.title}</h3>
          {content.isPremium && (
            <Lock className="w-5 h-5 text-yellow-500" />
          )}
        </div>
        
        <p className="text-gray-600 mb-4">{content.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(content.createdAt).toLocaleDateString()}
          {content.type === 'video' && content.duration && (
            <>
              <Clock className="w-4 h-4 ml-4 mr-2" />
              {content.duration}
            </>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {content.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            By {content.authorName}
          </div>
          <Link
            to={`/content/${content.id}`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};