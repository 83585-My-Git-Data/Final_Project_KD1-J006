package com.app.dto;

import java.time.LocalDate;

import com.app.entitites.JobRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class AlumniDTO
{
	    private String batch;
	    private String address;
	    private String course;
	    private JobRole jobRole;
	    private LocalDate dob;
	    private String experienceLevel;
	    private String gender;
	    private String placementStatus;
	    private String companyName;
}
