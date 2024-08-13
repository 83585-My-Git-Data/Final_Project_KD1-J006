package com.app.services;


import java.util.List;

import com.app.dto.JobPostingDto;
import com.app.entitites.JobRole;
import com.app.entitites.User;

public interface JobPostingService {
	    void createJobPosting(JobPostingDto jobPostingDto);
	    List<JobPostingDto> getAllVerifiedJobPostings();
	    List<JobPostingDto> getAllPendingJobPostings();
	    void verifyJobPosting(Long jobPostingId);
	    List<JobPostingDto> getJobPostingsByRole(JobRole jobRole);
	    List<JobPostingDto> getJobPostingsByLocation(String jobLocation);
	    List<JobPostingDto> getJobPostingsByDomainTag(String domainTag);
	    List<JobPostingDto> getJobPostingsByUser(User user);
<<<<<<< HEAD
=======
	    JobPostingDto updateJobPostingById(Long jobPostingId, JobPostingDto jobPostingDto);
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
	    
}



