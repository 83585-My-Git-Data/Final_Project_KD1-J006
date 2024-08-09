package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

import com.app.entitites.JobRole;
import com.app.entitites.WorkMode;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobPostingDto {
    private Long id;
    private String companyName;
    private String jobPostingDate;
    private String jobApplicationEndDate;
    private JobRole jobRole;
    private String experienceLevel;
    private String jobDescription;
    private String domainTag;
    private String jobLocation;
    private boolean isVerified;
    private double salaryPackage;
    private WorkMode workMode;
    private Long postedByUserId;
}
