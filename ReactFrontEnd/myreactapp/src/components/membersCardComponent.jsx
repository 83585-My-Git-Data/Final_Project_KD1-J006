import { Link } from 'react-router-dom';
import React from 'react';

function MemberCard({ member }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={member.image} className="card-img-top" alt={member.name} />
        <div className="card-body">
          <h5 className="card-title">{member.name}</h5>
          <p className="card-text">{member.degree}</p>
          {member.position && <p className="card-text">{member.position}</p>}
          <button className="btn btn-success">View</button>
          <button className='logout-button btn btn-danger'>
                <Link to='/landingpage' className='nav-link text-white'>Logout</Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;