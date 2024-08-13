package com.app.services;

import org.springframework.stereotype.Service;

import com.app.dto.AcademicDetailsDTO;

@Service
public interface AcademicDetailsService
{
	 AcademicDetailsDTO updateAcademicDetails(Long id, AcademicDetailsDTO academicDetailsDTO);
}
