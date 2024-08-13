import { Link } from 'react-router-dom';
import './componentsStyles/NavbarStyles.css';
function AdminNavbar() {
    return (
      <nav className='navbar navbar-expand-lg bg-dark bg-gradient py-3'>
        <div className='container-fluid'>
          {/* Navbar Brand (You can uncomment the brand link if needed) */}
          {/* <Link className='navbar-brand text-white' to='/'>
            MyAlumniPortal
          </Link> */}
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
                <Link to='/manageaboutus' className='nav-link text-white'>Manage About Us</Link>
              </li>
              <li className='nav-item'>
                <Link to='/managemembers' className='nav-link text-white'>Manage Members</Link>
              </li>
              <li className='nav-item'>
                <Link to='/manageevents' className='nav-link text-white'>Manage Events</Link>
              </li>
              <li className='nav-item'>
                <Link to='/managegallery' className='nav-link text-white'>Manage Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link to='/manageengagement' className='nav-link text-white'>Manage Engagement</Link>
              </li>
              <li className='nav-item'>
                <Link to='/managejobsection' className='nav-link text-white'>Manage Job Section</Link>
              </li>
              <li className='nav-item'>
                <Link to='/managenotifications' className='nav-link text-white'>Manage Notifications</Link>
              </li>
              <li className='nav-item'>
                <Link to='/manageprofile' className='nav-link text-white'>Manage Profile</Link>
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
  
  export default AdminNavbar;