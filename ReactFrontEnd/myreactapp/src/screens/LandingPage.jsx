import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Landing.css';
import Footer from '../components/footerComponent';

function LandingPage() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <div className="navbar-brand ms-3">
            <img
              src="./AlumniAssociationBgless.png"
              style={{ width: 60, height: 70 }}
              alt="Logo"
              className="img-fluid"
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <a href="#" className="nav-link text-white mx-3">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white mx-3">
                  Members
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white mx-3">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link text-white mx-3">
                  Gallery
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <button className="btn btn-danger me-2">
                  <Link className="text-white text-decoration-none" to="/login">
                    Login
                  </Link>
                </button>
                <button className="btn btn-warning">
                  <Link className="text-dark text-decoration-none" to="/register">
                    Register
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="container my-4">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./loginCarousel1.jpg"
                className="d-block w-100 img-fluid"
                alt="Slide 1"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./loginCaraousel2.jpg"
                className="d-block w-100 img-fluid"
                alt="Slide 2"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="./logincaraousel3.jpg"
                className="d-block w-100 img-fluid"
                alt="Slide 3"
                style={{ height: '500px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-4">
        <div className="row">
          {/* Newsroom */}
          <div className="col-md-6 mb-4">
            <div className="newsroom bg-light p-4 h-100">
              <h2>NEWSROOM</h2>
              <div className="content-placeholder">CONTENTS</div>
            </div>
          </div>

          {/* Events */}
          <div className="col-md-6 mb-4">
            <div className="events bg-light p-4 h-100">
              <h2>EVENTS</h2>
              <div className="content-placeholder">CONTENTS</div>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="row gallery bg-light p-4">
          <h2 className="col-12">GALLERY</h2>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="content-placeholder">Image 1</div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="content-placeholder">Image 2</div>
          </div>
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="content-placeholder">Image 3</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default LandingPage;
