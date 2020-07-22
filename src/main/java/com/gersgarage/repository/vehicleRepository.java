package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.vehicle;

@Repository
public interface vehicleRepository extends JpaRepository <vehicle, String>{

}
