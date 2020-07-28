package com.gersgarage.model;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "invoice")
public class invoice {

	// pk
	@Id
	@Column(name = "invoice_id")
	private Long invoice_id;

	@ManyToMany
	@JoinTable(name = "invoice_supplies", joinColumns = @JoinColumn(name = "invoice_id"), inverseJoinColumns = @JoinColumn(name = "supplies_id"))
	Set<supplies> invoiceSupplies;

//	// fk to supplies(id)
//	@OneToMany
//	@JoinColumn(name = "supplies_id")
//	private Long supplies;

	// fk to booking
	@OneToOne
	@JoinColumn(name = "booking_id")
	private booking booking;

	public invoice() {
		super();
	}

	public invoice(Long invoice_id, Set<supplies> invoiceSupplies, booking booking) {
		super();
		this.invoice_id = invoice_id;
		this.invoiceSupplies = invoiceSupplies;
		this.booking = booking;
	}

	public Long getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(Long invoice_id) {
		this.invoice_id = invoice_id;
	}

	public Set<supplies> getInvoiceSupplies() {
		return invoiceSupplies;
	}

	public void setInvoiceSupplies(Set<supplies> invoiceSupplies) {
		this.invoiceSupplies = invoiceSupplies;
	}

	public booking getBooking() {
		return booking;
	}

	public void setBooking(booking booking) {
		this.booking = booking;
	}

}
