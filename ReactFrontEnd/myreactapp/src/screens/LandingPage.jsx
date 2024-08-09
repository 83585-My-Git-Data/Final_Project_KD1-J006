import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Landing.css';
import Footer from '../components/footerComponent';

function LandingPage() {
  return (
    <div>
      <div className="nav-container">
        <div className="container-fluid w-screen d-flex justify-content-between bg-primary text-white py-3">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="logo ms-2">
              <img
                src="./AlumniAssociationBgless.png"
                style={{ width: 60, height: 70 }}
                alt="Logo"
                className="img-fluid"
              />
            </div>
            <div className="navItems-container d-flex">
              <nav className="App-nav me-3">
                <a href="#" className="text-white mx-2">
                  About Us
                </a>
                <a href="#" className="text-white mx-2">
                  Members
                </a>
                <a href="#" className="text-white mx-2">
                  Events
                </a>
                <a href="#" className="text-white mx-2">
                  Gallery
                </a>
              </nav>
              <div className="App-login d-flex">
                <button className="logbut btn btn-danger me-2">
                  <Link className="loginButton text-white" to="/login">
                    Login
                  </Link>
                </button>
                <button className="btn btn-warning">
                  <Link className="registerButton text-dark" to="/register">
                    Register
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <main className="App-main">
          <div className="row mb-4">
            <div className="col-12">
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
                      className="car-image img-fluid d-block w-100"
                      alt="hello"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./loginCaraousel2.jpg"
                      className="car-image img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./logincaraousel3.jpg"
                      className="car-image img-fluid d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            
            <div className="col-6 mb-4">
              <div className="newsroom w-100  bg-light p-4">
                <h2>NEWSROOM</h2>
                <div className="content-placeholder">CONTENTS</div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="events w-100 bg-light p-4">
                <h2>EVENTS</h2>
                <div className="content-placeholder">CONTENTS</div>
              </div>
            </div>
            
          </div>

          <div className="row gallery bg-light p-4">
            <h2 className="col-12">GALLERY</h2>
            <div className="col-4">
              <div className="content-placeholder">Image 1</div>
            </div>
            <div className="col-4">
              <div className="content-placeholder">Image 2</div>
            </div>
            <div className="col-4">
              <div className="content-placeholder">Image 3</div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default LandingPage;
