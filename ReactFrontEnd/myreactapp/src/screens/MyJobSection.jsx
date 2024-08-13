import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    <div className='mt-5'>
      <Link to='/jobsection' className='btn btn-info mt-5'>Back</Link>

    </div>
    <br/>
<<<<<<< HEAD
=======
=======
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
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
<<<<<<< HEAD
    <br/>
    <br/>
=======
<<<<<<< HEAD
    <br/>
    <br/>
=======
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
    <Footer/>
    </div>
  );
}

export default MyJobsSection;
