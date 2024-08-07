package com.app.entitites;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Alumni extends BaseEntity {

	    @OneToOne
	    @JoinColumn(name = "user_id", referencedColumnName = "id")
	    private User user;

	    @OneToOne
	    @JoinColumn(name = "accDetails_id", referencedColumnName = "id")
	    private AcademicDetails academicDetails;

	    @Column(name = "batch", nullable = false)
	    private String batch;

	    @Column(name = "address", nullable = false)
	    private String address;

	    @Column(name = "course", nullable = false)
	    private String course;

	    @Column(name = "jobRole", nullable = false)
	    private String jobRole;
	    
	    @Column(name = "dob", nullable = false)
	    private LocalDate dob;
	    
	    @Column(name = "experienceLevel", nullable = false)
	    private String experienceLevel;


	    @Column(name = "gender", nullable = false)
	    private String gender;

	    @Column(name = "placementStatus")
	    private String placementStatus;

	    @Column(name = "CompanyName")
	    private String CompanyName;
	}


