import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';

function JobPostingPage() {
    const [id, setId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [jobLocation, setJobLocation] = useState('');
    const [experienceLevel, setExperienceLevel] = useState('');
    const [workMode, setWorkMode] = useState('');
    const [salaryPackage, setSalaryPackage] = useState(0);
    const [domainTag, setDomainTag] = useState('');
    const [postingDate, setPostingDate] = useState('');
    const [applicationEndDate, setApplicationEndDate] = useState('');

    const navigate = useNavigate();

    const onSubmitJob = async () => {
        const linkPattern = /(https?:\/\/[^\s]+)/g;

        if (id.length === 0) {
            toast.error('Please enter your ID');
        } else if (companyName.length === 0) {
            toast.error('Please enter Company Name');
        } else if (jobRole.length === 0) {
            toast.error('Please enter Job Role');
        } else if (!linkPattern.test(jobDescription)) {
            toast.error('Please include a valid Job Application Link in the Job Description.');
        } else if (jobLocation.length === 0) {
            toast.error('Please enter Job Location');
        } else if (experienceLevel.length === 0) {
            toast.error('Please enter Experience Level');
        } else if (workMode.length === 0) {
            toast.error('Please select Work Mode');
        } else if (domainTag.length === 0) {
            toast.error('Please enter Domain Tag');
        } else if (postingDate.length === 0) {
            toast.error('Please enter Job Posting Date');
        } else if (applicationEndDate.length === 0) {
            toast.error('Please enter Job Application End Date');
        } else {
            // Proceed with form submission
            // Assuming submission is successful
            toast.success('Job posted successfully!');
            navigate('/myjobsection');
        }
    };

    return (
        <div>
            <Navbar />
            <br/>
            <div className="container mt-5">
                <div className="d-flex justify-content-between">
                    <h2 className="mb-4">Post a New Job</h2>
                    <button onClick={() => navigate(-1)} className="btn btn-secondary mb-3">
                        Back
                    </button>
                </div>
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="id" className="form-label">Enter your ID</label>
                        <input
                            onChange={(e) => setId(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Enter your ID"
                            value={id}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input
                            onChange={(e) => setCompanyName(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter Company Name"
                            value={companyName}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="jobRole" className="form-label">Job Role</label>
                        <input
                            onChange={(e) => setJobRole(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter Job Role"
                            value={jobRole}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="jobLocation" className="form-label">Job Location</label>
                        <input
                            onChange={(e) => setJobLocation(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter Job Location"
                            value={jobLocation}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="experienceLevel" className="form-label">Experience Level</label>
                        <input
                            onChange={(e) => setExperienceLevel(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Enter Experience Level"
                            value={experienceLevel}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="workMode" className="form-label">Work Mode</label>
                        <select
                            onChange={(e) => setWorkMode(e.target.value)}
                            className="form-select"
                            value={workMode}
                        >
                            <option value="" disabled>Select Work Mode</option>
                            <option value="Office">Work from Office</option>
                            <option value="Home">Work from Home</option>
                            <option value="Hybrid">Hybrid Mode</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="salaryPackage" className="form-label">Salary Package</label>
                        <input
                            onChange={(e) => setSalaryPackage(e.target.value)}
                            type="number"
                            className="form-control"
                            placeholder="Enter Salary Package"
                            value={salaryPackage}
                            min="0"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="domainTag" className="form-label">Domain Tag</label>
                        <input
                            onChange={(e) => setDomainTag(e.target.value)}
                            type="text"
                            className="form-control"
                            placeholder="Enter Job Domain"
                            value={domainTag}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="postingDate" className="form-label">Job Posting Date</label>
                        <input
                            onChange={(e) => setPostingDate(e.target.value)}
                            type="date"
                            className="form-control"
                            placeholder="Enter Job Posting Date"
                            value={postingDate}
                            pattern="\d{4}-\d{2}-\d{2}"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="applicationEndDate" className="form-label">Job Application End Date</label>
                        <input
                            onChange={(e) => setApplicationEndDate(e.target.value)}
                            type="date"
                            className="form-control"
                            placeholder="Enter Job Application End Date"
                            value={applicationEndDate}
                            pattern="\d{4}-\d{2}-\d{2}"
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="jobDescription" className="form-label">Job Description</label>
                        <textarea
                            onChange={(e) => {
                                const value = e.target.value;
                                setJobDescription(value);
                            }}
                            className="form-control"
                            placeholder="Enter job description along with the Job Application Link (If link not found, form will not get submitted !!)"
                            value={jobDescription}
                            rows="4"
                        />
                    </div>
                    <div className="col-12 d-flex justify-content-end mb-5">
                        <button onClick={onSubmitJob} className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default JobPostingPage;
