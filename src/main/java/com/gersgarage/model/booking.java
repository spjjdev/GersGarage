package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "booking")
public class booking {

	// pk
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(columnDefinition = "serial",name = "booking_id")
	private Long booking_id;
	// foreign key references mechanic (id)
	@OneToOne
	@JoinColumn(name = "mechanic_id")
	private mechanic mechanic;

	// foreign key references vehicle (id)
	@OneToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "reg")
	private vehicle vehicle;

	@Column(name = "timedate")
	private String timedate;

	// foreign key references booking_type (id)
	@OneToOne(cascade = {CascadeType.MERGE})
	@JoinColumn(name = "booking_type_id")
	private booking_type type;

	public booking() {
		super();
	}

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