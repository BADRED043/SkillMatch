import React from 'react';
import { Search, Award, TrendingUp } from 'lucide-react';

const SkillMatching: React.FC = () => {
  const candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Frontend Developer',
      skills: ['React', 'TypeScript', 'GraphQL'],
      matchRate: 95,
      experience: '8 years',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Full Stack Engineer',
      skills: ['Node.js', 'React', 'PostgreSQL'],
      matchRate: 88,
      experience: '6 years',
    },
    {
      id: 3,
      name: 'Emily Brown',
      title: 'Software Engineer',
      skills: ['Python', 'Django', 'React'],
      matchRate: 82,
      experience: '5 years',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Skill Matching</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search candidates..."
              className="block w-full rounded-md border-gray-300 pl-10 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Advanced Search
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {candidate.name}
                </h2>
                <p className="text-gray-600">{candidate.title}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Award className="mr-1 h-4 w-4" />
                    {candidate.experience} experience
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    {candidate.matchRate}% match rate
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50">
                  View Profile
                </button>
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  Contact
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillMatching;