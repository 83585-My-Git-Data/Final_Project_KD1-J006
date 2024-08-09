package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AcademicDetailsDTO;
import com.app.services.AcademicDetailsService;

@RestController
@RequestMapping("/api/academicdetails")
public class AcademicDetailsController {

	@Autowired
    private AcademicDetailsService academicDetailsService;
	
	@PutMapping("/{id}")
    public ResponseEntity<AcademicDetailsDTO> updateAcademicDetails(@PathVariable Long id, @RequestBody AcademicDetailsDTO academicDetailsDTO) {
        return ResponseEntity.ok(academicDetailsService.updateAcademicDetails(id, academicDetailsDTO));
    }
	
}
