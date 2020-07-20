package com.gersgarage.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gersgarage.model.customer;
import com.gersgarage.repository.customerRepository;

@RestController
@RequestMapping("/api")//custom naming
public class customerController {
	
	private customerRepository customerRepository;
	
	
	//get customers
	@GetMapping("/customers")
	public List<customer> getAllCustomers(){
		return this.customerRepository.findAll();
		}
	
	//get customers by id
	
	//add customer
	
	//update customer
	
	//delete customer
	

}
