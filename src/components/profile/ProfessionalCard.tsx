import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { Professional } from '../../types/profiles';

interface Props {
  professional: Professional;
}

export const ProfessionalCard: React.FC<Props> = ({ professional }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={professional.imageUrl}
          alt={professional.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {professional.name}
        </h3>
        <div className="text-blue-600 font-medium mb-3">{professional.title}</div>
        
        <div className="flex items-start gap-2 mb-4">
          <Award className="w-5 h-5 text-gray-500 mt-1" />
          <p className="text-sm text-gray-600">{professional.credentials}</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Specializations</span>
          </div>
          <ul className="list-disc list-inside pl-2 text-sm text-gray-600">
            {professional.specializations.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 text-sm">{professional.bio}</p>
      </div>
    </div>
  );
};