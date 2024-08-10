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
public class RegistrationRequestDTO {
     private UserDTO userDTO;
     private AcademicDetailsDTO academicDetailsDTO;
}
