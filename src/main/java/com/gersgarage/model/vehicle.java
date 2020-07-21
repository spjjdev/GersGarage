package com.gersgarage.model;

import javax.persistence.*;


@Entity
@Table (name= "vehicle")
public class vehicle {
	
	@Column(name= "make")
	private String make;
	
	@Column(name= "model")
	private String model;
	
	@Column(name= "colour")
	private String colour;
	
	@Id
	@Column(name= "reg")
	private String reg;
	
	@ManyToOne
	@JoinColumn(name= "email")
	private customer owner;
	
	
	
	public vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	public vehicle(String make, String model, String colour, String reg, customer owner) {
		super();
		this.make = make;
		this.model = model;
		this.colour = colour;
		this.reg = reg;
		this.owner = owner;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public String getReg() {
		return reg;
	}
	public void setReg(String reg) {
		this.reg = reg;
	}
	public customer getOwner() {
		return owner;
	}
	public void setOwner(customer owner) {
		this.owner = owner;
	}

}
