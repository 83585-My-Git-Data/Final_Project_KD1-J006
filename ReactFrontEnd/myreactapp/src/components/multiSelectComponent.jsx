import React, { useState } from 'react';

function MultiSelectDropdown() {
  const [selectedService, setSelectedService] = useState('');

  const services = [
    { id: 1, label: "Be a Mentor" },
    { id: 2, label: "As a Speaker" },
    { id: 3, label: "Wish to Recruit" }
  ];

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="dropdown d-flex justify-content-center mb-5">
      <button className="btn btn-primary dropdown-toggle w-50" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        {selectedService || "Select Service"}
      </button>
      <ul className="dropdown-menu w-50" aria-labelledby="dropdownMenuButton">
        {services.map((service) => (
          <li key={service.id} onClick={() => handleSelect(service.label)}>
            <div className=''>
            <button className="dropdown-item" type="button">
              {service.label}
            </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MultiSelectDropdown;
