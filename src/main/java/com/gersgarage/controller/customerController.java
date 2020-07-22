package com.gersgarage.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gersgarage.gersgarage.ResourceNotFoundException;
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
	@GetMapping ("/customers/{email}")
	public ResponseEntity<customer> getCustomerById(@PathVariable(value = "email") String email) 
	      throws ResourceNotFoundException {
		customer customer = customerRepository.findById(email)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found for this email" + email)); 
				return ResponseEntity.ok().body(customer);
	}
	
	//add customer
	
	//update customer
	
	//delete customer
	

}
