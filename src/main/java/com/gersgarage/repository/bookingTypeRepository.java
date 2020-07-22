package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.booking_type;

@Repository
public interface bookingTypeRepository extends JpaRepository <booking_type, Long>{

}
