package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "invoice")
public class invoice {

	// pk
	@Id
	@Column(name = "invoice_id")
	private int invoice_id;
	
	// fk to supplies(id)
	@OneToMany
	@JoinColumn(name = "supplies_id")
	private int supplies;
	
	// fk to booking
	@OneToOne
	@JoinColumn(name = "booking_id")
	private int booking;

	public invoice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public invoice(int invoice_id, int supplies, int booking) {
		super();
		this.invoice_id = invoice_id;
		this.supplies = supplies;
		this.booking = booking;
	}

	public int getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}

	public int getSupplies() {
		return supplies;
	}

	public void setSupplies(int supplies) {
		this.supplies = supplies;
	}

	public int getBooking() {
		return booking;
	}

	public void setBooking(int booking_id) {
		this.booking = booking_id;
	}

}
