package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entitites.AcademicDetails;

public interface AcademicDetailsDao extends JpaRepository<AcademicDetails, Long> 
{

}
