import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Footer from '../components/footerComponent';
import Navbar from '../components/navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';

function JobDescriptionPage() {
    const { id } = useParams();
    const [job, setJob] = useState(null);

    // Mock data directly inside the component
    const mockJobsData = [
        {
            id: 1,
            title: 'PHP Developer',
            companyName: 'Company 1',
            jobLocation: 'Location 1',
            experienceLevel: '3-5 years',
            domainTag: 'IT/Management',
            postingDate: '2024-08-01',
            applicationEndDate: '2024-08-31',
            jobDescription: 'This is a great opportunity for a PHP Developer. <br> Please apply at <a href="https://company1.jobs/php-developer">this link</a>.',
        },
        {
            id: 2,
            title: 'Software Developer',
            companyName: 'Google',
            jobLocation: 'Bangalore',
            experienceLevel: '5-7 years',
            domainTag: 'IT/Management/Digital Marketing',
            postingDate: '2024-08-05',
            applicationEndDate: '2024-09-05',
            jobDescription: 'Exciting opportunity at Google. <br> Please apply at <a href="https://google.jobs/software-developer">this link</a>.',
        },
        // Add more job data as needed
    ];

    useEffect(() => {
        // Find the job in the mock data by its ID
        const selectedJob = mockJobsData.find(job => job.id === parseInt(id));
        setJob(selectedJob);
    }, [id]);

    if (!job) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar/>
            <br/>
            <br/>
            <br/>
            <div className="container mt-5 mb-5">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h2>{job.title}</h2>
                            <Link to="/jobsection" className="btn btn-secondary">Back to all Jobs</Link>
                        </div>
                        <table className="table table-bordered mt-4">
                            <tbody>
                                <tr>
                                    <th>Job Role</th>
                                    <td>{job.title}</td>
                                </tr>
                                <tr>
                                    <th>Experience Level</th>
                                    <td>{job.experienceLevel}</td>
                                </tr>
                                <tr>
                                    <th>Job Location</th>
                                    <td>{job.jobLocation}</td>
                                </tr>
                                <tr>
                                    <th>Domain Tag</th>
                                    <td>{job.domainTag}</td>
                                </tr>
                                <tr>
                                    <th>Job Posting Date</th>
                                    <td>{job.postingDate}</td>
                                </tr>
                                <tr>
                                    <th>Job Application End Date</th>
                                    <td>{job.applicationEndDate}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-4">
                            <h4>Job Description</h4>
                            <p dangerouslySetInnerHTML={{ __html: job.jobDescription }} />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
}

export default JobDescriptionPage;
