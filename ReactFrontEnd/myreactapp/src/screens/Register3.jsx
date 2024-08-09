import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { increment } from '../features/memberslice';

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
            dispatch(increment());
            toast.success('Successfully registered a new user');
            navigate('/login');
        }
    };

    return (
        <div>
    <h2 className='page-header'>Register</h2>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='mb-3'>
                    <label htmlFor='secondaryEducationCollege'>Secondary Education College</label>
                    <input
                        onChange={(e) => setSecondaryEducationCollege(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Example: MHJCOS'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='secondaryEducationPercentage'>Secondary Education Percentage</label>
                    <input
                        onChange={(e) => setSecondaryEducationPercentage(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 80'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='secondaryEducationPassoutYear'>Secondary Education Passout Year</label>
                    <input
                        onChange={(e) => setSecondaryEducationPassoutYear(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 2016'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='higherSecondaryEducationCollege'>Higher Secondary Education College</label>
                    <input
                        onChange={(e) => setHigherSecondaryEducationCollege(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Example: PBCOE'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='higherSecondaryEducationPercentage'>Higher Secondary Education Percentage</label>
                    <input
                        onChange={(e) => setHigherSecondaryEducationPercentage(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 84'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='higherSecondaryEducationPassoutYear'>Higher Secondary Education Passout Year</label>
                    <input
                        onChange={(e) => setHigherSecondaryEducationPassoutYear(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 2018'
                    />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='mb-3'>
                    <label htmlFor='graduationCourse'>Graduation Course</label>
                    <input
                        onChange={(e) => setGraduationCourse(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Example: EC'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='graduationPercentage'>Graduation Percentage</label>
                    <input
                        onChange={(e) => setGraduationPercentage(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 90'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='graduationPassoutYear'>Graduation Passout Year</label>
                    <input
                        onChange={(e) => setGraduationPassoutYear(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 2022'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='postgraduationCourse'>Postgraduation Course</label>
                    <input
                        onChange={(e) => setPostgraduationCourse(e.target.value)}
                        type='text'
                        className='form-control'
                        placeholder='Example: ME'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='postgraduationPercentage'>Postgraduation Percentage</label>
                    <input
                        onChange={(e) => setPostgraduationPercentage(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 80'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='postgraduationPassoutYear'>Postgraduation Passout Year</label>
                    <input
                        onChange={(e) => setPostgraduationPassoutYear(e.target.value)}
                        type='number'
                        className='form-control'
                        placeholder='Example: 2024'
                    />
                </div>
                <div className='mb-3'>
                    <div>
                        Already have an account? <Link to='/login'>Login here</Link>
                    </div>
                    <button onClick={onRegister3} className='btn btn-success mt-2'>
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}

export default Register3;
