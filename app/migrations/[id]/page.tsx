'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { mockMigrations, mockPRs } from '@/lib/data/mockData';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';

export default function MigrationDetailPage() {
  const params = useParams();
  const migration = mockMigrations.find((m) => m.id === params.id);

  if (!migration) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Migration not found</h1>
          <Link href="/migrations" className="mt-4 inline-block">
            <Button>Back to Migrations</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{migration.name}</h1>
            <p className="mt-2 text-gray-600">{migration.repository}</p>
          </div>
          <Badge status={migration.status} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Progress</div>
            <div className="text-3xl font-bold text-gray-900 mb-4">
              {Math.round((migration.progress.current / migration.progress.total) * 100)}%
            </div>
            <ProgressBar value={migration.progress.current} max={migration.progress.total} showLabel />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">PRs Merged</div>
            <div className="text-3xl font-bold text-gray-900">
              {migration.prs.merged} / {migration.prs.total}
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {migration.prs.inReview} in review, {migration.prs.failed} failed
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-gray-500 mb-1">Time Estimate</div>
            <div className="text-3xl font-bold text-gray-900">{migration.timeEstimate}</div>
            <div className="mt-2 text-sm text-gray-500">Owner: {migration.owner}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Pull Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockPRs.map((pr) => (
                <div key={pr.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">#{pr.number}</span>
                      <span className="text-sm text-gray-600">{pr.title}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                      <span>{pr.assignee}</span>
                      <span>•</span>
                      <span>{pr.filesChanged} files</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge status={pr.status} />
                    <a href={pr.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Migration Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-success-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Migration Started</p>
                  <p className="text-xs text-gray-500">{new Date(migration.createdAt).toLocaleString()}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-success-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Repository Analysis Complete</p>
                  <p className="text-xs text-gray-500">Detected dependencies and blast radius</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary-500"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">PRs Created</p>
                  <p className="text-xs text-gray-500">{migration.prs.total} pull requests generated</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-gray-300"></div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Migration Complete</p>
                  <p className="text-xs text-gray-400">Estimated completion</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 flex gap-3">
        <Button variant="ghost" onClick={() => window.history.back()}>
          Back
        </Button>
        <Button variant="danger">Pause Migration</Button>
        <Button>Download Report</Button>
      </div>
    </div>
  );
}
