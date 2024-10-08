package com.app.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AcademicDetailsDao;
import com.app.daos.AlumniDao;
import com.app.daos.UserDao;
import com.app.dto.AcademicDetailsDTO;
import com.app.dto.AlumniDTO;
import com.app.dto.LoginRequestDTO;
import com.app.dto.RegistrationRequestDTO;
import com.app.dto.UserDTO;
import com.app.entitites.AcademicDetails;
import com.app.entitites.Alumni;
import com.app.entitites.User;
import com.app.entitites.UserRole;

@Service
public class UserServiceImpl implements UserService 

{
    @Autowired
	private UserDao userDao;
    
    @Autowired
    private AcademicDetailsDao academicDetailsDao;
    
    @Autowired
    private AlumniDao alumniDao;
    
    @Autowired
    private ModelMapper modelmapper;
    
	@Override
	public User registerUser(UserDTO userDTO) {
		User user = modelmapper.map(userDTO,User.class);
		//user.setRole(UserRole.valueOf(userDTO.getRole()));
		
		return userDao.save(user);
	}
	

	@Override
	public UserDTO login(LoginRequestDTO loginRequest) {
		User user = userDao.findByEmailAndPassword(loginRequest.getEmail(), loginRequest.getPassword())
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));
		return modelmapper.map(user, UserDTO.class);
	}


	@Override
	public UserDTO registerAlumni(Long userId, AlumniDTO alumniDTO) {
		User user = userDao.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Alumni alumni = modelmapper.map(alumniDTO, Alumni.class);
        alumni.setUser(user);

       Alumni savedAlumni = alumniDao.save(alumni);
      return modelmapper.map(savedAlumni, UserDTO.class);
		
	}


	@Override
	public void addAcademicDetails(Long alumniId, AcademicDetailsDTO academicDetailsDTO) {
		Alumni alumni = alumniDao.findById(alumniId)
                .orElseThrow(() -> new RuntimeException("Alumni not found"));

      AcademicDetails academicDetails = modelmapper.map(academicDetailsDTO, AcademicDetails.class);
      academicDetails.setAlumni(alumni);

      academicDetailsDao.save(academicDetails);
		
	}

<<<<<<< HEAD

=======
	@Override
	public UserDTO updateUser(Long id, UserDTO userDTO) {
		User user = userDao.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        modelmapper.map(userDTO, user);
        // Prevent updating the id and role
        user.setId(id);
        user.setRole(user.getRole());
        userDao.save(user);
        return modelmapper.map(user, UserDTO.class);
	}
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
	
}
