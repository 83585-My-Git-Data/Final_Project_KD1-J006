package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entitites.JobPosting;
import com.app.entitites.JobRole;
import com.app.entitites.User;

import java.util.List;

public interface JobPostingDao extends JpaRepository<JobPosting, Long> {
    List<JobPosting> findAllByIsVerifiedTrue();
    List<JobPosting> findAllByIsVerifiedFalse();
    List<JobPosting> findByJobRole(JobRole jobRole);
    List<JobPosting> findByJobLocation(String jobLocation);
    List<JobPosting> findByDomainTag(String domainTag);
    List<JobPosting> findByUser(User user);

}
