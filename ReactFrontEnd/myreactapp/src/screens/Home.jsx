
import Navbar from '../components/navbar'
import './Styles/Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='container'>
      <h2 className='page-header home-text'>Home</h2>
      <div className='car-event-container container p-3'>
    <div className='car-main-container'>
      <div id="carouselExampleIndicators" className=" car-container carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div className="carousel-item active">
            <img src="./loginCarousel1.jpg" className="car-image img-fluid d-block w-100" alt="hello" />
            </div>
            <div className="carousel-item">
            <img src="./loginCaraousel2.jpg" className="car-image img-fluid d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="./logincaraousel3.jpg" className="car-image img-fluid d-block w-100" alt="..."/>
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

      <div className='event-image-container mt-5'>
        <div className='bg-image col'>
          <div className='text-center event-text-container'>
            <h1 className='event-text'>Events</h1>
          </div>
        </div>
        <div className='bg-image2 col'>
        <div className='text-center event-text-container'>
            <h1 className='event-text'>Gallery</h1>
          </div>
        </div>
        
      </div>
      </div>

      <div className='section-3'>
        
        <div className='members-container p-4 '>
        <h3 className='pb-4'>Members</h3>
        <div className='row '>
        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        </div>

        <div className='row pb-5'>
        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

        </div>

        <div className='col mem-images m-2'>

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
            <h3 className="mb-3">Furrion</h3>
            <ul className="list-unstyled">
              <li>About Sunbeam</li>
              
              <li>Brochure</li>
              
              <li>Furrion Access</li>
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

export default Home