package com.gersgarage.model;

import javax.persistence.*;

@Entity
@Table(name = "supplies")
public class supplies {

	// pk
	@Id
	@Column(name = "supplies_id")
	private int supplies_id;

	@Column(name = "supplies_name")
	private String supplies_name;

	@Column(name = "quantity")
	private int quantity;

	@Column(name = "price")
	private int price;

	public supplies() {
		super();
		// TODO Auto-generated constructor stub
	}

	public supplies(int supplies_id, String supplies_name, int quantity, int price) {
		super();
		this.supplies_id = supplies_id;
		this.supplies_name = supplies_name;
		this.quantity = quantity;
		this.price = price;
	}

	public int getSupplies_id() {
		return supplies_id;
	}

	public void setSupplies_id(int supplies_id) {
		this.supplies_id = supplies_id;
	}

	public String getSupplies_name() {
		return supplies_name;
	}

	public void setSupplies_name(String supplies_name) {
		this.supplies_name = supplies_name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

}
