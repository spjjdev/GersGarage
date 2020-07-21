package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "invoice_supplies")
public class invoice_supplies {

	// fk ref supllies(id)
	@ManyToOne
	@JoinColumn(name = "supplies_id")
	private int supplies_id;

	// fk ref invoice(id)
	@ManyToOne
	@JoinColumn(name = "invoice_id")
	private int invoice_id;

	@Column(name = "amount")
	private int amount;

	public invoice_supplies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public invoice_supplies(int supplies_id, int invoice_id, int amount) {
		super();
		this.supplies_id = supplies_id;
		this.invoice_id = invoice_id;
		this.amount = amount;
	}

	public int getSupplies_id() {
		return supplies_id;
	}

	public void setSupplies_id(int supplies_id) {
		this.supplies_id = supplies_id;
	}

	public int getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

}
