package com.app.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.app.entitites.EventType;

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
public class EventDTO {
	private EventType eventType;
	private String eventName;
    private LocalDate eventDate;
    private LocalDateTime eventTime;
    private String venue;
    private String description;
    private String status;
}