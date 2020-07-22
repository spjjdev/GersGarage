package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "booking_type")
public class booking_type {

	@Id
	@Column(name = "booking_type_id")
	private Long booking_type_id;

	@Column(name = "type")
	private String type;

	@Column(name = "price")
	private Long price;

	@Column(name = "description")
	private String description;

	public booking_type() {
		super();
		// TODO Auto-generated constructor stub
	}

	public booking_type(Long booking_type_id, String type, Long price, String description) {
		super();
		this.booking_type_id = booking_type_id;
		this.type = type;
		this.price = price;
		this.description = description;
	}

	public Long getBooking_type_id() {
		return booking_type_id;
	}

	public void setBooking_type_id(Long booking_type_id) {
		this.booking_type_id = booking_type_id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
