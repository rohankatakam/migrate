import React from 'react';
import { MigrationStatus } from '@/lib/types';

interface BadgeProps {
  status: MigrationStatus | 'pending' | 'approved' | 'changes-requested' | 'merged' | 'failed';
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ status, children }) => {
  const statusConfig = {
    draft: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Draft' },
    planned: { bg: 'bg-blue-100', text: 'text-blue-800', label: 'Planned' },
    executing: { bg: 'bg-primary-100', text: 'text-primary-800', label: 'Executing' },
    reviewing: { bg: 'bg-warning-100', text: 'text-warning-800', label: 'In Review' },
    merging: { bg: 'bg-info-100', text: 'text-info-800', label: 'Merging' },
    complete: { bg: 'bg-success-100', text: 'text-success-800', label: 'Complete' },
    paused: { bg: 'bg-gray-100', text: 'text-gray-800', label: 'Paused' },
    blocked: { bg: 'bg-error-100', text: 'text-error-800', label: 'Blocked' },
    failed: { bg: 'bg-error-100', text: 'text-error-800', label: 'Failed' },
    pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', label: 'Pending' },
    approved: { bg: 'bg-success-100', text: 'text-success-800', label: 'Approved' },
    'changes-requested': { bg: 'bg-warning-100', text: 'text-warning-800', label: 'Changes Requested' },
    merged: { bg: 'bg-success-100', text: 'text-success-800', label: 'Merged' },
  };

  const config = statusConfig[status] || statusConfig.draft;

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
    >
      {children || config.label}
    </span>
  );
};
