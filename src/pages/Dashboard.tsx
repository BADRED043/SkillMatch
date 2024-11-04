import React from 'react';
import { useAuthStore } from '../store/authStore';
import { Users, Briefcase, LineChart, Award } from 'lucide-react';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const isRecruiter = user?.role === 'recruiter';

  const stats = isRecruiter
    ? [
        { label: 'Active Job Postings', value: '12', icon: Briefcase },
        { label: 'Total Candidates', value: '48', icon: Users },
        { label: 'Skill Matches', value: '156', icon: Award },
        { label: 'Average Match Rate', value: '85%', icon: LineChart },
      ]
    : [
        { label: 'Applied Jobs', value: '8', icon: Briefcase },
        { label: 'Skill Matches', value: '24', icon: Award },
        { label: 'Match Rate', value: '75%', icon: LineChart },
        { label: 'Profile Views', value: '15', icon: Users },
      ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {isRecruiter ? (
          <>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Recent Applications
              </h2>
              <div className="space-y-4">
                {/* Mock data */}
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        Senior Developer Position
                      </p>
                      <p className="text-sm text-gray-600">
                        3 new applications today
                      </p>
                    </div>
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                      Review
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Top Matching Candidates
              </h2>
              <div className="space-y-4">
                {/* Mock data */}
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200" />
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">John Smith</p>
                        <p className="text-sm text-gray-600">
                          95% match • Full Stack Developer
                        </p>
                      </div>
                    </div>
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                      View Profile
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Recommended Jobs
              </h2>
              <div className="space-y-4">
                {/* Mock data */}
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium text-gray-900">
                        Senior Frontend Developer
                      </p>
                      <p className="text-sm text-gray-600">
                        TechCorp • 90% match
                      </p>
                    </div>
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-gray-900">
                Skill Gap Analysis
              </h2>
              <div className="space-y-4">
                {/* Mock data */}
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-gray-900">React Native</p>
                      <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">
                        Intermediate
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className="h-2 rounded-full bg-blue-600"
                          style={{ width: '60%' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;