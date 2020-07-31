// code from https://bezkoder.com/react-crud-web-api/
import React, { Component } from "react";
import CustomerDataService from "../services/customer.service";

export default class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhoneNum = this.onChangePhoneNum.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveCustomer = this.saveCustomer.bind(this);
    this.newCustomer = this.newCustomer.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      password: "",
      phoneNum: "",
      email: "",
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangePhoneNum(e) {
    this.setState({
      phoneNum: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  saveCustomer() {
    var data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      phoneNum: this.state.phoneNum,
      email: this.state.email,
    };

    CustomerDataService.create(data)
      .then((response) => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          password: response.data.password,
          phoneNum: response.data.phoneNum,
          email: response.data.email,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newCustomer() {
    this.setState({
      firstName: "",
      lastName: "",
      password: "",
      phoneNum: "",
      email: "",
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCustomer}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="firstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="lastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNum">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="phoneNum"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="email"
              />
            </div>

            <button onClick={this.saveCustomer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
