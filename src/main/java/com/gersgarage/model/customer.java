package com.gersgarage.model;

import javax.persistence.*;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "customer")
public class customer {

	@Column(name = "first_name")
	private String first_name;

	@Column(name = "last_name")
	private String last_name;

	@Column(name = "password")
	private String password;

	@Column(name = "phone_num")
	private String phone_num;

	@Id
	@Column(name = "email")
	private String email;

//	@Autowired
	public customer() {
		super();
	}

	@Autowired
	public customer(String first_name, String last_name, String password, String phone_num, String email) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.password = password;
		this.phone_num = phone_num;
		this.email = email;
	}

	@Override
	public String toString() {
		return String.format("Customer[FirstName='%s', LastName='%s', Password='%s', PhoneNum='%s', Email='%s']",
				first_name, last_name, password, phone_num, email);

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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhone_num() {
		return phone_num;
	}

	public void setPhone_num(String phone_num) {
		this.phone_num = phone_num;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
