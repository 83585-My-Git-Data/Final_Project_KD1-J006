package com.app.entitites;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "job_postings")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPosting extends BaseEntity 
{

	@ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "company_name", nullable = false)
    private String companyName;

    @Column(name = "job_posting_date", nullable = false)
    private LocalDate jobPostingDate;

    @Column(name = "job_application_end_date", nullable = false)
    private LocalDate jobApplicationEndDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "job_role", nullable = false)
    private JobRole jobRole;

    @Column(name = "experience_level", nullable = false)
    private String experienceLevel;

    @Column(name = "job_description", nullable = false)
    private String jobDescription;

    @Column(name = "domain_tag", nullable = false)
    private String domainTag;

    @Column(name = "job_location", nullable = false)
    private String jobLocation;

    @Column(name = "is_verified", nullable = false)
    private Boolean isVerified;

    @Column(name = "salary_package", nullable = false)
    private String salaryPackage;

    @Enumerated(EnumType.STRING)
    @Column(name = "work_mode", nullable = false)
    private WorkMode workMode;
	
}
