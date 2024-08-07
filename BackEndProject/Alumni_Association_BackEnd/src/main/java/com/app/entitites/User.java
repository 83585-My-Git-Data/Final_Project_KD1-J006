package com.app.entitites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
	@Table(name = "users")
	@Getter
	@Setter
	@ToString
	public class User extends BaseEntity {

	    @Column(name = "first_name", nullable = false)
	    private String firstName;

	    @Column(name = "last_name", nullable = false)
	    private String lastName;

	    @Column(name = "email", nullable = false, unique = true)
	    private String email;

	    @Column(name = "password", nullable = false)
	    private String password;

	    @Column(name = "contact", nullable = false)
	    private String contact;

	    @Enumerated(EnumType.STRING)
	    @Column(name = "role", nullable = false)
	    private UserRole role;

	   
	}


