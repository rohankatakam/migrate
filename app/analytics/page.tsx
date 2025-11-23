'use client';

import React from 'react';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { mockDashboardStats } from '@/lib/data/mockData';

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-2 text-gray-600">Detailed metrics and insights from your migrations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Migration Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-6xl font-bold text-primary-600">95%</div>
              <p className="mt-2 text-gray-600">Average success rate across all migrations</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Time Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-6xl font-bold text-success-500">{mockDashboardStats.timeSaved}</div>
              <p className="mt-2 text-gray-600">Engineering hours saved</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Migration Types</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Spring Boot</span>
                <span className="font-semibold">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Java Version</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Python Frameworks</span>
                <span className="font-semibold">25%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Review Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Avg Review Time</p>
                <p className="text-2xl font-bold text-gray-900">18 mins</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Reviewers Engaged</p>
                <p className="text-2xl font-bold text-gray-900">52</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Approval Rate</p>
                <p className="text-2xl font-bold text-gray-900">94%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>ROI Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Cost Savings</p>
                <p className="text-2xl font-bold text-success-500">$96K</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time Reduced</p>
                <p className="text-2xl font-bold text-primary-600">75%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Production Incidents</p>
                <p className="text-2xl font-bold text-success-500">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
