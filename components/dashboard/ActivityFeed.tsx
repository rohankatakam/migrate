import React from 'react';
import { Activity } from '@/lib/types';
import { Card, CardHeader, CardContent, CardTitle } from '../ui/Card';

interface ActivityFeedProps {
  activities: Activity[];
}


const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
};

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {activities.map((activity) => (
            <div key={activity.id}>
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500" style={{ marginTop: '0.25rem' }}>{formatTimestamp(activity.timestamp)}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
