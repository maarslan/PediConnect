import React from 'react';
import { professionals } from '../../data/mockProfiles';

export const ExpertsList: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Experts</h2>
      <div className="space-y-6">
        {professionals.map((professional) => (
          <div key={professional.id} className="flex items-start space-x-4">
            <img
              src={professional.imageUrl}
              alt={professional.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{professional.name}</h3>
              <p className="text-sm text-blue-600">{professional.title}</p>
              <p className="text-xs text-gray-500 mt-1">
                {professional.specializations.join(" • ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};