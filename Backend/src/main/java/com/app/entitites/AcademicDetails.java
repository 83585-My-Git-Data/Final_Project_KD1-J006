package com.app.entitites;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.app.entitites.Alumni;
import com.app.entitites.BaseEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "academic_details")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AcademicDetails extends BaseEntity
{
	@OneToOne
    @JoinColumn(name = "alumni_id", nullable = false)
    private Alumni alumni;

    @Column(name = "secondary_education_college", nullable = false)
    private String secondaryEducationCollege;

    @Column(name = "secondary_education_percentage", nullable = false)
    private Double secondaryEducationPercentage;

    @Column(name = "secondary_education_passout_year", nullable = false)
    private Integer secondaryEducationPassoutYear;

    @Column(name = "higher_secondary_education_college", nullable = false)
    private String higherSecondaryEducationCollege;

    @Column(name = "higher_secondary_education_percentage", nullable = false)
    private Double higherSecondaryEducationPercentage;

    @Column(name = "higher_secondary_education_passout_year", nullable = false)
    private Integer higherSecondaryEducationPassoutYear;

    @Column(name = "graduation_course", nullable = false)
    private String graduationCourse;

    @Column(name = "graduation_percentage", nullable = false)
    private Double graduationPercentage;

    @Column(name = "graduation_passout_year", nullable = false)
    private Integer graduationPassoutYear;

    @Column(name = "postgraduation_course")
    private String postgraduationCourse;

    @Column(name = "postgraduation_percentage")
    private Double postgraduationPercentage;

    @Column(name = "postgraduation_passout_year")
    private Integer postgraduationPassoutYear;
}
