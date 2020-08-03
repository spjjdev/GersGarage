package com.gersgarage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gersgarage.gersgarage.ResourceNotFoundException;
import com.gersgarage.model.*;
import com.gersgarage.repository.*;

@CrossOrigin(origins = "*", allowedHeaders = "*") 
@RestController
@RequestMapping("/api") // custom naming
public class GersgarageController {

	@Autowired
	private customerRepository customerRepository;
	@Autowired
	private vehicleRepository vehicleRepository;
	@Autowired
	private bookingRepository bookingRepository;
	@Autowired
	private bookingTypeRepository bookingTypeRepository;
	@Autowired
	private invoiceRepository invoiceRepository;
	@Autowired
	private mechanicRepository mechanicRepository;
	@Autowired
	private suppliesRepository suppliesRepository;

	@GetMapping("hello")
	public String hello() {
		return "Hello World";
	}

	// get customers
	
//	@CrossOrigin(origins = "http://localhost:8081/customers")
	@GetMapping("/customers")
	public List<customer> getAllCustomers() {
		List<customer> allCustomers = this.customerRepository.findAll();
		return allCustomers;
	}

	// get customers by id
//	@CrossOrigin(origins = "http://localhost:8081/customers")
	@GetMapping("/customers/{email}")
	public ResponseEntity<customer> getCustomerById(@PathVariable(value = "email") String email)
			throws ResourceNotFoundException {
		customer customer = customerRepository.findById(email)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found for this email" + email));
		return ResponseEntity.ok().body(customer);
	}

	// add customer to DB, customer does this on registration
//	@CrossOrigin(origins = "http://localhost:8081/add-customer")
	@PostMapping("/add-customer")
	public String addCustomer(@RequestBody customer customer) {
		customerRepository.save(customer);
		return customer + "is registered to Ger's Garage";
	}

	// update customer PUT

	// delete customer DELETE

	// add vehicle POST
	@PostMapping("add-vehicle")
	public void addVehicle(@RequestBody vehicle vehicle) {
		vehicleRepository.save(vehicle);
	}

	// get list of bookings GET
	@GetMapping("/bookings")
	public List<booking> getBookings() {
		return this.bookingRepository.findAll();
	}
	@GetMapping("/bookings/{booking_id}")
	public ResponseEntity<booking> getBookingById(@PathVariable(value = "booking_id") Long booking_id)
			throws ResourceNotFoundException {
		booking booking = bookingRepository.findById(booking_id)
				.orElseThrow(() -> new ResourceNotFoundException("Booking not found for this ID" + booking_id));
		return ResponseEntity.ok().body(booking);
	}

	// booking POST customer details with vechicle details
////	@PostMapping("/booking")
////	public void addBooking (@RequestBody booking booking) {
////		bookingRepository.save(booking);
////	}
//	
	// assign mechanic to booking, ger PUT info into booking
	@PutMapping("assign-mechanic")
	public void assignMechanic() {
		// retrieve a customer booking and put a mechanic in the mechanic attribute
	}

	// list of supplies for customer to buy, GET supplies table

	// invoice creation from ger, add booking and supplies needed, PUT?

	@GetMapping("/bookingType")
	public List<booking_type> getBookingType() {
		List<booking_type> allBookingType = this.bookingTypeRepository.findAll();
		return allBookingType;
	}

	@GetMapping("/invoices")
	public List<invoice> getAllInvoices() {
		List<invoice> allInvoices = this.invoiceRepository.findAll();
		return allInvoices;
	}

	@GetMapping("/mechanics")
	public List<mechanic> getMechanics() {
		List<mechanic> allMechanics = this.mechanicRepository.findAll();
		return allMechanics;
	}

	@GetMapping("/supplies")
	public List<supplies> getSupplies() {
		List<supplies> allSupplies = this.suppliesRepository.findAll();
		return allSupplies;
	}

	@GetMapping("/vehicles")
	public List<vehicle> getVehicle() {
		List<vehicle> allVehicles = this.vehicleRepository.findAll();
		return allVehicles;
	}

}
