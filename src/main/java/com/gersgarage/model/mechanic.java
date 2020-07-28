package com.gersgarage.model;

import javax.persistence.*;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "mechanic")
public class mechanic {

	@Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;

	@Id
	@Column(name = "mechanic_id")
//	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long mechanic_id;

	@Column(name = "email")
	private String email;

	@Column(name = "phone_num")
	private String phone_num;

	@Column(name = "address")
	private String address;

//	@Autowired
	public mechanic() {
		super();
	}

	@Autowired
	public mechanic(String first_name, String last_name, Long mehcanic_id, String email, String phone_num,
			String address) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.mechanic_id = mehcanic_id;
		this.email = email;
		this.phone_num = phone_num;
		this.address = address;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public Long getMechanic_id() {
		return mechanic_id;
	}

	public void setMechanic_id(Long mechanic_id) {
		this.mechanic_id = mechanic_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone_num() {
		return phone_num;
	}

	public void setPhone_num(String phone_num) {
		this.phone_num = phone_num;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
