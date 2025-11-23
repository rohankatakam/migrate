'use client';

import React from 'react';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { MigrationCard } from '@/components/dashboard/MigrationCard';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { mockMigrations, mockActivities, mockDashboardStats } from '@/lib/data/mockData';

export default function Dashboard() {
  const activeMigrations = mockMigrations.filter(m =>
    ['executing', 'reviewing', 'merging'].includes(m.status)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome back! Here's what's happening with your migrations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Migrations"
          value={mockDashboardStats.totalMigrations}
        />
        <StatsCard
          title="Active Migrations"
          value={mockDashboardStats.activeMigrations}
        />
        <StatsCard
          title="Time Saved"
          value={mockDashboardStats.timeSaved}
        />
        <StatsCard
          title="PRs Merged"
          value={mockDashboardStats.prsMerged}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Active Migrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMigrations.map((migration) => (
            <MigrationCard key={migration.id} migration={migration} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed activities={mockActivities} />
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm" style={{ padding: '1.5rem' }}>
          <h3 className="text-xl font-semibold text-gray-900" style={{ marginBottom: '1rem' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button className="w-full text-left bg-primary-50 hover:bg-primary-100 rounded-md transition-colors" style={{ padding: '0.75rem 1rem' }}>
              <p className="font-medium text-primary-900">Create New Migration</p>
              <p className="text-sm text-primary-700" style={{ marginTop: '0.25rem' }}>Start a new code migration project</p>
            </button>
            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-md transition-colors" style={{ padding: '0.75rem 1rem' }}>
              <p className="font-medium text-gray-900">View Analytics</p>
              <p className="text-sm text-gray-600" style={{ marginTop: '0.25rem' }}>See detailed migration metrics</p>
            </button>
            <button className="w-full text-left bg-gray-50 hover:bg-gray-100 rounded-md transition-colors" style={{ padding: '0.75rem 1rem' }}>
              <p className="font-medium text-gray-900">Configure Settings</p>
              <p className="text-sm text-gray-600" style={{ marginTop: '0.25rem' }}>Manage integrations and preferences</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
