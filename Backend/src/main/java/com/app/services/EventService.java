package com.app.services;

import java.util.List;

import com.app.dto.EventDTO;
import com.app.entitites.EventType;

public interface EventService {

    

    EventDTO addEvent(EventDTO eventDTO, Long adminId);  // Updated return type

    List<EventDTO> getEventsByType(EventType eventType);
    
    List<EventDTO> searchEventsByName(String eventName);

    List<EventDTO> getAllEvents();

<<<<<<< HEAD

   
=======
    EventDTO updateEvent(Long eventId, EventDTO eventDTO);

  
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
}
