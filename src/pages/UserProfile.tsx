import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { UserProfileInfo } from '../components/profile/UserProfileInfo';
import { UserSubscription } from '../components/profile/UserSubscription';
import { SavedContent } from '../components/profile/SavedContent';
import { ReadingHistory } from '../components/profile/ReadingHistory';
import { UserMessages } from '../components/profile/UserMessages';

export const UserProfile: React.FC = () => {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Info & Subscription */}
        <div className="lg:col-span-1 space-y-6">
          <UserProfileInfo user={user} />
          <UserSubscription user={user} />
        </div>

        {/* Right Column - Tabs Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="saved">
            <TabsList className="mb-6">
              <TabsTrigger value="saved">Saved Content</TabsTrigger>
              <TabsTrigger value="history">Reading History</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
            </TabsList>

            <TabsContent value="saved">
              <SavedContent />
            </TabsContent>

            <TabsContent value="history">
              <ReadingHistory />
            </TabsContent>

            <TabsContent value="messages">
              <UserMessages />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};