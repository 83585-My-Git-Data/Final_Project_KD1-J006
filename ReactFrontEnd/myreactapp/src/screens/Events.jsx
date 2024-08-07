import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';

function Events() {
  const [activeTab, setActiveTab] = useState('all');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <div className="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <div className="banner-carousel">Banner - carousel</div>
            <h3 className="mt-4">Past Events</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reunions':
        return (
          <div className="tab-pane fade show active" id="reunions" role="tabpanel" aria-labelledby="reunions-tab">
            <img src="path_to_image" className="img-fluid mt-4" alt="Reunion" />
            <h3 className="mt-4">Past Reunions</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Event info</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'webinars':
        return (
          <div className="tab-pane fade show active" id="webinars" role="tabpanel" aria-labelledby="webinars-tab">
            <img src="path_to_image" className="img-fluid mt-4" alt="Webinar" />
            <h3 className="mt-4">Past Webinars</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Webinar info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Webinar info</div>
                </div>
              </div>
            
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Webinar info</div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Webinar info</div>
                </div>
              </div> 

              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Webinar info</div>
                </div>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container my-4">
        <h1 className="mb-4">Events</h1>
        <p>View upcoming and previous alumni events & conferences from Sunbeam</p>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'all' ? 'active' : ''}`}
              id="all-tab"
              href="#all"
              role="tab"
              onClick={() => setActiveTab('all')}
            >
              ALL
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'reunions' ? 'active' : ''}`}
              id="reunions-tab"
              href="#reunions"
              role="tab"
              onClick={() => setActiveTab('reunions')}
            >
              REUNIONS
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${activeTab === 'webinars' ? 'active' : ''}`}
              id="webinars-tab"
              href="#webinars"
              role="tab"
              onClick={() => setActiveTab('webinars')}
            >
              WEBINARS
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {renderTabContent()}
        </div>
      </div>

      <div className="footer-section">
        <footer className="footer bg-dark text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center mb-4">
                <h2 className="footer-logo mb-3">SUNBEAM</h2>
                <div className="social-icons">
                  <a href="https://twitter.com/Utkarsh_utkarsh" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter icon mx-2"></i></a>
                  <a href="https://www.instagram.com/dazzlingutkarsh/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram icon mx-2"></i></a>
                  <a href="https://www.facebook.com/utkarshsings" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook icon mx-2"></i></a>
                  <a href="https://www.facebook.com/utkarshsings" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube icon mx-2"></i></a>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="mb-3">Support</h3>
                <ul className="list-unstyled">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Courses We Offer</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="mb-3">Sunbeam</h3>
                <ul className="list-unstyled">
                  <li>About Sunbeam</li>
                  <li>Brochure</li>
                  <li>Access</li>
                </ul>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-8 offset-md-2 text-center">
                <h3 className="mb-3">Stay up to date on the latest from Sunbeam</h3>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Enter your e-mail address" />
                  <div className="input-group-append">
                    <button className="btn btn-danger" type="button">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Events;
