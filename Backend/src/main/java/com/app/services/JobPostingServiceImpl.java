package com.app.services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.JobPostingDao;
import com.app.daos.UserDao;
import com.app.dto.JobPostingDto;
import com.app.entitites.JobPosting;
import com.app.entitites.JobRole;
import com.app.entitites.User;
import com.app.entitites.UserRole;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class JobPostingServiceImpl implements JobPostingService {
    @Autowired
    private JobPostingDao jobPostingDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void createJobPosting(JobPostingDto jobPostingDto) {
        User user = userDao.findById(jobPostingDto.getPostedByUserId())
                                  .orElseThrow(() -> new IllegalArgumentException("User not found"));

        boolean isVerified = user.getRole() == UserRole.ADMIN;

        JobPosting jobPosting = modelMapper.map(jobPostingDto, JobPosting.class);
        jobPosting.setIsVerified(isVerified);
        jobPosting.setUser(user);

        jobPostingDao.save(jobPosting);
    }

    @Override
    public List<JobPostingDto> getAllVerifiedJobPostings() {
        return jobPostingDao.findAllByIsVerifiedTrue().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<JobPostingDto> getAllPendingJobPostings() {
        return jobPostingDao.findAllByIsVerifiedFalse().stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void verifyJobPosting(Long jobPostingId) {
        JobPosting jobPosting = jobPostingDao.findById(jobPostingId)
                .orElseThrow(() -> new IllegalArgumentException("Job posting not found"));
        jobPosting.setIsVerified(true);
        jobPostingDao.save(jobPosting);
    }
    
    
    
    @Override
    public List<JobPostingDto> getJobPostingsByRole(JobRole jobRole) {
        return jobPostingDao.findByJobRole(jobRole).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
   
    
    
    @Override
    public List<JobPostingDto> getJobPostingsByLocation(String jobLocation) {
        return jobPostingDao.findByJobLocation(jobLocation).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    
    @Override
    public List<JobPostingDto> getJobPostingsByDomainTag(String domainTag) {
        return jobPostingDao.findByDomainTag(domainTag).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
    
    
    @Override
    public List<JobPostingDto> getJobPostingsByUser(User user) {
        return jobPostingDao.findByUser(user).stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
    
    private JobPostingDto toDto(JobPosting jobPosting) {
        return modelMapper.map(jobPosting, JobPostingDto.class);
    }
    
    
    
}
