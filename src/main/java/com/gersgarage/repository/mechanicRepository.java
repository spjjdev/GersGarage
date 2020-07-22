package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.mechanic;

@Repository
public interface mechanicRepository extends JpaRepository <mechanic, Long> {

}
