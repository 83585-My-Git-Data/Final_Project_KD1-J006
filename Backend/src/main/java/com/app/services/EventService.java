package com.app.services;

import java.util.List;

import com.app.dto.EventDTO;
import com.app.entitites.EventType;

public interface EventService {

    

    EventDTO addEvent(EventDTO eventDTO, Long adminId);  // Updated return type

    List<EventDTO> getEventsByType(EventType eventType);
    
    List<EventDTO> searchEventsByName(String eventName);

    List<EventDTO> getAllEvents();

    
  
}
