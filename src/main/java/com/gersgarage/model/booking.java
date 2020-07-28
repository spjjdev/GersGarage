package com.gersgarage.model;

import javax.persistence.*;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "booking")
public class booking {

	// foreign key references mechanic (id)
	@OneToOne
	@JoinColumn(name = "mechanic_id")
//	@JoinTable(name = "mechanic", joinColumns = @JoinColumn(name = "mechanic_id"))
	private mechanic mechanic;

	// foreign key references vehicle (id)
	@OneToOne
	@JoinColumn(name = "reg")
//	@JoinTable(name = "vehicle", joinColumns = @JoinColumn(name = "reg"))
	private vehicle vehicle;

	@Column(name = "")
	private String timedate;

	// pk
	@Id
	@Column(name = "booking_id")
	private Long booking_id;

	// foreign key references booking_type (id)
	@OneToOne
	@JoinColumn(name = "booking_type_id")
//	@JoinTable(name = "booking_type", joinColumns = @JoinColumn(name = "booking_type_id"))
	private booking_type type;

	@Autowired
	public booking() {
		super();
	}

	@Autowired
	public booking(mechanic mechanic, vehicle vehicle, String timedate, Long booking_id, booking_type type) {
		super();
		this.mechanic = mechanic;
		this.vehicle = vehicle;
		this.timedate = timedate;
		this.booking_id = booking_id;
		this.type = type;
	}

	public mechanic getMechanic() {
		return mechanic;
	}

	public void setMechanic(mechanic mechanic) {
		this.mechanic = mechanic;
	}

	public vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(vehicle vehicle) {
		this.vehicle = vehicle;
	}

	public String getTimedate() {
		return timedate;
	}

	public void setTimedate(String timedate) {
		this.timedate = timedate;
	}

	public Long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}

	public booking_type getType() {
		return type;
	}

	public void setType(booking_type type) {
		this.type = type;
	}

}