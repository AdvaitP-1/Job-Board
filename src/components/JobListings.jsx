import { useState, useEffect } from 'react';
import JobListing from './JobListing';

// eslint-disable-next-line react/prop-types
const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = await fetch('https://jobs.github.com/positions.json');
  }, []);

  return (
      <section className=" px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          { jobListings.map((job) => (
              <JobListing key={job.id} job={job} />
          )) }
           
        </div>
      </div>
    </section>
  )
}

export default JobListings