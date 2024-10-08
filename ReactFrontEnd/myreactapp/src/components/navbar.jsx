import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './componentsStyles/NavbarStyles.css';

function Navbar() {
  // State to hold the Alumni's name (assuming it's stored in localStorage or passed from a context/state management solution)
  const [alumniName, setAlumniName] = useState('');

  // Retrieve the Alumni's name from localStorage when the component mounts
  useEffect(() => {
    const storedName = localStorage.getItem('alumniName');
    if (storedName) {
      setAlumniName(storedName);
    }
  }, []);

  return (
    <nav className='navbar navbar-expand-lg bg-dark bg-gradient py-3'>
      <div className='container-fluid'>
<<<<<<< HEAD
=======
        {/* Navbar Brand (You can uncomment the brand link if needed) */}
        {/* <Link className='navbar-brand text-white' to='/'>
          MyAlumniPortal
        </Link> */}
>>>>>>> main
        <div className='ms-2'>
          <img src="./AlumniAssociationBgless.png" style={{ width: 60, height: 70 }} alt="Alumni Logo" />
        </div>
        
        {/* Hamburger Button for Mobile View */}
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link text-white'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className='nav-link text-white'>About Us</Link>
            </li>
            <li className='nav-item'>
              <Link to='/members' className='nav-link text-white'>Members</Link>
            </li>
            <li className='nav-item'>
              <Link to='/events' className='nav-link text-white'>Events</Link>
            </li>
            <li className='nav-item'>
              <Link to='/gallery' className='nav-link text-white'>Gallery</Link>
            </li>
            <li className='nav-item'>
              <Link to='/engage' className='nav-link text-white'>Engage</Link>
            </li>
            <li className='nav-item'>
              <Link to='/jobsection' className='nav-link text-white'>Job Section</Link>
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              <Link to='/jobsection' className='nav-link text-white'>Job Section</Link>
=======
              <Link to='/jobportal' className='nav-link text-white'>Job Section</Link>
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main
            </li>
            <li className='nav-item'>
              <Link to='/messages' className='nav-link text-white'>Messages</Link>
>>>>>>> main
            </li>
            <li className='nav-item'>
              <Link to='/notifications' className='nav-link text-white'>Notifications</Link>
            </li>
            <li className='nav-item'>
              {alumniName ? (
                <Link to='/alumniprofile' className='nav-link text-white'>{alumniName}</Link>
              ) : (
                <Link to='/alumniprofile' className='nav-link text-white'>Profile</Link>
              )}
            </li>
            <li className='nav-item'>
              <Link to='/landingpage' className='btn btn-danger text-white'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
