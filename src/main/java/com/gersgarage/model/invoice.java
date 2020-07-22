package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "invoice")
public class invoice {

	// pk
	@Id
	@Column(name = "invoice_id")
	private Long invoice_id;
	
	// fk to supplies(id)
	@OneToMany
	@JoinColumn(name = "supplies_id")
	private Long supplies;
	
	// fk to booking
	@OneToOne
	@JoinColumn(name = "booking_id")
	private Long booking;

	public invoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public invoice(Long invoice_id, Long supplies, Long booking) {
		super();
		this.invoice_id = invoice_id;
		this.supplies = supplies;
		this.booking = booking;
	}

	public Long getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(Long invoice_id) {
		this.invoice_id = invoice_id;
	}

	public Long getSupplies() {
		return supplies;
	}

	public void setSupplies(Long supplies) {
		this.supplies = supplies;
	}

	public Long getBooking() {
		return booking;
	}

	public void setBooking(Long booking_id) {
		this.booking = booking_id;
	}

}
