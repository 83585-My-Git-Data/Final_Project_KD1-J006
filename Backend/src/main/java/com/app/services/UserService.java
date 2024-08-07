package com.app.services;

import com.app.dto.AcademicDetailsDTO;
import com.app.dto.AlumniDTO;
import com.app.dto.LoginRequestDTO;
import com.app.dto.RegistrationRequestDTO;
import com.app.dto.UserDTO;
import com.app.entitites.User;

public interface UserService {
	 User registerUser(UserDTO userDTO);
	 UserDTO registerAlumni(Long userId, AlumniDTO alumniDTO);
	 void addAcademicDetails(Long alumniId, AcademicDetailsDTO academicDetailsDTO);
	 UserDTO login(LoginRequestDTO loginRequest);
	

}
