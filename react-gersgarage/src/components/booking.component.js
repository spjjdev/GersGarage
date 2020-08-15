import React, { Component } from "react";
import BookingDataService from "../services/booking.service";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.onChangeBookingId = this.onChangeBookingId.bind(this);
    this.onChangeTimeDate = this.onChangeTimeDate.bind(this);
    this.onChangeMechanic = this.onChangeMechanic.bind(this);
    this.onChangeBookingType = this.onChangeBookingType.bind(this);
    this.onChangeVehicle = this.onChangeVehicle.bind(this);
   this.getBooking = this.getBooking.bind(this);
    this.updateBooking = this.updateBooking.bind(this);
    this.deleteBooking = this.deleteBooking.bind(this);

    this.state = {
      currentBooking:{
      booking_id: "",
      timedate: "",
      mechanic: "",
      type: "",
      vehicle: "",
    },
    message: ""
  };
}
  componentDidMount() {
    this.getBooking(this.props.match.params.id);
  }

  onChangeBookingId(e) {
    const booking_id = e.target.value;

    this.setState(function(prevState){
      return{
      currentBooking: {
        ...prevState.currentBooking,
        booking_id: booking_id,
      }
    };
  });
  }
 
  onChangeTimeDate(e) {
    const timedate = e.target.value;

    this.setState(function (prevState) {
      return {
        currentBooking: {
          ...prevState.currentBooking,
          timedate: timedate,
        },
      };
    });
  }
  onChangeMechanic(e) {
    const mechanic = e.target.value;

    this.setState((prevState) => ({
      currentBooking: {
        ...prevState.currentBooking,
        mechanic: mechanic,
      },
    }));
  }
  onChangeBookingType(e) {
    const type = e.target.value;

    this.setState((prevState) => ({
      currentBooking: {
        ...prevState.currentBooking,
        type: type,
      },
    }));
  }
  onChangeVehicle(e) {
    const vehicle = e.target.value;

    this.setState((prevState) => ({
      currentVehicle: {
        ...prevState.currentBooking,
        vehicle: vehicle,
      },
    }));
  }
  getBooking(booking_id) {
    BookingDataService.get(booking_id)
      .then(response => {
        this.setState({
          currentBooking: response.data
        });
        console.log(response.data);
      })
      .catch(e => { 
        console.log(e);
      });
  }
  updateBooking() {
    BookingDataService.update(
      this.state.currentBooking.booking_id,
      this.state.currentBooking
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          message: "The booking was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteBooking() {
    BookingDataService.delete(this.state.currentBooking.booking_id)
      .then((response) => {
        console.log(response.data);
        this.props.history.push("/bookings");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentBooking } = this.state;

    return (
      
      <div>
        {currentBooking ? (
          <div className="edit-form">
            <h4>Booking</h4>
            <form>
              <div className="form-group">
                <label htmlFor="booking_id">Booking ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="booking_id"
                  value={currentBooking.booking_id}
                  onChange={this.onChangeBookingId}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timedate">Time/Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="timedate"
                  value={currentBooking.timedate}
                  onChange={this.onChangeTimeDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mechanic">Mechanic</label>
                <input
                  type="text"
                  className="form-control"
                  id="mechanic"
                  value={currentBooking.mechanic.mechanic_id}
                  onChange={this.onChangeMechanic}
                />
              </div>
              <div className="form-group">
                <label htmlFor="type">Booking Type</label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={currentBooking.type.description}
                  onChange={this.onChangeBookingType}
                />
              </div>
              <div className="form-group">
                <label htmlFor="vehicle">Vehicle</label>
                <input
                  type="text"
                  className="form-control"
                  id="vehicle"
                  value={currentBooking.vehicle.reg}
                  onChange={this.onChangeVehicle}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteBooking}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateBooking}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Booking...</p>
          </div>
        )}
      </div>
    );
  }
}
