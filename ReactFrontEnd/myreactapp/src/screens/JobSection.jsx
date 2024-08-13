import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';

// import 'bootstrap/dist/css/bootstrap.min.css';

function JobSection() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Example job data
    const fetchedJobs = [
      {
        id: 1,
        title: 'PHP Developer',
        companyName: 'Company 1',
        jobLocation: 'Location 1',
        domainTag: 'IT/ Management',
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        companyName: 'Company 1',
        jobLocation: 'Location 1',
        domainTag: 'IT/ Management',
=======
        company: 'Company 1',
        location: 'Location 1',
        area: 'IT/ Management',
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
>>>>>>> main
        skills: 'PHP, HTML, CSS, Bootstrap',
      },
      {
        id: 2,
        title: 'Software Developer',
        companyName: 'Google',
        jobLocation: 'Bangalore',
        domainTag: 'IT/ Management/Digital Marketing',
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
        companyName: 'Google',
        jobLocation: 'Bangalore',
        domainTag: 'IT/ Management/Digital Marketing',
=======
        company: 'Google',
        location: 'Bangalore',
        area: 'IT/ Management/Digital Marketing',
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
>>>>>>> main
        skills: 'PHP, HTML, CSS, Bootstrap',
      },
      // Add more jobs as needed
    ];

    setJobs(fetchedJobs);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Job Section</h2>
          <Link to='/jobpostingpage' className="btn btn-warning">Post a New Job</Link>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
          <Link to='/jobpostingpage' className="btn btn-warning">Post a New Job</Link>
=======
          <button className="btn btn-warning">Post a New Job</button>
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
>>>>>>> main
        </div>

        <div className="mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control mr-2"
              placeholder="Type a Job Role, Location, Domain"
            />
            <div className='ms-3'>
              <button className="btn btn-primary ml-2">Search</button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mb-3">
          <Link to='/myjobsection' className='btn' style={{ backgroundColor: '#86B6F6' }}>My Jobs</Link>
        </div>
                                                                                                              {/* style={{ backgroundColor: '#EEF5FF' }} */}
        {/* Rendering job cards dynamically */}
        {jobs.map((job) => (
          <div className="card mb-3" key={job.id}>
            <h5 className="card-header " style={{ backgroundColor: '#B4D4FF' }}>{job.title}</h5>
            <div className="card-body" style={{ backgroundColor: '#EEF5FF' }}>
              <p className="card-text">
                <strong>Company Name :</strong> {job.companyName}<br />
                <strong>Job Location :</strong> {job.jobLocation}<br />
                <strong>Domain Tag :</strong> {job.domainTag}<br />
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
                <strong>Company Name :</strong> {job.companyName}<br />
                <strong>Job Location :</strong> {job.jobLocation}<br />
                <strong>Domain Tag :</strong> {job.domainTag}<br />
=======
                <strong>Company :</strong> {job.company}<br />
                <strong>Job Location :</strong> {job.location}<br />
                <strong>Job Area :</strong> {job.area}<br />
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
>>>>>>> main
                <strong>Skills :</strong> {job.skills}
              </p>
              <div className="d-flex justify-content-end">
                <Link to={`/jobdescriptionpage/${job.id}`} className="btn " style={{ backgroundColor: '#B4D4FF' }}>View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default JobSection;
