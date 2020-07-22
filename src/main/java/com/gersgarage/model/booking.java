package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "booking")
public class booking {

	// foreign key references mechanic (id)
	@OneToOne
	@JoinColumn(name = "mechanic_id")
	private Long mechanic;

	// foreign key references vehicle (id)
	@OneToOne
	@JoinColumn(name = "reg")
	private String vehicle;

	@Column(name = "")
	private String timedate;

	// pk
	@Id
	@Column(name = "booking_id")
	private Long booking_id;

	// foreign key references booking_type (id)
	@OneToOne
	@JoinColumn(name = "booking_type_id")
	private Long type;

	public booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public booking(Long mechanic, String vehicle, String timedate, Long booking_id, Long type) {
		super();
		this.mechanic = mechanic;
		this.vehicle = vehicle;
		this.timedate = timedate;
		this.booking_id = booking_id;
		this.type = type;
	}

	public Long getMechanic() {
		return mechanic;
	}

	public void setMechanic(Long mechanic) {
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

	public Long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}

	public Long getType() {
		return type;
	}

	public void setType(Long type) {
		this.type = type;
	}

}