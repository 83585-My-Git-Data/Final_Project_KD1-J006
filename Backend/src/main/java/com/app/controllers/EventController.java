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

    
}
