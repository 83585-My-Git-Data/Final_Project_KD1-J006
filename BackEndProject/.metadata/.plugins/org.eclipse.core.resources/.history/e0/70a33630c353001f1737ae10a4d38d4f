package com.app.entitites;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Admin extends BaseEntity {

	    @OneToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "user_id", nullable = false, unique = true)
	    private User user;

	    private String department;

	    private String position;
	}

