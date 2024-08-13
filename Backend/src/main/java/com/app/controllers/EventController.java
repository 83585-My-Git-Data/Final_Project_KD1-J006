package com.app.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.EventDTO;
import com.app.entitites.EventType;
import com.app.services.EventService;

@RestController
@RequestMapping("api/events")
public class EventController {

    @Autowired
    private EventService eventService;

    

    @PostMapping("/add")
    public ResponseEntity<EventDTO> addEvent(@RequestBody @Valid EventDTO createEventDTO,
                                             @RequestParam Long adminId) {
        EventDTO eventDTO = eventService.addEvent(createEventDTO, adminId);
        return ResponseEntity.ok(eventDTO);
    }

    @GetMapping("/type")
    public ResponseEntity<List<EventDTO>> getEventsByType(@RequestParam EventType eventType) {
        List<EventDTO> events = eventService.getEventsByType(eventType);
        return ResponseEntity.ok(events);
    }

    
    @GetMapping("/search")
    public ResponseEntity<List<EventDTO>> searchEvents(@RequestParam String name) {
        List<EventDTO> events = eventService.searchEventsByName(name);
        return ResponseEntity.ok(events);
    }

    @GetMapping("/all")
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        List<EventDTO> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }

<<<<<<< HEAD
=======
    @PutMapping("/update")  
    public ResponseEntity<EventDTO> updateEvent(@RequestParam Long eventId,
                                                @RequestBody @Valid EventDTO eventDTO) {
        EventDTO updatedEvent = eventService.updateEvent(eventId, eventDTO);
        return ResponseEntity.ok(updatedEvent);
    }

>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990

    
}
