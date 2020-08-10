import React, { Component } from "react";
import VehicleDataService from "../services/vehicle.service";

export default class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.onChangeMake = this.onChangeMake.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
    this.onChangeColour = this.onChangeColour.bind(this);
    this.onChangeReg = this.onChangeReg.bind(this);
    this.onChangeOwner = this.onChangeOwner.bind(this);
    this.onChangeEngine = this.onChangeEngine.bind(this);
    this.getVehicle = this.getVehicle.bind(this);
    this.updateVehicle = this.updateVehicle.bind(this);
    this.deleteVehicle = this.deleteVehicle.bind(this);
    
    this.state = {
        currentVehicle:{
        make: "",
        model: "",
        colour: "",
        reg: "",
        owner: "",
        engine: "",
    },
    message: ""
  };
    
  }

  componentDidMount() {
    this.getVehicle(this.props.match.params.reg);
  }

  onChangeReg(e) {
    const reg = e.target.value;

    this.setState(function(prevState) {
      return {
        currentVehicle: {
          ...prevState.currentVehicle,
          reg : reg
        }
      };
    });
  }
  onChangeMake(e) {
    const make = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        make : make
      }
    }));
  }
  onChangeModel(e) {
    const model = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        model : model
      }
    }));
  }
  onChangeColour(e) {
    const colour = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
          colour: colour
      }
    }));
  }
  onChangeOwner(e) {
    const owner = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        owner : owner
      }
    }));
  }
  onChangeEngine(e) {
    const engine = e.target.value;
    
    this.setState(prevState => ({
      currentVehicle: {
        ...prevState.currentVehicle,
        engine : engine
      }
    }));
  }
  

  getVehicle(reg) {
    VehicleDataService.get(reg)
      .then(response => {
        this.setState({
          currentVehicle: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateVehicle() {
    VehicleDataService.update(
      this.state.currentVehicle.reg,
      this.state.currentVehicle
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The vehicle was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteVehicle() {    
    VehicleDataService.delete(this.state.currentVehicle.reg)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/vehicles')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentVehicle} = this.state;

    return (
      <div>
        {currentVehicle ? (
          <div className="edit-form">
            <h4>Vehicle</h4>
            <form>
              <div className="form-group">
                <label htmlFor="make">Make</label>
                <input
                  type="text"
                  className="form-control"
                  id="make"
                  value={currentVehicle.make}
                  onChange={this.onChangeMake}
                />
              </div>
              <div className="form-group">
                <label htmlFor="model">Model</label>
                <input
                  type="text"
                  className="form-control"
                  id="model"
                  value={currentVehicle.model}
                  onChange={this.onChangeModel}
                />
              </div>
              <div className="form-group">
                <label htmlFor="colour">Colour</label>
                <input
                  type="text"
                  className="form-control"
                  id="colour"
                  value={currentVehicle.colour}
                  onChange={this.onChangeColour}
                />
              </div>
              <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <input
                  type="text"
                  className="form-control"
                  id="owner"
                  value={currentVehicle.owner.email}
                  onChange={this.onChangeOwner}
                />
              </div>
              <div className="form-group">
                <label htmlFor="engine">Engine Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="engine"
                  value={currentVehicle.engine}
                  onChange={this.onChangeEngine}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg">Registration</label>
                <input
                  type="text"
                  className="form-control"
                  id="reg"
                  value={currentVehicle.reg}
                  onChange={this.onChangeReg}
                />
              </div>

            </form>
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteVehicle}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateVehicle}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Vehicle...</p>
          </div>
        )}
      </div>
    );
  }
}
