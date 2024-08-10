package com.app.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AcademicDetailsDTO 
{
	
	    private Long id;
	    private Long alumniId;
	    private String secondaryEducationCollege;
	    private Double secondaryEducationPercentage;
	    private Integer secondaryEducationPassoutYear;
	    private String higherSecondaryEducationCollege;
	    private Double higherSecondaryEducationPercentage;
	    private Integer higherSecondaryEducationPassoutYear;
	    private String graduationCourse;
	    private Double graduationPercentage;
	    private Integer graduationPassoutYear;
	    private String postgraduationCourse;
	    private Double postgraduationPercentage;
	    private Integer postgraduationPassoutYear;
}
