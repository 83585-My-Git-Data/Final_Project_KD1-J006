import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/Landing.css';

function LandingPage() {
  return (
    <div>
    <div nav-container>
      <div className="container-fluid w-screen d-flex justify-content-between bg-primary text-white py-3 ">
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="logo">
            <img src="logo-url-here" alt="Logo" className="img-fluid" />
          </div>
          <div className='navItems-container'>
            <div className='me-3'>
          <nav className="App-nav">
            <a href="#" className="text-white mx-2">About Us</a>
            <a href="#" className="text-white mx-2">Members</a>
            <a href="#" className="text-white mx-2">Events</a>
            <a href="#" className="text-white mx-2">Gallery</a>
          </nav>
          </div>
          <div className="App-login">
            <button className='logbut btn btn-danger'>
              <Link className='loginButton' to='/login'>Login</Link>
            </button>
            <button className='btn btn-warning'>
              <Link className='registerButton' to='/register'>Register</Link>
            </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="App">
        <main className="App-main">
          <div className="row mb-4">
            <div className="main-content bg-light p-4">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src='./Caraousel1.jpg' className="c-image d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 newsroom bg-light p-4 mb-4">
              <h2>NEWSROOM</h2>
              <div className="content-placeholder">CONTENTS</div>
            </div>
            <div className="col-md-4 events bg-light p-4 mb-4">
              <h2>EVENTS</h2>
              <div className="content-placeholder">CONTENTS</div>
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
        <footer className="App-footer bg-primary text-white py-3">
          <div className="container d-flex justify-content-center">
            <a href="#" className="text-white mx-2">Facebook</a>
            <a href="#" className="text-white mx-2">Twitter</a>
            <a href="#" className="text-white mx-2">LinkedIn</a>
            <a href="#" className="text-white mx-2">Facebook Group</a>
            <a href="#" className="text-white mx-2">YouTube</a>
            <a href="#" className="text-white mx-2">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
