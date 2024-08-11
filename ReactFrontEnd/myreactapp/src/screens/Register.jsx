import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../features/memberslice';
import './Styles/Register.css'; // Import custom CSS for any additional styling

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('Alumni');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async () => {
    if (firstName.length === 0) {
      toast.error('Please enter first name');
    } else if (lastName.length === 0) {
      toast.error('Please enter last name');
    } else if (email.length === 0) {
      toast.error('Please enter email');
    } else if (password.length === 0) {
      toast.error('Please enter password');
    } else if (confirmPassword.length === 0) {
      toast.error('Please confirm the password');
    } else if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else if (contact.length === 0) {
      toast.error('Please enter Contact number');
    } else {
      dispatch(increment());
      // toast.success('Successfully registered a new user');
      navigate('/register2');
    }
  };

  return (
    <div className="register-page d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '530px', width: '100%' }}>
        <div className="card-body">
          {/* Step Indicator */}
          <div className="text-center mb-3">
            <small className="text-muted">Step 1 of 3</small>
          </div>
          <div className="text-center mb-4">
            <h2 className="h5">Create your account</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstName"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastName"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact</label>
            <input
              onChange={(e) => setContact(e.target.value)}
              type="text"
              id="contact"
              className="form-control"
              placeholder="Enter 10-digit phone number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
              id="role"
              value="Alumni"
              disabled
            >
              <option value="Alumni">Alumni</option>
            </select>
          </div>
          <button onClick={onRegister} className="btn btn-primary w-100">Next</button>
          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
