package com.app.services;

import com.app.dto.AlumniDTO;
import com.app.entitites.Alumni;

public interface AlumniService
{
	Alumni registerAlumni(Long userId, AlumniDTO alumniDTO);
	List<AlumniUserDTO> searchByName(String name);
	List<AlumniUserDTO> searchByCompanyName(String companyName);
	List<AlumniUserDTO> searchByJobRole(String jobRole);
	AlumniDTO updateAlumni(Long id, AlumniDTO alumniDTO);
}
