package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AcademicDetailsDTO;
import com.app.dto.AlumniDTO;
import com.app.dto.LoginRequestDTO;
import com.app.dto.UserDTO;
import com.app.entitites.User;
import com.app.services.AlumniService;
import com.app.services.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {

	 @Autowired
	 private UserService userService;
	 
	 @PostMapping("/register")
	  public ResponseEntity<User> registerUser(@RequestBody UserDTO userDTO) {
	  User user = userService.registerUser(userDTO);
	  return ResponseEntity.ok(user);
	   }
	 
	 @PostMapping("/registerAlumni/{userId}")
	    public ResponseEntity<UserDTO> registerAlumni(@PathVariable Long userId, @RequestBody AlumniDTO alumniDTO) {
	        UserDTO userDTO = userService.registerAlumni(userId, alumniDTO);
	        return ResponseEntity.ok(userDTO);
	    }

	    @PostMapping("/addAcademicDetails/{alumniId}")
	    public ResponseEntity<Void> addAcademicDetails(@PathVariable Long alumniId, @RequestBody AcademicDetailsDTO academicDetailsDTO) {
	        userService.addAcademicDetails(alumniId, academicDetailsDTO);
	        return ResponseEntity.ok().build();
	    }
	 @PostMapping("/login")
	    public UserDTO login(@RequestBody LoginRequestDTO loginRequest) {
	        return userService.login(loginRequest);
	    }
<<<<<<< HEAD
=======

		@PutMapping("/{id}")
	    public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
	        return ResponseEntity.ok(userService.updateUser(id, userDTO));
	    }
	    
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
}
