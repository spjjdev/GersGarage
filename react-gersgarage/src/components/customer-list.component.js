import React, { Component } from "react";
import CustomerDataService from "../services/customer.service";
import { Link } from "react-router-dom";

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchEmail = this.onChangeSearchEmail.bind(this);
    this.retrieveCustomers = this.retrieveCustomers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCustomer = this.setActiveCustomer.bind(this);
    this.searchEmail = this.searchEmail.bind(this);

    this.state = {
      customer: [],
      currentCustomer: null,
      currentIndex: -1,
      searchEmail: "",
    };
  }

  componentDidMount() {
    this.retrieveCustomers();
  }

  onChangeSearchEmail(e) {
    const searchEmail = e.target.value;

    this.setState({
      searchEmail: searchEmail,
    });
  }

  retrieveCustomers() {
    CustomerDataService.getAll()
      .then((response) => {
        this.setState({
          customers: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCustomers();
    this.setState({
      currentCustomer: null,
      currentIndex: -1,
    });
  }

  setActiveCustomer(customer, index) {
    this.setState({
      currentCustomer: customer,
      currentIndex: index,
    });
  }

  searchEmail() {
    CustomerDataService.findByEmail(this.state.searchEmail)
      .then((response) => {
        this.setState({
          customers: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchEmail,
      customers,
      currentCustomer,
      currentIndex,
    } = this.state;
    console.log(customers);

    return (
      <div className="list row">
        

        <div className="col-md-6">
          <h4>Customer List</h4>

          <ul className="list-group">
            {customers &&
              customers.map((customer, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCustomer(customer, index)}
                  key={index}
                >
                  {customer.first_name +" "+customer.last_name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentCustomer ? (
            <div>
              <h4>Customer</h4>
              <div>
                <label>
                  <strong>First Name:</strong>
                </label>{" "}
                {currentCustomer.first_name}
              </div>
              <div>
                <label>
                  <strong>Last Name:</strong>
                </label>{" "}
                {currentCustomer.last_name}
              </div>
              <div>
                <label>
                  <strong>Phone Number:</strong>
                </label>{" "}
                {currentCustomer.phone_num}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentCustomer.email}
              </div>
              <Link
                to={"/customers/" + currentCustomer.email}
                className="badge badge-warning"
              >
                Edit
              </Link>
             
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Customer...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
