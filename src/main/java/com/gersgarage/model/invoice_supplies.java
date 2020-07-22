package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "invoice_supplies")
public class invoice_supplies {

	// fk ref supllies(id)
	@ManyToOne
	@JoinColumn(name = "supplies_id")
	private Long supplies_id;

	// fk ref invoice(id)
	@ManyToOne
	@JoinColumn(name = "invoice_id")
	private Long invoice_id;

	@Column(name = "amount")
	private Long amount;

	public invoice_supplies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public invoice_supplies(Long supplies_id, Long invoice_id, Long amount) {
		super();
		this.supplies_id = supplies_id;
		this.invoice_id = invoice_id;
		this.amount = amount;
	}

	public Long getSupplies_id() {
		return supplies_id;
	}

	public void setSupplies_id(Long supplies_id) {
		this.supplies_id = supplies_id;
	}

	public Long getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(Long invoice_id) {
		this.invoice_id = invoice_id;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

}
