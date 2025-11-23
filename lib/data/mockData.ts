import { Migration, Activity, DashboardStats, PRStatus } from '../types';

export const mockMigrations: Migration[] = [
  {
    id: '1',
    name: 'Spring Boot 2→3 Upgrade',
    type: 'spring-boot-2-3',
    status: 'reviewing',
    repository: 'acme-corp/payment-service',
    createdAt: '2024-11-20T10:00:00Z',
    updatedAt: '2024-11-22T14:30:00Z',
    progress: {
      current: 47,
      total: 50,
    },
    prs: {
      total: 50,
      merged: 47,
      inReview: 3,
      failed: 0,
    },
    timeEstimate: '2 days',
    owner: 'Sarah Chen',
  },
  {
    id: '2',
    name: 'Java 11→17 Migration',
    type: 'java-11-17',
    status: 'executing',
    repository: 'acme-corp/core-api',
    createdAt: '2024-11-21T09:00:00Z',
    updatedAt: '2024-11-22T15:00:00Z',
    progress: {
      current: 12,
      total: 35,
    },
    prs: {
      total: 35,
      merged: 8,
      inReview: 4,
      failed: 0,
    },
    timeEstimate: '3 days',
    owner: 'Michael Rodriguez',
  },
  {
    id: '3',
    name: 'SQLAlchemy 1→2 Update',
    type: 'sqlalchemy-1-2',
    status: 'complete',
    repository: 'acme-corp/analytics-engine',
    createdAt: '2024-11-15T08:00:00Z',
    updatedAt: '2024-11-18T16:00:00Z',
    progress: {
      current: 28,
      total: 28,
    },
    prs: {
      total: 28,
      merged: 28,
      inReview: 0,
      failed: 0,
    },
    timeEstimate: '1.5 days',
    owner: 'David Kumar',
  },
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'pr_merged',
    message: 'PR #47 merged in payment-service',
    timestamp: '2024-11-22T14:30:00Z',
    migrationId: '1',
  },
  {
    id: '2',
    type: 'pr_created',
    message: '4 new PRs created for core-api migration',
    timestamp: '2024-11-22T13:15:00Z',
    migrationId: '2',
  },
  {
    id: '3',
    type: 'pr_merged',
    message: 'PR #46 merged in payment-service',
    timestamp: '2024-11-22T11:45:00Z',
    migrationId: '1',
  },
  {
    id: '4',
    type: 'migration_started',
    message: 'Java 11→17 migration started for core-api',
    timestamp: '2024-11-21T09:00:00Z',
    migrationId: '2',
  },
  {
    id: '5',
    type: 'migration_completed',
    message: 'SQLAlchemy migration completed successfully',
    timestamp: '2024-11-18T16:00:00Z',
    migrationId: '3',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalMigrations: 8,
  activeMigrations: 2,
  completedMigrations: 6,
  timeSaved: '240 hours',
  prsMerged: 156,
};

export const mockPRs: PRStatus[] = [
  {
    id: '1',
    number: 48,
    title: 'Migrate payment processing to Spring Boot 3',
    status: 'approved',
    assignee: 'Sarah Chen',
    filesChanged: 12,
    createdAt: '2024-11-22T10:00:00Z',
    url: 'https://github.com/acme-corp/payment-service/pull/48',
  },
  {
    id: '2',
    number: 49,
    title: 'Update security configuration for SB3',
    status: 'pending',
    assignee: 'Mike Johnson',
    filesChanged: 5,
    createdAt: '2024-11-22T11:30:00Z',
    url: 'https://github.com/acme-corp/payment-service/pull/49',
  },
  {
    id: '3',
    number: 50,
    title: 'Refactor actuator endpoints',
    status: 'pending',
    assignee: 'Emma Davis',
    filesChanged: 8,
    createdAt: '2024-11-22T12:15:00Z',
    url: 'https://github.com/acme-corp/payment-service/pull/50',
  },
];
