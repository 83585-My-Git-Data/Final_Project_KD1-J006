import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { register2 } from "../services/admin"; // Import the register2 function
import { increment } from "../features/memberslice";

function Register2() {
<<<<<<< HEAD
  const [batch, setBatch] = useState("");
  const [address, setAddress] = useState("");
  const [course, setCourse] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [dob, setDob] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [gender, setGender] = useState("");
  const [placementStatus, setPlacementStatus] = useState("");
  const [companyName, setCompanyName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("userId"); // Fetch the userId from sessionStorage

  const onRegister2 = async () => {
    if (!userId) {
      toast.error(
        "User ID not found. Please start the registration process from the beginning."
      );
      navigate("/register");
      return;
    }

    if (batch.length === 0) {
      toast.error("Please enter batch");
    } else if (address.length === 0) {
      toast.error("Please enter address");
    } else if (course.length === 0) {
      toast.error("Please enter course");
    } else if (jobRole.length === 0) {
      toast.error("Please enter job role");
    } else if (dob.length === 0) {
      toast.error("Please enter date of birth");
    } else if (experienceLevel.length === 0) {
      toast.error("Please enter experience level");
    } else if (gender.length === 0) {
      toast.error("Please enter gender");
    } else if (placementStatus.length === 0) {
      toast.error("Please enter placement status");
    } else if (companyName.length === 0) {
      toast.error("Please enter company name");
    } else {
      // Call the register2 function and pass the userId and required fields
      const result = await register2(
        userId,
        batch,
        address,
        course,
        jobRole,
        dob,
        experienceLevel,
        gender,
        placementStatus,
        companyName
      );

      if (result) {
        dispatch(increment());
        toast.success("Successfully completed step 2");
        navigate("/register3");
      } else {
        toast.error("Failed to complete step 2. Please try again.");
      }
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "1000px", width: "100%" }}
      >
=======
  const [batch, setBatch] = useState('');
  const [address, setAddress] = useState('');
  const [course, setCourse] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [dob, setDob] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [gender, setGender] = useState('');
  const [placementStatus, setPlacementStatus] = useState('');
  const [companyName, setCompanyName] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister2 = async () => {
    if (batch.length === 0) {
      toast.error('Please enter batch');
    } else if (address.length === 0) {
      toast.error('Please enter address');
    } else if (course.length === 0) {
      toast.error('Please enter course');
    } else if (jobRole.length === 0) {
      toast.error('Please enter job role');
    } else if (dob.length === 0) {
      toast.error('Please enter date of birth');
    } else if (experienceLevel.length === 0) {
      toast.error('Please enter experience level');
    } else if (gender.length === 0) {
      toast.error('Please enter gender');
    } else if (placementStatus.length === 0) {
      toast.error('Please enter placement status');
    } else if (companyName.length === 0) {
      toast.error('Please enter company name');
    } else {
      dispatch(increment());
      // toast.success('Successfully registered a new user');
      navigate('/register3');
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '1000px', width: '100%' }}>
>>>>>>> main
        <div className="card-body">
          {/* Step Indicator */}
          <div className="text-center mb-3">
            <small className="text-muted">Step 2 of 3</small>
          </div>
          <div className="text-center mb-4">
            <h2 className="h5">Complete your profile</h2>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
<<<<<<< HEAD
              <label htmlFor="batch" className="form-label">
                Batch
              </label>
=======
              <label htmlFor="batch" className="form-label">Batch</label>
>>>>>>> main
              <input
                onChange={(e) => setBatch(e.target.value)}
                type="text"
                id="batch"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
=======
                placeholder="Example: September 2023"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="address" className="form-label">Address</label>
>>>>>>> main
              <input
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                id="address"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="course" className="form-label">
                Course
              </label>
=======
                placeholder="Enter the Full Address"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="course" className="form-label">Course</label>
>>>>>>> main
              <input
                onChange={(e) => setCourse(e.target.value)}
                type="text"
                id="course"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="jobRole" className="form-label">
                Job Role
              </label>
=======
                placeholder="Example: PG-DAC, PG-DESD"
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="jobRole" className="form-label">Job Role</label>
>>>>>>> main
              <input
                onChange={(e) => setJobRole(e.target.value)}
                type="text"
                id="jobRole"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
=======
                placeholder="Example: Data-Scientist, Software-Developer"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="dob" className="form-label">Date of Birth</label>
>>>>>>> main
              <input
                onChange={(e) => setDob(e.target.value)}
                type="date"
                id="dob"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="experienceLevel" className="form-label">
                Experience Level
              </label>
=======
                value={dob}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="experienceLevel" className="form-label">Experience Level</label>
>>>>>>> main
              <input
                onChange={(e) => setExperienceLevel(e.target.value)}
                type="text"
                id="experienceLevel"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="form-control"
                id="gender"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="placementStatus" className="form-label">
                Placement Status
              </label>
=======
                placeholder="Enter in Years (e.g., 4, 5)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Male'}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Female'}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="Other"
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Other'}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="placementStatus" className="form-label">Placement Status</label>
>>>>>>> main
              <input
                onChange={(e) => setPlacementStatus(e.target.value)}
                type="text"
                id="placementStatus"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
=======
                placeholder="Example: Placed, Unplaced"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-3">
              <label htmlFor="companyName" className="form-label">Company Name</label>
>>>>>>> main
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                id="companyName"
                className="form-control"
<<<<<<< HEAD
              />
            </div>
          </div>
          <button onClick={onRegister2} className="btn btn-primary w-100">
            Next
          </button>
          <div className="text-center mt-3">
            <Link to="/register3">Skip</Link>
=======
                placeholder="Example: Google, Microsoft"
              />
            </div>
          </div>
          <button onClick={onRegister2} className="btn btn-primary w-100">Next</button>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
>>>>>>> main
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register2;
