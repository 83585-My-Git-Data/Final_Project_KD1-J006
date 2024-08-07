import { Link } from 'react-router-dom'
import './componentsStyles/NavbarStyles.css';

function Navbar() {
  return (
    <nav style={{width:'100'}}
      className='navbar  navbar-expand-lg bg-body-tertiary bg-primary container-fluid  py-3'>
      <div className=' My-Navbar text-white container-fluid bg-primary py-2'>
        <a className='navbar-brand ' href='#'>
          MyAlumniPortal
        </a>

        <div className='collapse navbar-collapse ' id='navbarSupportedContent'>
          <div className='navbar-nav me-auto mb-2 mb-lg-0 '>
            <div className='NavBar-items d-flex  justify-content-evenly'>
              <div className='d-flex '>
            <span className='nav-item'>
              <Link
                to='/home'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Home
              </Link>
            </span>
            <span className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                About Us
              </Link>
            </span>
            <span className='nav-item'>
              <Link
                to='/members'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Members
              </Link>
            </span>
            <li className='nav-item'>
              <Link
                to='/events'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Events
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Gallery
              </Link>
            </li> 

            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Engage
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Job Portal
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Messages
              </Link>
            </li> 

            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Notifications
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/bookings'
                className='nav-link text-white'
                aria-current='page'
                href='#'
              >
                Profile
              </Link>
            </li>

            </div>

            <div className='nav-item button-container'>
              <button className='logout-button  btn btn-danger'>
              <Link
                to='/landingpage'
                className='nav-link logOutText text-white'
                aria-current='page'
                href='#'
              >
                Logout
              </Link>
              </button>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
