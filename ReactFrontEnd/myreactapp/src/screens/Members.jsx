// src/screens/Members.js
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { reset } from '../features/memberslice';
import '../screens/Styles/Members.css';
import Navbar from '../components/navbar';
// import MemberCard from '../components/membersCardComponent';

const members = [
  {
    name: 'Debashree Mullick',
    degree: 'B.Tech. 2005, ECE',
    position: 'Sr. Project Engineer at Reliance Industries Limited',
    image: 'path_to_image', // Add the path to the image
  },
  {
    name: 'Mohd Tariz',
    degree: 'B.Tech. 2028, CSE',
    image: 'path_to_image',
  },
  {
    name: 'Surya Maurya',
    degree: 'B.Tech. 2022, CSE',
    image: 'path_to_image',
  },
  {
    name: 'Shivani Jaiswal',
    degree: 'MBA 2024, HR',
    position: 'International academic counselor at global arcus',
    image: 'path_to_image',
  },
  {
    name: 'Aditi Dixit',
    degree: 'MCA 2024',
    image: 'path_to_image',
  },
  {
    name: 'Khushi Srivastava',
    degree: 'B.Tech. 2024, CSE',
    image: 'path_to_image',
  },
  {
    name: 'Ali Umais',
    degree: 'B.Tech. 2020, IT',
    image: 'path_to_image',
  },
  {
    name: 'Harsh Vardhan Pathak',
    degree: 'B.Tech. 2023, EE',
    image: 'path_to_image',
  },
  {
    name: 'Zafar Rizvi',
    degree: 'MBA 2007, MKT',
    position: 'Section Officer at Allahabad High Court',
    image: 'path_to_image',
  },
];

function Members() {
    const dispatch = useDispatch();
  const memberCount = useSelector((state) => state.members.count);

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      
      <div className="container my-4">
        <h1 className="mb-4">
          Members<span className="fs-2 text-dark">({memberCount})</span>
        </h1>

        <div className="input-group col-xs-4 mb-3">
          <input type="text" class="form-control" placeholder="Search Members by Company, Name, Role"/>
          <div className="input-group-append">
            <button className="btn btn-success ms-3" type="submit">Search</button>
          </div>
        </div>
        <br/>
        <hr/>
        <br/>

        {/* <div className="mb-4">
          <input type="text" className="form-control" placeholder="Name or Email" />
          <button className="btn btn-primary">Search</button>
        </div> */}
        <div className="row">
          {members.map((member, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={member.image} className="card-img-top" alt={member.name} />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.degree}</p>
                  {member.position && <p className="card-text">{member.position}</p>}
                </div>
              </div>
            </div>
          ))}
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
  );
}

export default Members;
