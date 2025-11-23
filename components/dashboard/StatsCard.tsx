import React from 'react';
import { Card, CardContent } from '../ui/Card';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon, trend }) => {
  return (
    <Card>
      <div style={{ padding: '1.5rem' }}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="text-3xl font-semibold text-gray-900" style={{ marginTop: '0.5rem' }}>{value}</p>
            {trend && (
              <p className={`text-sm ${trend.isPositive ? 'text-success-500' : 'text-error-500'}`} style={{ marginTop: '0.5rem' }}>
                {trend.isPositive ? '↑' : '↓'} {trend.value}
              </p>
            )}
          </div>
          {icon && <div className="flex-shrink-0 text-primary-600" style={{ marginLeft: '1rem' }}>{icon}</div>}
        </div>
      </div>
    </Card>
  );
};
