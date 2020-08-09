// code from https://bezkoder.com/react-crud-web-api/

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Customer from "./components/customer.component";
import CustomerList from "./components/customer-list.component";
import AddCustomer from "./components/add-customer.component";
import Booking from "./components/booking.component";
import BookingList from "./components/booking-list.component";
import AddBooking from "./components/add-booking.component";
import VehicleList from "./components/vehicle_list.component";
import AddVehicle from "./components/add-vehicle.component";
import SuppliesList from "./components/supplies-list.component";
import AddSupply from "./components/add-supply.component";
import MechanicList from "./components/mechanic-list.component";
import InvoiceList from "./components/invoice-list.component";
import CarMake from "./components/carMake.component";
import Home from "./components/home";

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticated(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   },
// };

// const Public = () => <h3>Public</h3>;
// const Protected = () => <h3>Protected</h3>;

// class Login extends React.Component {
//   state = {
//     redirectedToReferrer: false,
//   };
//   login = () => {
//     fakeAuth.authenticated(() => {
//       this.setState(() => ({
//         redirectedToReferrer: true,
//       }));
//     });
//   };
//   render() {
//     const { redirectedToReferrer } = this.state;
//     if (redirectedToReferrer === true) {
//       return <Redirect to="/" />;
//     }
//     return (
//       <div>
//         <p>You must log in to view this page</p>
//         <button onClick={this.login}>Login</button>
//       </div>
//     );
//   }
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       fakeAuth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login " />
//       )
//     }
//   />
// );

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/home" className="navbar-brand">
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
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/bookings"} className="nav-link">
                  Bookings
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-booking"} className="nav-link">
                  Make A Booking
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/vehicles"} className="nav-link">
                  Vehicles
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-vehicle"} className="nav-link">
                  Add Vehicle
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/supplies"} className="nav-link">
                  Supplies
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-supply"} className="nav-link">
                  Add Supply
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Assign Mechanic
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/mechanics"} className="nav-link">
                  Mechanics
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/invoice"} className="nav-link">
                  Invoices
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
              <Route path="/customers/:email" component={Customer} />
              <Route path="/bookings/{booking_id}" component={Booking} />
              <Route exact path={"/bookings"} component={BookingList} />
              <Route exact path="/add-booking" component={AddBooking} />
              <Route exact path={"/vehicles"} component={VehicleList} />
              <Route exact path="/add-vehicle" component={AddVehicle} />
              <Route exact path={"/supplies"} component={SuppliesList} />
              <Route exact path="/add-supply" component={AddSupply} />
              <Route
                exact
                path={"/mechanics"}
                component={MechanicList}
              />
              <Route exact path={"/invoice"} component={InvoiceList} />
              <Route path="/home" component={Home} />
              {/* <Route path="/login" component={Login} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
