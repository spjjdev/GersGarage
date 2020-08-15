// code from https://bezkoder.com/react-crud-web-api/
import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";
import axios from "axios";

export default class AddVehicle extends Component {
  constructor(props) {
    super(props);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeColour = this.onChangeColour.bind(this);
    this.onChangeReg = this.onChangeReg.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeEngine = this.onChangeEngine.bind(this);
    this.saveVehicle = this.saveVehicle.bind(this);
    this.newVehicle = this.newVehicle.bind(this);

    this.state = {
      make: "",
      model: "",
      colour: "",
      reg: "",
      owner: "",
      engine: "",
      submitted: false,
      // MakeData: [],
    };
  }
  // componentDidMount() {
  //   axios
  //     .get("http://api.edmunds.com/api/vehicle/v2/makes")
  //     .then((response) => {
  //       console.log(response.data);
  //       this.setState({
  //         MakeData: response.data,
  //       });
  //     });
  // }
  onChangeMake(e) {
    this.setState({
      make: e.target.value,
    });
    console.log("changing make");
  }
  onChangeModel(e) {
    this.setState({
      model: e.target.value,
    });
  }
  onChangeColour(e) {
    this.setState({
      colour: e.target.value,
    });
  }
  onChangeReg(e) {
    this.setState({
      reg: e.target.value,
    });
  }
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value,
    });
  }
  onChangeEngine(e) {
    this.setState({
      engine: e.target.value,
    });
  }

  saveVehicle() {
    var data = {
      make: this.state.make,
      model: this.state.model,
      colour: this.state.colour,
      reg: this.state.reg,
      owner: { email: this.state.owner },
      engine: this.state.engine,
    };
    console.log("hello");

    VehicleDataService.create(data)
      .then((response) => {
        this.setState({
          make: response.data.make,
          model: response.data.model,
          colour: response.data.colour,
          reg: response.data.reg,
          owner: response.data.owner,
          engineType: response.data.engine,
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newVehicle() {
    this.setState({
      make: "",
      model: "",
      colour: "",
      reg: "",
      owner: "",
      engine: "",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newVehicle}>
              Add
            </button>
          </div>
        ) : (
          <div>
            {/* <div className="form-group dropdn">
              <select
                className="form-control"
                name="make"
                value={this.state.make}
                // onChange={this.ChangeteState}
              >
                <option>Select Make</option>
                {this.state.MakeData.map((e, key) => {
                  return (
                    <option key={key} value={e.make}>
                      {e.MakeName}
                    </option>
                  );
                })}
              </select>{" "}
            </div> */}
            <div className="form-group">
              <label htmlFor="make">Make</label>
              <input
                type="text"
                className="form-control"
                id="make"
                required
                value={this.state.make}
                onChange={this.onChangeMake}
                name="make"
              />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                type="text"
                className="form-control"
                id="model"
                required
                value={this.state.model}
                onChange={this.onChangeModel}
                name="model"
              />
            </div>
            <div className="form-group">
              <label htmlFor="colour">Colour</label>
              <input
                type="text"
                className="form-control"
                id="colour"
                required
                value={this.state.colour}
                onChange={this.onChangeColour}
                name="colour"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg">Registration</label>
              <input
                type="text"
                className="form-control"
                id="reg"
                required
                value={this.state.reg}
                onChange={this.onChangeReg}
                name="reg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="engine">Engine Type</label>
              <input
                type="text"
                className="form-control"
                id="engine"
                required
                value={this.state.engine}
                onChange={this.onChangeEngine}
                name="engine"
              />
            </div>
            <div className="form-group">
              <label htmlFor="owner">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="owner"
                required
                value={this.state.owner.email}
                onChange={this.onChangeOwner}
                name="owner"
              />
            </div>

            <button onClick={this.saveVehicle} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
