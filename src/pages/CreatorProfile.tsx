import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { CreatorProfileInfo } from '../components/profile/CreatorProfileInfo';
import { CreatorStats } from '../components/profile/CreatorStats';
import { CreatorContent } from '../components/profile/CreatorContent';
import { CreatorEvents } from '../components/profile/CreatorEvents';
import { CreatorEarnings } from '../components/profile/CreatorEarnings';

export const CreatorProfile: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  if (!user || user.role !== 'professional') return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info & Stats */}
        <div className="lg:col-span-1 space-y-6">
          <CreatorProfileInfo user={user} />
          <CreatorStats user={user} />
        </div>

        {/* Right Column - Tabs Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="content">
            <TabsList className="mb-6">
              <TabsTrigger value="content">My Content</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <CreatorContent />
            </TabsContent>

            <TabsContent value="events">
              <CreatorEvents />
            </TabsContent>

            <TabsContent value="earnings">
              <CreatorEarnings />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};