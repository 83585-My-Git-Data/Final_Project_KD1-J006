// src/screens/Members.js
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { reset } from '../features/memberslice';
import '../screens/Styles/Members.css';
import Navbar from '../components/navbar';

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
        <div className="mb-4">
          <input type="text" className="form-control" placeholder="Name or Email" />
          <button className="btn btn-primary">Search</button>
        </div>
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
    </div>
  );
}

export default Members;
