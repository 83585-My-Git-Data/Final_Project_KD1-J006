package com.app.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.daos.AdminDao;
import com.app.daos.EventDao;
import com.app.dto.EventDTO;
import com.app.entitites.Admin;
import com.app.entitites.Event;
import com.app.entitites.EventType;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    private EventDao eventDao;

    @Autowired
    private AdminDao adminDao;

    @Autowired
    private ModelMapper modelMapper;

   

    @Override
    public EventDTO addEvent(EventDTO eventDTO, Long adminId) {  // Ensure the return type matches
        Optional<Admin> adminOptional = adminDao.findById(adminId);
        if (!adminOptional.isPresent()) {
            throw new RuntimeException("Admin not found with id: " + adminId);
        }
        Admin admin = adminOptional.get();
        Event event = modelMapper.map(eventDTO, Event.class);
        event.setAdmin(admin);
        Event savedEvent = eventDao.save(event);
        return mapToEventDTO(savedEvent);
    }

    @Override
    public List<EventDTO> getEventsByType(EventType eventType) {
        List<Event> events = eventDao.findByEventType(eventType);
        return events.stream().map(this::mapToEventDTO).collect(Collectors.toList());
    }

   
    private EventDTO mapToEventDTO(Event event) {
        return modelMapper.map(event, EventDTO.class);
    }

     @Override
    public List<EventDTO> searchEventsByName(String eventName) {
        List<Event> events = eventDao.findByEventNameContainingIgnoreCase(eventName);
        return events.stream().map(this::mapToEventDTO).collect(Collectors.toList());
    }

    @Override
    public List<EventDTO> getAllEvents() {
        List<Event> events = eventDao.findAll();
        return events.stream().map(this::mapToEventDTO).collect(Collectors.toList());
    }

<<<<<<< HEAD
=======
    @Override
    public EventDTO updateEvent(Long eventId, EventDTO eventDTO) {
        Optional<Event> eventOptional = eventDao.findById(eventId);
        if (!eventOptional.isPresent()) {
            throw new RuntimeException("Event not found with id: " + eventId);
        }
        Event existingEvent = eventOptional.get();
        modelMapper.map(eventDTO, existingEvent);  // Update existing event with new details
        Event updatedEvent = eventDao.save(existingEvent);
        return mapToEventDTO(updatedEvent);
    }
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
   
}
