package com.gersgarage.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.supplies;

@Repository
public interface suppliesRepository extends JpaRepository <supplies, Long> {

}
