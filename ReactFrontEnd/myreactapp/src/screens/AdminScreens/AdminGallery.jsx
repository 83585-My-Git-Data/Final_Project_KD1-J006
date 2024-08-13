import AdminNavbar from "../../components/adminnavbar";
import Footer from "../../components/footerComponent";

function AdminGallery(){
    const images = [
        'path/to/image1.jpg',
        'path/to/image2.jpg',
        'path/to/image3.jpg',
        'path/to/image4.jpg',
        'path/to/image5.jpg',
        'path/to/image6.jpg',
        'path/to/image7.jpg',
        'path/to/image8.jpg',
      ];
    
      return (
        <div>
            <AdminNavbar/>
        <div className="container mt-4">
          <h2 className="mb-3">AdminGallery</h2>
          <ul className="nav nav-tabs mb-3">
          <li className="nav-item">
              <a className="nav-link active" href="#">Album</a>
            </li>
          </ul> 
          
         
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className="col-md-3 mb-4">
                <img src={image} className="img-fluid" alt={`AdminGallery item ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <Footer/>
        </div>
      );
} 

export default AdminGallery