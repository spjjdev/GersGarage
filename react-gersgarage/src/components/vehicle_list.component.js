import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
import { Link } from "react-router-dom";

export default class VehicleList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchReg = this.onChangeSearchReg.bind(this);
    this.retrieveVehicles = this.retrieveVehicles.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveVehicle = this.setActiveVehicle.bind(this);
    this.searchReg = this.searchReg.bind(this);

    this.state = {
      vehicle: [],
      currentVehicle: null,
      currentIndex: -1,
      searchReg: "",
    };
  }

  componentDidMount() {
    this.retrieveVehicles();
  }

  onChangeSearchReg(e) {
    const searchReg = e.target.value;

    this.setState({
      searchReg: searchReg,
    });
  }

  retrieveVehicles() {
    VehicleDataService.getAll()
      .then((response) => {
        this.setState({
          vehicles: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveVehicles();
    this.setState({
      currentVehicle: null,
      currentIndex: -1,
    });
  }

  setActiveVehicle(vehicle, index) {
    this.setState({
      currentVehicle: vehicle,
      currentIndex: index,
    });
  }

  searchReg() {
    VehicleDataService.findByReg(this.state.searchReg)
      .then((response) => {
        this.setState({
          vehicles: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchReg,
      vehicles,
      currentVehicle,
      currentIndex,
    } = this.state;
    console.log(vehicles);

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Registration"
              value={searchReg}
              onChange={this.onChangeSearchReg}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchReg}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Vehicle List</h4>

          <ul className="list-group">
            {vehicles &&
              vehicles.map((vehicle, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveVehicle(vehicle, index)}
                  key={index}
                >
                  {vehicle.reg}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentVehicle ? (
            <div>
              <h4>Vehicle</h4>
              <div>
                <label>
                  <strong>Make:</strong>
                </label>{" "}
                {currentVehicle.make}
              </div>
              <div>
                <label>
                  <strong>Model:</strong>
                </label>{" "}
                {currentVehicle.model}
              </div>
              <div>
                <label>
                  <strong>Colour:</strong>
                </label>{" "}
                {currentVehicle.colour}
              </div>
              <div>
                <label>
                  <strong>Registration:</strong>
                </label>{" "}
                {currentVehicle.reg}
              </div>
              <div>
                <label>
                  <strong>Engine Type:</strong>
                </label>{" "}
                {currentVehicle.engine}
              </div>
              
              <div>
                <label>
                  <strong>Owner:</strong>
                </label>{" "}
                {currentVehicle.owner.email}
              </div>

              <Link
                to={"/vehicles/" + currentVehicle.reg}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Vehicle...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}