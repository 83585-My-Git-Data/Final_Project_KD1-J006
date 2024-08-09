import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../features/memberslice';

function Register2(){
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
            // Assuming register service is successful
            // const result = await register(firstName, lastName, email, password);
            // if (result['status'] === 'success') {
            dispatch(increment());
            // toast.success('Successfully registered a new user');
            navigate('/register3');
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
              <label htmlFor=''>Batch</label>
              <input
                onChange={(e) => setBatch(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Example : September2023'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Address</label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter the Full Address'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Course</label>
              <input
                onChange={(e) => setCourse(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Example : PG-DAC, PG-DESD'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Job Role</label>
              <input
                onChange={(e) => setJobRole(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Example : Data-Scientist, Software-Developer'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Date of Birth</label>
              <input
                onChange={(e) => setDob(e.target.value)}
                type='date'
                value={dob}
                // pattern="\d{4}-\d{2}-\d{2}"
                className='form-control'
                placeholder='Example : Choose your DOB'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Experience Level</label>
              <input
                onChange={(e) => setExperienceLevel(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Enter in Years Example: 4, 5'
              />
            </div>
            <div className='mb-3'>
            <label className='form-label'>Gender</label>
            <div className='d-flex'>
                <div className='form-check me-3'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='male'
                    value='Male'
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Male'}
                />
                <label className='form-check-label' htmlFor='male'>
                    Male
                </label>
                </div>
                <div className='form-check me-3'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='female'
                    value='Female'
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Female'}
                />
                <label className='form-check-label' htmlFor='female'>
                    Female
                </label>
                </div>
                <div className='form-check'>
                <input
                    className='form-check-input'
                    type='radio'
                    name='gender'
                    id='other'
                    value='Other'
                    onChange={(e) => setGender(e.target.value)}
                    checked={gender === 'Other'}
                />
                <label className='form-check-label' htmlFor='other'>
                    Other
                </label>
                </div>
            </div>
            </div>

            <div className='mb-3'>
              <label htmlFor=''>Placement Status</label>
              <input
                onChange={(e) => setPlacementStatus(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Example : Placed, Unplaced'
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Company Name</label>
              <input
                onChange={(e) => setCompanyName(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Example : Google, microsoft'
              />
            </div>
            {/* <div className='mb-3'>
              <label htmlFor=''>Role</label>
              <div>
                <select
                  onChange={(e) => setRole(e.target.value)}
                  className='form-control selectpicker dropdown'
                  id='role'
                  value='Alumni' // Set default value to 'Alumni'
                  disabled // Disable the dropdown to prevent user changes
                >
                  <option value='Alumni'>Alumni</option>
                </select>
              </div>
            </div> */}

            <div className='mb-3'>
              <div>
                Already have an account? <Link to='/login'>Login here</Link>
              </div>
              <button onClick={onRegister2} className='btn btn-success mt-2'>
                Next
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div>
    )
} 

export default Register2