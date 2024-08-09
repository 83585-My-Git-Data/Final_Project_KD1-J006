import React from 'react';

function Footer(){
    return(
        <div>
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
    )
} 
export default Footer