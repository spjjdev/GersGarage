package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "booking")
public class booking {

	// foreign key references mechanic (id)
	@OneToOne
	@JoinColumn(name = "mechanic_id")
	private int mechanic;

	// foreign key references vehicle (id)
	@OneToOne
	@JoinColumn(name = "reg")
	private String vehicle;

	@Column(name = "")
	private String timedate;

	// pk
	@Id
	@Column(name = "booking_id")
	private int booking_id;

	// foreign key references booking_type (id)
	@OneToOne
	@JoinColumn(name = "booking_type_id")
	private int type;

	public booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public booking(int mechanic, String vehicle, String timedate, int booking_id, int type) {
		super();
		this.mechanic = mechanic;
		this.vehicle = vehicle;
		this.timedate = timedate;
		this.booking_id = booking_id;
		this.type = type;
	}

	public int getMechanic() {
		return mechanic;
	}

	public void setMechanic(int mechanic) {
		this.mechanic = mechanic;
	}

	public String getVehicle() {
		return vehicle;
	}

	public void setVehicle(String vehicle) {
		this.vehicle = vehicle;
	}

	public String getTimedate() {
		return timedate;
	}

	public void setTimedate(String timedate) {
		this.timedate = timedate;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

}