'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';
import { ChatInterface } from '@/components/migration/ChatInterface';

export default function NewMigrationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    repository: '',
    migrationType: '',
    enableSmeRouting: true,
  });

  const migrationTypes = [
    { value: 'spring-boot-2-3', label: 'Spring Boot 2 → 3' },
    { value: 'spring-boot-3-4', label: 'Spring Boot 3 → 4' },
    { value: 'java-11-17', label: 'Java 11 → 17' },
    { value: 'java-17-21', label: 'Java 17 → 21' },
    { value: 'sqlalchemy-1-2', label: 'SQLAlchemy 1 → 2' },
    { value: 'django-3-4', label: 'Django 3 → 4' },
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    router.push('/migrations');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Migration</h1>
        <p className="mt-2 text-gray-600">Set up a new automated code migration project</p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((num) => (
            <React.Fragment key={num}>
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= num
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-900">
                  {num === 1 && 'Repository'}
                  {num === 2 && 'Configuration'}
                  {num === 3 && 'Plan Generation'}
                </span>
              </div>
              {num < 3 && (
                <div className={`flex-1 h-1 mx-4 ${step > num ? 'bg-primary-600' : 'bg-gray-200'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Select Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                label="Repository URL"
                type="url"
                placeholder="https://github.com/org/repo"
                value={formData.repository}
                onChange={(e) => setFormData({ ...formData, repository: e.target.value })}
              />
              <div className="bg-info-50 border border-info-200 rounded-md p-4">
                <p className="text-sm text-info-800">
                  💡 We'll automatically detect your repository's technology stack and suggest appropriate migrations
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Migration Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Select
                label="Migration Type"
                value={formData.migrationType}
                onChange={(e) => setFormData({ ...formData, migrationType: e.target.value })}
              >
                <option value="">Select migration type</option>
                {migrationTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </Select>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="sme-routing"
                  checked={formData.enableSmeRouting}
                  onChange={(e) => setFormData({ ...formData, enableSmeRouting: e.target.checked })}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="sme-routing" className="ml-2 block">
                  <span className="text-sm font-medium text-gray-900">Enable SME Routing</span>
                  <p className="text-sm text-gray-500">
                    Automatically route PRs to code owners based on Git history and file ownership
                  </p>
                </label>
              </div>

              <div className="bg-success-50 border border-success-200 rounded-md p-4">
                <p className="text-sm text-success-800 font-medium">Recommended Settings</p>
                <ul className="mt-2 text-sm text-success-700 list-disc list-inside space-y-1">
                  <li>SME routing reduces review bottlenecks by 10x</li>
                  <li>Automatic blast radius analysis prevents cascading failures</li>
                  <li>Real-time coordination across distributed PRs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Migration Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Repository</h4>
                    <p className="text-sm text-gray-600">{formData.repository || 'Not specified'}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Migration Type</h4>
                    <p className="text-sm text-gray-600">
                      {migrationTypes.find(t => t.value === formData.migrationType)?.label || 'Not selected'}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Estimated Metrics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• ~50 PRs will be created</li>
                      <li>• Estimated time: 2-3 days</li>
                      <li>• 95% automation rate expected</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-[600px]">
            <ChatInterface />
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        <Button
          variant="ghost"
          onClick={handleBack}
          disabled={step === 1}
        >
          Back
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => router.push('/migrations')}>
            Cancel
          </Button>
          {step < 3 ? (
            <Button onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Execute Migration
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
