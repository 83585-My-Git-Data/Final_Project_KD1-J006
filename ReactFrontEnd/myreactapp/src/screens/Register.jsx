// src/screens/Register.js
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../features/memberslice';
import { register } from '../services/admin';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // get the navigation hook
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = async () => {
    if (firstName.length === 0) {
      toast.error('please enter first name');
    } else if (lastName.length === 0) {
      toast.error('please enter last name');
    } else if (email.length === 0) {
      toast.error('please enter email');
    } else if (password.length === 0) {
      toast.error('please enter password');
    } else if (confirmPassword.length === 0) {
      toast.error('please confirm the password');
    } else if (password !== confirmPassword) {
      toast.error('password does not match');
    } else {
      // Here we assume the register service is successful
      // const result = await register(firstName, lastName, email, password);
      // if (result['status'] === 'success') {
      dispatch(increment());
      toast.success('Successfully registered a new user');
      navigate('/login');
      // } else {
      //   toast.error(result['error']);
      // }
    }
  };

  return (
    <div>
      <h2 className='page-header'>Register</h2>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Confirm Password</label>
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type='password'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <div>
                Already have an account? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister} className='btn btn-success mt-2'>
                Register
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}

export default Register;
