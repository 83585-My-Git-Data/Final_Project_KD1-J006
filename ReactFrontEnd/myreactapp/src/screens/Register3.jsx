import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../features/memberslice';
import { register3 } from '../services/admin'; // Import the register3 function

function Register3() {
  const [secondaryEducationCollege, setSecondaryEducationCollege] = useState('');
  const [secondaryEducationPercentage, setSecondaryEducationPercentage] = useState('');
  const [secondaryEducationPassoutYear, setSecondaryEducationPassoutYear] = useState('');
  const [higherSecondaryEducationCollege, setHigherSecondaryEducationCollege] = useState('');
  const [higherSecondaryEducationPercentage, setHigherSecondaryEducationPercentage] = useState('');
  const [higherSecondaryEducationPassoutYear, setHigherSecondaryEducationPassoutYear] = useState('');
  const [graduationCourse, setGraduationCourse] = useState('');
  const [graduationPercentage, setGraduationPercentage] = useState('');
  const [graduationPassoutYear, setGraduationPassoutYear] = useState('');
  const [postgraduationCourse, setPostgraduationCourse] = useState('');
  const [postgraduationPercentage, setPostgraduationPercentage] = useState('');
  const [postgraduationPassoutYear, setPostgraduationPassoutYear] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister3 = async () => {
    if (secondaryEducationCollege.length === 0) {
      toast.error('Please enter secondary education college');
    } else if (secondaryEducationPercentage.length === 0) {
      toast.error('Please enter secondary education percentage');
    } else if (secondaryEducationPassoutYear.length === 0) {
      toast.error('Please enter secondary education passout year');
    } else if (higherSecondaryEducationCollege.length === 0) {
      toast.error('Please enter higher secondary education college');
    } else if (higherSecondaryEducationPercentage.length === 0) {
      toast.error('Please enter higher secondary education percentage');
    } else if (higherSecondaryEducationPassoutYear.length === 0) {
      toast.error('Please enter higher secondary education passout year');
    } else if (graduationCourse.length === 0) {
      toast.error('Please enter graduation course');
    } else if (graduationPercentage.length === 0) {
      toast.error('Please enter graduation percentage');
    } else if (graduationPassoutYear.length === 0) {
      toast.error('Please enter graduation passout year');
    } else if (postgraduationCourse.length === 0) {
      toast.error('Please enter postgraduation course');
    } else if (postgraduationPercentage.length === 0) {
      toast.error('Please enter postgraduation percentage');
    } else if (postgraduationPassoutYear.length === 0) {
      toast.error('Please enter postgraduation passout year');
    } else {
<<<<<<< HEAD
      try {
        // Call the register3 API
        const response = await register3(
          secondaryEducationCollege,
          secondaryEducationPercentage,
          secondaryEducationPassoutYear,
          higherSecondaryEducationCollege,
          higherSecondaryEducationPercentage,
          higherSecondaryEducationPassoutYear,
          graduationCourse,
          graduationPercentage,
          graduationPassoutYear,
          postgraduationCourse,
          postgraduationPercentage,
          postgraduationPassoutYear
        );

        if (response) {
          dispatch(increment());
          toast.success('Successfully registered a new user');
          navigate('/login');
        } else {
          toast.error('Registration failed. Please try again.');
        }
      } catch (error) {
        toast.error('An error occurred during registration. Please try again.');
        console.error('Registration error:', error);
      }
=======
      dispatch(increment());
      toast.success('Successfully registered a new user');
      navigate('/login');
>>>>>>> main
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '1000px', width: '100%' }}>
        <div className="card-body">
          <div className="text-center mb-3">
            <small className="text-muted">Step 3 of 3</small>
          </div>
          <div className="text-center mb-4">
            <h2 className="h5">Educational Details</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="secondaryEducationCollege" className="form-label">
                  Secondary Education College
                </label>
                <input
                  onChange={(e) => setSecondaryEducationCollege(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Example: MHJCOS"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="secondaryEducationPercentage" className="form-label">
                  Secondary Education Percentage
                </label>
                <input
                  onChange={(e) => setSecondaryEducationPercentage(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 80"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="secondaryEducationPassoutYear" className="form-label">
                  Secondary Education Passout Year
                </label>
                <input
                  onChange={(e) => setSecondaryEducationPassoutYear(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 2016"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="higherSecondaryEducationCollege" className="form-label">
                  Higher Secondary Education College
                </label>
                <input
                  onChange={(e) => setHigherSecondaryEducationCollege(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Example: PBCOE"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="higherSecondaryEducationPercentage" className="form-label">
                  Higher Secondary Education Percentage
                </label>
                <input
                  onChange={(e) => setHigherSecondaryEducationPercentage(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 84"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="higherSecondaryEducationPassoutYear" className="form-label">
                  Higher Secondary Education Passout Year
                </label>
                <input
                  onChange={(e) => setHigherSecondaryEducationPassoutYear(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 2018"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="graduationCourse" className="form-label">
                  Graduation Course
                </label>
                <input
                  onChange={(e) => setGraduationCourse(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Example: EC"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="graduationPercentage" className="form-label">
                  Graduation Percentage
                </label>
                <input
                  onChange={(e) => setGraduationPercentage(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 90"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="graduationPassoutYear" className="form-label">
                  Graduation Passout Year
                </label>
                <input
                  onChange={(e) => setGraduationPassoutYear(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 2022"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postgraduationCourse" className="form-label">
                  Postgraduation Course
                </label>
                <input
                  onChange={(e) => setPostgraduationCourse(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Example: ME"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postgraduationPercentage" className="form-label">
                  Postgraduation Percentage
                </label>
                <input
                  onChange={(e) => setPostgraduationPercentage(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 80"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="postgraduationPassoutYear" className="form-label">
                  Postgraduation Passout Year
                </label>
                <input
                  onChange={(e) => setPostgraduationPassoutYear(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="Example: 2024"
                />
              </div>
            </div>
          </div>
          <button onClick={onRegister3} className="btn btn-primary w-100">
            Register
          </button>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register3;
