package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entitites.Alumni;

@Repository
public interface AlumniDao extends JpaRepository<Alumni, Long>
{

   @Query("SELECT new com.app.dto.AlumniUserDTO(a.id, u.firstName, u.lastName, a.batch, a.address, a.course, a.jobRole, a.dob, a.experienceLevel, a.gender, a.placementStatus, a.companyName) " +
	           "FROM Alumni a JOIN a.user u WHERE u.firstName LIKE %:name% OR u.lastName LIKE %:name%")
	List<AlumniUserDTO> findAlumniUserByName(@Param("name") String name);
	 
	 @Query("SELECT new com.app.dto.AlumniUserDTO(a.id, u.firstName, u.lastName, a.batch, a.address, a.course, a.jobRole, a.dob, a.experienceLevel, a.gender, a.placementStatus, a.companyName) " +
	           "FROM Alumni a JOIN a.user u WHERE a.companyName LIKE %:companyName%")
	 List<AlumniUserDTO> findAlumniUserByCompanyName(@Param("companyName") String companyName);
	 
	 @Query("SELECT new com.app.dto.AlumniUserDTO(a.id, u.firstName, u.lastName, a.batch, a.address, a.course, a.jobRole, a.dob, a.experienceLevel, a.gender, a.placementStatus, a.companyName) " +
	           "FROM Alumni a JOIN a.user u WHERE a.jobRole LIKE %:jobRole%")
	 List<AlumniUserDTO> findAlumniUserByJobRole(@Param("jobRole") String jobRole);

}