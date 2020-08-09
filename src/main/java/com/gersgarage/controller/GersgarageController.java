package com.gersgarage.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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

	// delete customer DELETE
	@DeleteMapping("/customers/{email}")
	public String deleteCustomer(@RequestBody customer customer) {
		this.customerRepository.delete(customer);

		return "customer deleted";
	}
	
	// update customer PUT
	

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

	@PostMapping("/add-booking")
	public String addBooking(@RequestBody booking booking) {
		bookingRepository.save(booking);
		return booking + "is registered to Ger's Garage";
	}

	// booking POST customer details with vechicle details
////	@PostMapping("/booking")
////	public void addBooking (@RequestBody booking booking) {
////		bookingRepository.save(booking);
////	}
//	
	// assign mechanic to booking, ger PUT info into booking
//	@PutMapping("/assign-mechanic/{booking_i}")

//	public void assignMechanic() {
	@PutMapping("/bookings/{booking_id}")
//	public ResponseEntity<booking> assignMechanic( @PathVariable(value = "booking_id")Long booking_id, Long mechanic_id)
//		
//	booking booking =
//		
//		return booking;
//}
//	 @RequestMapping(value = "/bookings/{booking_id}", method = RequestMethod.PUT)
//	public String assignMehcanic(@PathVariable Long booking_id) throws ResourceNotFoundException{
//	  ResponseEntity<booking> booking = getBookingById(booking_id);
//	   booking.
//	    //code
//	return null;

	// retrieve a customer booking and put a mechanic in the mechanic attribute

	// list of supplies for customer to buy, GET supplies table

	// invoice creation from ger, add booking and supplies needed, PUT?

	@GetMapping("/bookingType")
	public List<booking_type> getBookingType() {
		List<booking_type> allBookingType = this.bookingTypeRepository.findAll();
		return allBookingType;
	}

	@GetMapping("/invoice")
	public List<invoice> getAllInvoices() {
		List<invoice> allInvoices = this.invoiceRepository.findAll();
		return allInvoices;
	}

	@GetMapping("/invoice/{invoice_id}")
	public ResponseEntity<invoice> getInvoiceById(@PathVariable(value = "invoice_id") Long invoice_id)
			throws ResourceNotFoundException {
		invoice invoice = invoiceRepository.findById(invoice_id)
				.orElseThrow(() -> new ResourceNotFoundException("invoice not found for this ID" + invoice_id));
		return ResponseEntity.ok().body(invoice);
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

	@PostMapping("/add-supply")
	public String addSupply(@RequestBody supplies supplies) {
		suppliesRepository.save(supplies);
		return supplies + "is added  to supply list";
	}

	@GetMapping("/vehicles")
	public List<vehicle> getVehicle() {
		List<vehicle> allVehicles = this.vehicleRepository.findAll();
		return allVehicles;
	}

}
