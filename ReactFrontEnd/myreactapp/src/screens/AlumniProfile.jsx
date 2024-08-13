import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';

function AlumniProfile() {
  // Mock Data
  const alumniData = {
    profilePicture: './ProfilePic.png',
    name: 'Utkarsh Singh',
    degree: 'B.Tech',
    year: '2021',
    department: 'ECE',
    id: '123456',
    placementStatus: 'Placed',
    companyName: 'Tech Corp',
    jobRole: 'Software Engineer',
    experienceLevel: 'Entry',
    postGraduationCourse: 'M.Tech',
    postGraduationYear: '2023',
    graduationCourse: 'B.Tech',
    graduationYear: '2021',
    higherSecondaryCourse: '12th Grade',
    higherSecondaryYear: '2017',
    secondaryCourse: '10th Grade',
    secondaryYear: '2015',
    dateOfBirth: '27 August 1997',
    email: 'utkarshsingh379@gmail.com',
    contactNo: '+91-8299120060',
  };

  const [showForm, setShowForm] = useState(false);

  const handleEditProfile = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        {/* Profile Card */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={alumniData.profilePicture || 'defaultProfilePicture.jpg'}
                className="img-fluid rounded-start"
                alt="Profile"
                style={{ maxHeight: '250px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body position-relative">
                <span
                  className="position-absolute top-0 end-0 p-2 bg-light border rounded"
                  style={{ margin: '15px', fontSize: '0.85rem' }}
                >
                  ID: {alumniData.id}
                </span>
                <div className="text-end mt-5">
                  <h3 className="card-title d-inline-block me-2">
                    {alumniData.name}
                  </h3>
                  <p className="card-text">
                    {alumniData.degree}, {alumniData.year} - {alumniData.department}
                  </p>
                  <button className="btn btn-warning me-2" onClick={handleEditProfile}>
                    Edit Profile
                  </button>
                  <button className="btn btn-link">Update Social Links</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Display form only if showForm is true */}
        {showForm && (
          <div className="card mb-3">
            <div className="card-header text-white bg-primary">Update Profile</div>
            <div className="card-body">
              <form>
                {/* Professional Details */}
                <div className="mb-4">
                  <h5>Professional Details</h5>
                  <div className="mb-3">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.companyName}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Job Role</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.jobRole}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Experience Level</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.experienceLevel}
                    />
                  </div>
                </div>

                {/* Educational Details */}
                <div className="mb-4">
                  <h5>Educational Details</h5>
                  <div className="mb-3">
                    <label className="form-label">Post Graduation Course</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.postGraduationCourse}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Post Graduation Year</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.postGraduationYear}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Graduation Course</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.graduationCourse}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Graduation Year</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.graduationYear}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Higher Secondary Course</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.higherSecondaryCourse}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Higher Secondary Year</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.higherSecondaryYear}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Secondary Course</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.secondaryCourse}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Secondary Year</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={alumniData.secondaryYear}
                    />
                  </div>
                </div>

                {/* Personal Information */}
                <div className="mb-4">
                  <h5>Personal Information</h5>
                  <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      defaultValue={alumniData.dateOfBirth}
                    />
                  </div>
                </div>

                {/* Contact Details */}
                <div className="mb-4">
                  <h5>Contact Details</h5>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={alumniData.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contact No.</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={alumniData.contactNo}
                    />
                  </div>
                </div>

                {/* Save Button */}
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Professional Details Card */}
        <div className="card mb-3">
          <div className="card-header text-white">Professional Details</div>
          <div className="card-body">
            {alumniData.placementStatus === 'Placed' ? (
              <>
                <p>Company Name: {alumniData.companyName}</p>
                <p>Job Role: {alumniData.jobRole}</p>
                <p>Experience Level: {alumniData.experienceLevel}</p>
                <p>Placement Status: {alumniData.placementStatus}</p>
              </>
            ) : (
              <p>Placement Status: Unplaced</p>
            )}
          </div>
        </div>

        {/* Education Details */}
        <div className="card mb-3">
          <div className="card-header text-white">Education Details</div>
          <div className="card-body">
            <p>
              Post Graduation: {alumniData.postGraduationCourse || 'Nill'}{' '}
              <small className="text-muted">
                {alumniData.postGraduationYear && `(${alumniData.postGraduationYear})`}
              </small>
            </p>
            <p>
              Graduation: {alumniData.graduationCourse || 'Nill'}{' '}
              <small className="text-muted">
                {alumniData.graduationYear && `(${alumniData.graduationYear})`}
              </small>
            </p>
            <p>
              Higher Secondary: {alumniData.higherSecondaryCourse || 'Nill'}{' '}
              <small className="text-muted">
                {alumniData.higherSecondaryYear && `(${alumniData.higherSecondaryYear})`}
              </small>
            </p>
            <p>
              Secondary: {alumniData.secondaryCourse || 'Nill'}{' '}
              <small className="text-muted">
                {alumniData.secondaryYear && `(${alumniData.secondaryYear})`}
              </small>
            </p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="card mb-3">
          <div className="card-header text-white">Personal Information</div>
          <div className="card-body">
            <p>Date of Birth: {alumniData.dateOfBirth}</p>
          </div>
        </div>

        {/* Contact Details */}
        <div className="card mb-3">
          <div className="card-header text-white">Contact Details</div>
          <div className="card-body">
            <p>Email: {alumniData.email}</p>
            <p>Contact No.: {alumniData.contactNo}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AlumniProfile;
