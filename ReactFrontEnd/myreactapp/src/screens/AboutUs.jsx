import Navbar from '../components/navbar'
import './Styles/Aboutus.css';

function AboutUs(){
    return (

        <div >
            <Navbar /> 

            <div className=' row upper-section'>
                <div className='about-image text-white col d-flex align-items-center justify-content-center'>
                    <h1 className='aboutus-text'>About Us</h1>
                </div>

                <div className='about-tbg text-white col p-5'>
                    <h4 className='about-para'>SUNBEAM INSTITUTE OF INFORMATION TECHNOLOGY, PUNE - HINJAWADI AND KARAD</h4>
                    <br/>
                    <h5 className='about-paragraph'>
                    The Sunbeam campus at Rajiv Gandhi Infotech Park, Hinjawadi is 
                    spread over an area of 1 Acre which includes 70,000 sq feet of 
                    built-up area and 5-floor building for C-DAC courses.
                    The teaching-learning process is facilitated in 3 lecture halls, 
                    5 computer labs with high-speed Internet connectivity, a seminar room, 
                    conference room, library. The entire sunbeam campus is Wi-Fi enabled. 
                    Sunbeam also provides hostel facility to girls. Similarly the branch at Karad also 
                    offers the same facilities as the Hinjawadi.
                    </h5>
                </div>

            </div>
            <div className='backgroundcolor '>
            <div className='container fontfam pt-5'>
                <div className='row'>
                    <div className='col'>
                    <div>
                    <div className="container my-5">
                        <div className="card">
                            <div className="card-header text-white">
                            <h2 className="text-center mb-0">PG DIPLOMA PROGRAMMES AT SUNBEAM</h2>
                            </div>
                            <div className="card-body p-0">
                            <table className="table table-bordered mb-0">
                                <tbody>
                                <tr>
                                    <td>PG Diploma In Advanced Computing (PG-DAC)</td>
                                </tr>
                                <tr>
                                    <td>PG Diploma in Mobile Computing (PG-DMC)</td>
                                </tr>
                                <tr>
                                    <td>PG Diploma In Embedded Systems and Design (PG-DESD)</td>
                                </tr>
                                <tr>
                                    <td>PG Diploma in Big Data Analytics (PG-DBDA)</td>
                                </tr>
                                <tr>
                                    <td>PG Diploma in IT Infrastructure, Systems & Security (PG-DITISS)</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                    </div>

                    <div className='col'>
                    <div>
                    <div className="container my-5">
                        <div className="card">
                            <div className="card-header text-white">
                            <h2 className="text-center mb-0">Our Branches</h2>
                            </div>
                            <div className="card-body p-0">
                            <table className="table table-bordered mb-0">
                                <tbody>
                                <tr>
                                    <td>Karad</td>
                                </tr>
                                <tr>
                                    <td>Hinjewadi-Pune</td>
                                </tr>
                                
                                </tbody>
                            </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>

            <div className='footer-section'>
      <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-4">
            <h2 className="footer-logo mb-3">SUNBEAM</h2>
            <div className="social-icons">
            <a href="https://twitter.com/Utkarsh_utkarsh" target="_blank"><i className="fa-brands fa-twitter icon mx-2"></i></a>
            <a href="https://www.instagram.com/dazzlingutkarsh/?hl=en" target="_blank"><i className="fa-brands fa-instagram icon mx-2"></i></a>
            <a href="https://www.facebook.com/utkarshsings" target="_blank"><i class="fa-brands fa-facebook icon mx-2"></i></a>
            <a href="https://www.facebook.com/utkarshsings" target="_blank"><i class="fa-brands fa-youtube icon mx-2"></i></a>
            
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
              
              <li> Access</li>
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

export default AboutUs