package com.app.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entitites.Alumni;

@Repository
public interface AlumniDao extends JpaRepository<Alumni, Long>
{
}