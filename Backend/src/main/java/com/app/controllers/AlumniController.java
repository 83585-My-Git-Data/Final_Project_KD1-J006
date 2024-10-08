package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AlumniDTO;
import com.app.entitites.Alumni;
import com.app.services.AlumniService;

@RestController
@RequestMapping("api/alumni")
//@CrossOrigin("http://localhost:3000/")
public class AlumniController {
	
	@Autowired
	private AlumniService alumniService;
	
	@PostMapping("/register/{userId}")
    public ResponseEntity<Alumni> registerAlumni(@PathVariable Long userId, @RequestBody AlumniDTO alumniDTO) {
    System.out.println("COn "+ alumniDTO +" "+userId);
		Alumni alumni = alumniService.registerAlumni(userId, alumniDTO);
    return ResponseEntity.ok(alumni);
    }
	
     @GetMapping("/search/name")
	  public List<AlumniUserDTO> searchByName(@RequestParam(value = "name") String name) {
	        return alumniService.searchByName(name);
	    }

	 @GetMapping("/search/company")
	  public List<AlumniUserDTO> searchByCompanyName(@RequestParam(value = "companyName") String companyName) {
	        return alumniService.searchByCompanyName(companyName);
	    }

	 @GetMapping("/search/jobRole")
	  public List<AlumniUserDTO> searchByJobRole(@RequestParam(value = "jobRole") String jobRole) {
	        return alumniService.searchByJobRole(jobRole);
	    }
	
<<<<<<< HEAD

=======
		@PutMapping("/{id}")
	    public ResponseEntity<AlumniDTO> updateAlumni(@PathVariable Long id, @RequestBody AlumniDTO alumniDTO) {
	        return ResponseEntity.ok(alumniService.updateAlumni(id, alumniDTO));
	    }
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
	
   
}
