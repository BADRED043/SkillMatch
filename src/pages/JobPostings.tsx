import React from 'react';
import { Briefcase, MapPin, DollarSign } from 'lucide-react';

const JobPostings: React.FC = () => {
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      salary: '$120k - $160k',
      type: 'Full-time',
      skills: ['React', 'TypeScript', 'GraphQL'],
      description: 'We are looking for an experienced Frontend Developer to join our team...',
      postedDate: '2d ago',
      matchRate: 95,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'StartupX',
      location: 'Remote',
      salary: '$100k - $140k',
      type: 'Full-time',
      skills: ['Node.js', 'React', 'PostgreSQL'],
      description: 'Join our fast-growing startup as a Full Stack Engineer...',
      postedDate: '1w ago',
      matchRate: 88,
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'New York, NY',
      salary: '$130k - $170k',
      type: 'Full-time',
      skills: ['AWS', 'Kubernetes', 'Terraform'],
      description: 'Looking for a DevOps Engineer to help scale our infrastructure...',
      postedDate: '3d ago',
      matchRate: 82,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Job Postings</h1>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Post New Job
        </button>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  {job.title}
                </h2>
                <p className="text-gray-600">{job.company}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <DollarSign className="mr-1 h-4 w-4" />
                    {job.salary}
                  </span>
                  <span className="flex items-center">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {job.type}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {job.matchRate}% Match
                </span>
                <p className="mt-2 text-sm text-gray-500">Posted {job.postedDate}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-600">{job.description}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-end space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                Save for Later
              </button>
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobPostings;