import React, { Component } from "react";
import MechanicDataService from "../services/mechanic.service";
import { Link } from "react-router-dom";

export default class MechanicList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchMechanicId = this.onChangeSearchMechanicId.bind(this);
    this.retrieveMechanics = this.retrieveMechanics.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveMechanic = this.setActiveMechanic.bind(this);
    this.searchMechanic = this.searchMechanic.bind(this);

    this.state = {
      mechanic: [],
      currentMechanic: null,
      currentIndex: -1,
      searchMechanic: "",
    };
  }

  componentDidMount() {
    this.retrieveMechanics();
  }

  onChangeSearchMechanicId(e) {
    const searchMechanic = e.target.value;

    this.setState({
      searchMechanic: searchMechanic,
    });
  }

  retrieveMechanics() {
    MechanicDataService.getAll()
      .then((response) => {
        this.setState({
          mechanics: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveMechanics();
    this.setState({
      currentMechanic: null,
      currentIndex: -1,
    });
  }

  setActiveMechanic(mechanic, index) {
    this.setState({
      currentMechanic: mechanic,
      currentIndex: index,
    });
  }

  searchMechanic() {
    MechanicDataService.findByMechanicId(this.state.searchMechanic)
      .then((response) => {
        this.setState({
          mechanics: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchMechanic,
      mechanics,
      currentMechanic,
      currentIndex,
    } = this.state;
    console.log(mechanics);

    return (
      <div className="list row">
        

        <div className="col-md-6">
          <h4>Mechanic List</h4>

          <ul className="list-group">
            {mechanics &&
              mechanics.map((mechanic, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveMechanic(mechanic, index)}
                  key={index}
                >
                  {mechanic.first_name +" "+mechanic.last_name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentMechanic ? (
            <div>
              <h4>Mechanic</h4>
              <div>
                <label>
                  <strong>First Name:</strong>
                </label>{" "}
                {currentMechanic.first_name}
              </div>
              <div>
                <label>
                  <strong>Last Name:</strong>
                </label>{" "}
                {currentMechanic.last_name}
              </div>
              <div>
                <label>
                  <strong>Phone Number:</strong>
                </label>{" "}
                {currentMechanic.phone_num}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentMechanic.email}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentMechanic.address}
              </div>
              

              
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Mechanic...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}