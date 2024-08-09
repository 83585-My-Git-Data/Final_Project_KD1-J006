package com.app.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AcademicDetailsDao;
import com.app.dto.AcademicDetailsDTO;
import com.app.entitites.AcademicDetails;

@Service
public class AcademicDetailsServiceImpl implements AcademicDetailsService {

	
	    @Autowired
	    private AcademicDetailsDao academicDetailsDao;

	  @Autowired
	   private ModelMapper modelMapper;

	@Override
	public AcademicDetailsDTO updateAcademicDetails(Long id, AcademicDetailsDTO academicDetailsDTO) {
		
		 AcademicDetails academicDetails = academicDetailsDao.findById(id)
	                .orElseThrow(() -> new RuntimeException("Academic Details not found"));
	        modelMapper.map(academicDetailsDTO, academicDetails);
	        // Prevent updating the id and alumni
	        academicDetails.setId(id);
	        academicDetails.setAlumni(academicDetails.getAlumni());
	        academicDetailsDao.save(academicDetails);
	        return modelMapper.map(academicDetails, AcademicDetailsDTO.class);
	}
	 
	  

}
