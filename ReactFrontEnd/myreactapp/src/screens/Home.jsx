
import Navbar from '../components/navbar'
import './Styles/Home.css';
import Footer from '../components/footerComponent';

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
      <Footer/>
    </div>
  )
}

export default Home 

