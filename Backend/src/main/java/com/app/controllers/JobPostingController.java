package com.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.app.dto.JobPostingDto;
import com.app.entitites.JobRole;
import com.app.entitites.User;
import com.app.services.JobPostingService;
import com.app.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/jobPostings")
public class JobPostingController {
    @Autowired
    private JobPostingService jobPostingService;

    @PostMapping("/postJob")
    public void createJobPosting(@RequestBody JobPostingDto jobPostingDto) {
        jobPostingService.createJobPosting(jobPostingDto);
    }

    @GetMapping("/verified")
    public List<JobPostingDto> getAllVerifiedJobPostings() {
        return jobPostingService.getAllVerifiedJobPostings();
    }

    @GetMapping("/pending")
    public List<JobPostingDto> getAllPendingJobPostings() {
        return jobPostingService.getAllPendingJobPostings();
    }

    @PutMapping("/verify/{id}")
    public void verifyJobPosting(@PathVariable Long id) {
        jobPostingService.verifyJobPosting(id);
    }
    
    @GetMapping("/searchByRole")
    public List<JobPostingDto> getJobPostingsByRole(@RequestParam JobRole jobRole) {
        return jobPostingService.getJobPostingsByRole(jobRole);
    }
    
    
    @GetMapping("/searchByLocation")
    public List<JobPostingDto> getJobPostingsByLocation(@RequestParam String jobLocation) {
        return jobPostingService.getJobPostingsByLocation(jobLocation);
    }
    
    @GetMapping("/searchByDomainTag")
    public List<JobPostingDto> getJobPostingsByDomainTag(@RequestParam String domainTag) {
        return jobPostingService.getJobPostingsByDomainTag(domainTag);
    }
  /*  
    @GetMapping("/searchByUser")
    public List<JobPostingDto> getJobPostingsByUser(@RequestParam Long userId) {
        User user = UserService.getUserById(userId); // Fetch the User entity from userId
        return jobPostingService.getJobPostingsByUser(user);
    }*/
    
}
