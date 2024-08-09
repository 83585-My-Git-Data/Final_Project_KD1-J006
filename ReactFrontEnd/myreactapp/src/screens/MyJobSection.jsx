import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyJobsSection() {
  const [myJobs, setMyJobs] = useState([]);

  useEffect(() => {
    // Example job data (this would be fetched from an API)
    const fetchedMyJobs = [
      {
        id: 1,
        title: 'PHP Developer',
        company: 'Company 1',
        location: 'Location 1',
        area: 'IT/ Management',
        appliedDate: 'Applied 2 months ago',
      },
      {
        id: 2,
        title: 'Java Developer',
        company: 'Company 1',
        location: 'Location 1',
        area: 'IT/ Management',
        appliedDate: 'Applied 8 months ago',
      },
      // Add more jobs as needed
    ];

    // Update state with fetched jobs
    setMyJobs(fetchedMyJobs);
  }, []);

  return (
    <div>
        <Navbar/>
    <div className="container mt-4">
      <h2>My Jobs ({myJobs.length})</h2>
      
      {/* Rendering job cards dynamically */}
      {myJobs.map((job) => (
        <div className="card mb-3" key={job.id}>
          <div className="card-body">
            <h5 className="card-title">{job.title}</h5>
            <p className="card-text">
              <strong>Company :</strong> {job.company}<br/>
              <strong>Job Location :</strong> {job.location}<br/>
              <strong>Job Area :</strong> {job.area}
            </p>
            <p className="text-muted text-right">
              {job.appliedDate}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
}

export default MyJobsSection;
