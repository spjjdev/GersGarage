package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.booking;


@Repository
public interface bookingRepository extends JpaRepository <booking, Long>{

}
