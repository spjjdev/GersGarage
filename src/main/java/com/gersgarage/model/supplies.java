package com.gersgarage.model;

import javax.persistence.*;


@Entity
@Table(name = "supplies")
public class supplies {

	// pk
	@Id
	@Column(name = "supplies_id")
	private Long supplies_id;

	@Column(name = "supplies_name")
	private String supplies_name;

	@Column(name = "quantity")
	private Long quantity;

	@Column(name = "price")
	private Long price;

	public supplies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public supplies(Long supplies_id, String supplies_name, Long quantity, Long price) {
		super();
		this.supplies_id = supplies_id;
		this.supplies_name = supplies_name;
		this.quantity = quantity;
		this.price = price;
	}

	public Long getSupplies_id() {
		return supplies_id;
	}

	public void setSupplies_id(Long supplies_id) {
		this.supplies_id = supplies_id;
	}

	public String getSupplies_name() {
		return supplies_name;
	}

	public void setSupplies_name(String supplies_name) {
		this.supplies_name = supplies_name;
	}

	public Long getQuantity() {
		return quantity;
	}

	public void setQuantity(Long quantity) {
		this.quantity = quantity;
	}

	public Long getPrice() {
		return price;
	}

	public void setPrice(Long price) {
		this.price = price;
	}

}
