import React from 'react';
import { Users, GraduationCap, BookOpen, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Total Students', value: '1,234' },
    { icon: GraduationCap, label: 'Teachers', value: '56' },
    { icon: BookOpen, label: 'Classes', value: '32' },
    { icon: Award, label: 'Average GPA', value: '3.5' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-8 h-8 text-indigo-600" />
                <span className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-gray-600">{stat.label}</h3>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-3">
            {[
              'New student registration: John Doe',
              'Updated class schedule for Grade 10',
              'Teacher meeting scheduled for Friday',
              'Report cards generated for Grade 8',
            ].map((activity, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-md text-sm text-gray-600"
              >
                {activity}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {[
              'Parent-Teacher Meeting - March 15',
              'Sports Day - March 20',
              'Science Fair - March 25',
              'Spring Break Begins - April 1',
            ].map((event, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-md text-sm text-gray-600"
              >
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;