package com.app.daos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entitites.Event;
import com.app.entitites.EventType;

public interface EventDao extends JpaRepository<Event,Long> {
	
	List<Event> findByEventType(EventType eventType);
        List<Event> findByEventNameContainingIgnoreCase(String eventName);


}