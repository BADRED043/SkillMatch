import React from 'react';
import { User, Mail, Briefcase, MapPin, Award } from 'lucide-react';

const Profile: React.FC = () => {
  const skills = [
    { name: 'React', level: 'Expert', percentage: 95 },
    { name: 'TypeScript', level: 'Advanced', percentage: 85 },
    { name: 'Node.js', level: 'Intermediate', percentage: 75 },
    { name: 'GraphQL', level: 'Beginner', percentage: 60 },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-gray-200">
              <User className="h-full w-full p-4 text-gray-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <div className="mt-1 flex items-center space-x-4 text-gray-500">
                <span className="flex items-center">
                  <Mail className="mr-1 h-4 w-4" />
                  john@example.com
                </span>
                <span className="flex items-center">
                  <Briefcase className="mr-1 h-4 w-4" />
                  Senior Developer
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-1 h-4 w-4" />
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="flex items-center text-lg font-semibold text-gray-900">
            <Award className="mr-2 h-5 w-5 text-blue-600" />
            Skills & Expertise
          </h2>
          <div className="mt-4 space-y-4">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-blue-600"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h2 className="flex items-center text-lg font-semibold text-gray-900">
            <Briefcase className="mr-2 h-5 w-5 text-blue-600" />
            Experience
          </h2>
          <div className="mt-4 space-y-4">
            <div className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-medium text-gray-900">Senior Developer</h3>
              <p className="text-sm text-gray-500">TechCorp • 2020 - Present</p>
              <p className="mt-2 text-gray-600">
                Led development of multiple web applications using React and Node.js
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-4">
              <h3 className="font-medium text-gray-900">Full Stack Developer</h3>
              <p className="text-sm text-gray-500">StartupX • 2018 - 2020</p>
              <p className="mt-2 text-gray-600">
                Developed and maintained various web applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;