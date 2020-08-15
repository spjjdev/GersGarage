// code from https://bezkoder.com/react-crud-web-api/
import React, { Component } from "react";
import BookingDataService from "../services/booking.service";

export default class AddBooking extends Component {
  constructor(props) {
    super(props);
    // this.onChangeBookingId = this.onChangeBookingId.bind(this);
    this.onChangeTimedate = this.onChangeTimedate.bind(this);
    this.onChangeMechanic = this.onChangeMechanic.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeVehicle = this.onChangeVehicle.bind(this);
    this.saveBooking = this.saveBooking.bind(this);
    this.newBooking = this.newBooking.bind(this);

    this.state = {
      //   bookingId: " ",
      timedate: "",
      mechanic: "",
      type: "",
      vehicle: "",
    };
  }
  //   onChangeBookingId(e) {
  //     this.setState({
  //       bookingId: e.target.value,
  //     });
  //   }
  onChangeTimedate(e) {
    this.setState({
      timedate: e.target.value,
    });
  }
  onChangeMechanic(e) {
    this.setState({
      mechanic: e.target.value,
    });
  }
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  onChangeVehicle(e) {
    this.setState({
      vehicle: e.target.value,
    });
  }

  saveBooking() {
    var data = {
      //   bookingId: this.state.bookingId,
      timedate: this.state.timedate,
      mechanic: { mechanic_id: this.state.mechanic },
      type: { booking_type_id: this.state.type },
      vehicle: { reg: this.state.vehicle },
    };

    BookingDataService.create(data)
      .then((response) => {
        this.setState({
          //   bookingId: response.data.bookingId,
          timedate: response.data.timedate,
          mechanic: response.data.mechanic,
          type: response.data.type,
          vehicle: response.data.vehicle,
          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newBooking() {
    this.setState({
      //   bookingId: "",
      timedate: "",
      type: "",
      mechanic: "",
      vehicle: "",
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBooking}>
              Add
            </button>
          </div>
        ) : (
          <div>
            {/* <div className="form-group">
              <label htmlFor="booking_id">Booking ID</label>
              <input
                type="text"
                className="form-control"
                id="booking_id"
                required
                value={this.state.bookingId}
                onChange={this.onChangeBookingId}
                name="booking_id"
              />
            </div> */}

            <div className="form-group">
              <label htmlFor="timedate">Time/Date</label>
              <input
                type="text"
                className="form-control"
                id="timedate"
                required
                placeholder="hh:mm, dd/mm/yy"
                value={this.state.timedate}
                onChange={this.onChangeTimedate}
                name="timedate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mechanic_id">Mechanic ID</label>
              <input
                type="text"
                className="form-control"
                id="mechanic_id"
                required
                placeholder="enter mechanic ID (1-5)"
                value={this.state.mechanic.mechanic_id}
                onChange={this.onChangeMechanic}
                name="timedate"
              />
            </div>
            <div className="form-group">
              <label htmlFor="booking_type_id">Booking Type</label>
              <input
                type="text"
                className="form-control"
                id="booking_type_id"
                required
                placeholder="enter booking type ID (1-4)"
                value={this.state.type.booking_type_id}
                onChange={this.onChangeType}
                name="booking_type_id"
              />
            </div>
            <div className="form-group">
              <label htmlFor="reg">Vehicle</label>
              <input
                type="text"
                className="form-control"
                id="reg"
                required
                placeholder="enter registration"
                value={this.state.vehicle.reg}
                onChange={this.onChangeVehicle}
                name="reg"
              />
            </div>

            <button onClick={this.saveBooking} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
