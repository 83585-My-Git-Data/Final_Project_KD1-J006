import { Link } from 'react-router-dom';
import './componentsStyles/NavbarStyles.css';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark bg-gradient py-3' >
      <div className='container-fluid'>
        {/* <Link className='navbar-brand text-white' to='/'>
          MyAlumniPortal
        </Link> */}
        <div className='ms-2'>
        <img src="./AlumniAssociationBgless.png" style={{ width: 60, height: 70}} alt="" />
        </div>
        
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
              <Link to='/jobportal' className='nav-link text-white'>Job Section</Link>
            </li>
            <li className='nav-item'>
              <Link to='/messages' className='nav-link text-white'>Messages</Link>
            </li>
            <li className='nav-item'>
              <Link to='/notifications' className='nav-link text-white'>Notifications</Link>
            </li>
            <li className='nav-item'>
              <Link to='/profile' className='nav-link text-white'>Profile</Link>
            </li>
            <li className='nav-item'>
              <button className='logout-button btn btn-danger'>
                <Link to='/landingpage' className='nav-link text-white'>Logout</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
