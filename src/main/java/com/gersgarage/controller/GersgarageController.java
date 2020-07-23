package com.gersgarage.controller;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gersgarage.gersgarage.ResourceNotFoundException;
import com.gersgarage.model.booking;
import com.gersgarage.model.customer;
import com.gersgarage.model.vehicle;
import com.gersgarage.repository.customerRepository;
import com.gersgarage.repository.vehicleRepository;

@RestController
@RequestMapping("/api")//custom naming
public class GersgarageController {
	
	private customerRepository customerRepository;
	private com.gersgarage.repository.bookingRepository bookingRepository;
	private vehicleRepository vehicleRepository;
	
	@GetMapping("hello")
	public String hello() {
		return "Hello World";
	}
	
	
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
	
	//add customer to DB, customer does this on registration 
	@PostMapping("/add-customer")
	public String addCustomer(@RequestBody customer customer){
		customerRepository.save(customer);
		return customer + "is registered to Ger's Garage";
	}
	
	//update customer PUT
	
	//delete customer DELETE
	
	//add vehicle POST
	@PostMapping("add-vehicle")
	public void addVehicle (@RequestBody vehicle vehicle) {
		vehicleRepository.save(vehicle);
	}
	
	//get list of bookings GET
	@GetMapping("/bookings")
	public List<booking> getBookings(){
		return this.bookingRepository.findAll();
		}
	
	
	//booking POST customer details with vechicle details
	@PostMapping("/booking")
	public void addBooking (@RequestBody booking booking) {
		bookingRepository.save(booking);
	}
	
	//assign mechanic to booking, ger PUT info into booking
	@PutMapping("assign-mehcanic")
	public void assignMechanic() {
		//retrieve a customer booking and put a mechanic in the mechanic attribute
	}
	
	//list of supplies for customer to buy, GET supplies table
	
	//invoice creation from ger, add booking and supplies needed, PUT?
	
	
	
	

}
