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
<<<<<<< HEAD
	
=======
	 UserDTO updateUser(Long id, UserDTO userDTO);
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990

}
