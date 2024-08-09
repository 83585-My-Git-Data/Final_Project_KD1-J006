import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footerComponent';

function Events() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Force re-render of tab content on tab change
    document.getElementById('myTabContent').classList.remove('show');
    setTimeout(() => {
      document.getElementById('myTabContent').classList.add('show');
    }, 0);
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'all':
        return (
          <div className="tab-pane show active" id="all" role="tabpanel" aria-labelledby="all-tab">
            <img src="path_to_image" className="img-fluid mt-4" alt="All" />
            <h3 className="mt-4">Past Events</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Event info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Event info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Event info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Event info</div>
                </div>
              </div>
              {/* Add more cards as needed */}
            </div>
          </div>
        );
      case 'reunions':
        return (
          <div className="tab-pane show active" id="reunions" role="tabpanel" aria-labelledby="reunions-tab">
            <img src="path_to_image" className="img-fluid mt-4" alt="Reunion" />
            <h3 className="mt-4">Past Reunions</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Reunions info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Reunions info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Reunions info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Reunions info</div>
                </div>
              </div>
              {/* Add more cards as needed */}
            </div>
          </div>
        );
      case 'webinars':
        return (
          <div className="tab-pane  active" id="webinars" role="tabpanel" aria-labelledby="webinars-tab">
            <img src="path_to_image" className="img-fluid mt-4" alt="Webinar" />
            <h3 className="mt-4">Past Webinars</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Webinar info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Webinar info</div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">Past Webinar info</div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">Past Webinar info</div>
                </div>
              </div>
              {/* Add more cards as needed */}
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
        <div className="tab-content show" id="myTabContent">
          {renderTabContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Events;
