// code from https://bezkoder.com/react-crud-web-api/

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Customer from "./components/customer.component";
import CustomerList from "./components/customer-list.component";
import AddCustomer from "./components/add-customer.component";
import Booking from "./components/booking.component";
import BookingList from "./components/booking-list.component";
import AddBooking from "./components/add-booking.component"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/customers" className="navbar-brand">
              Ger's Garage
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/customers"} className="nav-link">
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-customer"} className="nav-link">
                  Add Customer
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/bookings"} className="nav-link">
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-booking"} className="nav-link">
                  Add Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Add Vehicle
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Supplies
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Add Supply
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Assign Mechanic
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route
                exact
                path={["/", "/customers"]}
                component={CustomerList}
              />
              <Route exact path="/add-customer" component={AddCustomer} />
              <Route path="/customer/{email}" component={Customer} />
              <Route path="/bookings/{booking_id}" component={Booking} />
              <Route path="/bookings" component={BookingList} />
              <Route path="/add-booking" component={AddBooking} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
