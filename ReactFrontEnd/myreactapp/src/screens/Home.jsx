import React from 'react';
import Navbar from '../components/navbar';
import './Styles/Home.css';
import Footer from '../components/footerComponent';

function Home() {
  return (
    <div className="home-container" style={{ backgroundImage: 'url(./homeBg.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Navbar />
      
      {/* Main Content Container */}
      <div className="container d-flex align-items-center vh-100">
        <div className="row w-100">
          {/* Left Side - Text Section */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="text-content">
              <h1 className="display-4 text-black">Welcome to the Alumni Association Portal.</h1>
              <p className="lead text-black">Keeping Everyone As ONE, our powerful platform helps our Connection grow.</p>
            </div>
          </div>
          
          {/* Right Side - Carousel Section */}
          <div className="col-md-6">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ width: '700px' }}>
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./loginCarousel1.jpg" className="img-fluid d-block w-100" alt="Slide 1" style={{ height: '500px', objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <img src="./loginCaraousel2.jpg" className="img-fluid d-block w-100" alt="Slide 2" style={{ height: '500px', objectFit: 'cover' }} />
                </div>
                <div className="carousel-item">
                  <img src="./logincaraousel3.jpg" className="img-fluid d-block w-100" alt="Slide 3" style={{ height: '500px', objectFit: 'cover' }} />
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
      </div>

      {/* Events and Gallery Section */}
      <div className="container mt-5">
        <h2 className="text-center display-4" >Events and Gallery</h2>
        <div className="row mt-4 event-image-container">
          <div className="bg-image col-12 col-md-6" style={{ height: '400px' }}>
            <div className="text-center event-text-container">
              <h1 className="event-text">Events</h1>
            </div>
          </div>
          <div className="bg-image2 col-12 col-md-6" style={{ height: '400px' }}>
            <div className="text-center event-text-container">
              <h1 className="event-text">Gallery</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="section-3">
        <div className="members-container p-4">
          {/* <h2 className="pb-4 text-center" style={{  fontSize: '3rem' }}>Members</h2> */}
          <h2 className="text-center display-4 mb-5" >Members</h2>
          <div className="row d-flex justify-content-center">
            {/* Repeat this block for each member */}
            <div className="col-6 col-sm-4 col-md-2 mem-images m-2">
              {/* Member Image */}
            </div>
            <div className="col-6 col-sm-4 col-md-2 mem-images m-2">
              {/* Member Image */}
            </div>
            <div className="col-6 col-sm-4 col-md-2 mem-images m-2">
              {/* Member Image */}
            </div>
            <div className="col-6 col-sm-4 col-md-2 mem-images m-2">
              {/* Member Image */}
            </div>
            <div className="col-6 col-sm-4 col-md-2 mem-images m-2">
              {/* Member Image */}
            </div>
            {/* Add more member blocks as needed */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
