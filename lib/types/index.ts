export type MigrationStatus =
  | 'draft'
  | 'planned'
  | 'executing'
  | 'reviewing'
  | 'merging'
  | 'complete'
  | 'paused'
  | 'blocked'
  | 'failed';

export type MigrationType =
  | 'spring-boot-2-3'
  | 'spring-boot-3-4'
  | 'java-11-17'
  | 'java-17-21'
  | 'sqlalchemy-1-2'
  | 'django-3-4';

export interface Migration {
  id: string;
  name: string;
  type: MigrationType;
  status: MigrationStatus;
  repository: string;
  createdAt: string;
  updatedAt: string;
  progress: {
    current: number;
    total: number;
  };
  prs: {
    total: number;
    merged: number;
    inReview: number;
    failed: number;
  };
  timeEstimate: string;
  owner: string;
}

export interface PRStatus {
  id: string;
  number: number;
  title: string;
  status: 'pending' | 'approved' | 'changes-requested' | 'merged' | 'failed';
  assignee: string;
  filesChanged: number;
  createdAt: string;
  url: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Activity {
  id: string;
  type: 'pr_created' | 'pr_merged' | 'pr_failed' | 'migration_started' | 'migration_completed';
  message: string;
  timestamp: string;
  migrationId: string;
}

export interface DashboardStats {
  totalMigrations: number;
  activeMigrations: number;
  completedMigrations: number;
  timeSaved: string;
  prsMerged: number;
}
