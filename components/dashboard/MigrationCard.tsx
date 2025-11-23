import React from 'react';
import Link from 'next/link';
import { Migration } from '@/lib/types';
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Button } from '../ui/Button';

interface MigrationCardProps {
  migration: Migration;
}

export const MigrationCard: React.FC<MigrationCardProps> = ({ migration }) => {
  return (
    <Card hover>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle>{migration.name}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{migration.repository}</p>
          </div>
          <Badge status={migration.status} />
        </div>
      </CardHeader>
      <CardContent>
        <ProgressBar value={migration.progress.current} max={migration.progress.total} showLabel />
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">PRs Merged</p>
            <p className="font-semibold text-gray-900">
              {migration.prs.merged} / {migration.prs.total}
            </p>
          </div>
          <div>
            <p className="text-gray-500">In Review</p>
            <p className="font-semibold text-gray-900">{migration.prs.inReview}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <span>Est. completion: {migration.timeEstimate}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/migrations/${migration.id}`} className="flex-1">
          <Button variant="ghost" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
        <Button size="sm">Manage</Button>
      </CardFooter>
    </Card>
  );
};
