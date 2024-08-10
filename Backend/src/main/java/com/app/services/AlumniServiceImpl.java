package com.app.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AlumniDao;
import com.app.daos.UserDao;
import com.app.dto.AlumniDTO;
import com.app.entitites.Alumni;
import com.app.entitites.User;


@Service
public class AlumniServiceImpl implements AlumniService {
    
	@Autowired
	private AlumniDao alumniDao;
	
	@Autowired
	private UserDao userDao;
	@Autowired
	private ModelMapper modelmapper;
	
	@Override
	public Alumni registerAlumni(Long userId, AlumniDTO alumniDTO) {
		User user = userDao.findById(userId)
				.orElseThrow(()-> new RuntimeException("User not found"));
		System.out.println("SER "+userId+ " "+alumniDTO );
		Alumni alumni = modelmapper.map(alumniDTO, Alumni.class);
		alumni.setUser(user);
		System.out.println("after"+ alumni);
		
		return alumniDao.save(alumni);
	}
	
	@Override
	public List<AlumniUserDTO> searchByName(String name) {
		 List<AlumniUserDTO> alumniUserList = alumniDao.findAlumniUserByName(name);
	        return alumniUserList;
	}

	@Override
	public List<AlumniUserDTO> searchByCompanyName(String companyName) {
		List<AlumniUserDTO> alumniUserList = alumniDao.findAlumniUserByCompanyName(companyName);
        return alumniUserList;
	}

	@Override
	public List<AlumniUserDTO> searchByJobRole(String jobRole) {
		 List<AlumniUserDTO> alumniUserList = alumniDao.findAlumniUserByJobRole(jobRole);
	        return alumniUserList;
	}

	
	}
    
	
	



