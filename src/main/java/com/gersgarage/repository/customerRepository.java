package com.gersgarage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gersgarage.model.customer;

@Repository
public interface customerRepository extends JpaRepository <customer, String>{
}
