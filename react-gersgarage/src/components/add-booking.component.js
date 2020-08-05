// code from https://bezkoder.com/react-crud-web-api/
import React, { Component } from "react";
import BookingDataService from "../services/booking.service";

export default class AddBooking extends Component {
  constructor(props) {
    super(props);
    // this.onChangeBookingId = this.onChangeBookingId.bind(this);
    this.onChangeTimeDate = this.onChangeTimeDate.bind(this);
    this.onChangeMechanicId = this.onChangeMechanicId.bind(this);
    this.onChangeBookingTypeId = this.onChangeBookingTypeId.bind(this);
    this.onChangeReg = this.onChangeReg.bind(this);
    this.saveBooking = this.saveBooking.bind(this);
    this.newBooking = this.newBooking.bind(this);

    this.state = {
    //   bookingId: " ",
      timeDate: " ",
      mechanicId: " ",
      bookingTypeId: " ",
      reg: " ",
      
    };
  }
//   onChangeBookingId(e) {
//     this.setState({
//       bookingId: e.target.value,
//     });
//   }
  onChangeTimeDate(e) {
    this.setState({
      timeDate: e.target.value,
    });
  }
  onChangeMechanicId(e) {
    this.setState({
      mechanicId: e.target.value,
    });
  }
  onChangeBookingTypeId(e) {
    this.setState({
      bookingTypeId: e.target.value,
    });
  }
  onChangeReg(e) {
    this.setState({
      reg: e.target.value,
    });
  }


  saveBooking() {
    var data = {
    //   bookingId: this.state.bookingId,
      timeDate     : this.state.timeDate,
      mechanicId   : this.state.mechanicId,
      bookingTypeId: this.state.bookingTypeId,
      reg          : this.state.reg,
      
    };

    BookingDataService.create(data)
      .then((response) => {
        this.setState({
        //   bookingId: response.data.bookingId,
          timeDate: response.data.timeDate,
          mechanicId: response.data.mechanicId,
          bookingTypeId: response.data.bookingTypeId,
          reg: response.data.reg,
          
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
      timeDate: "",
      bookingTypeId: "",
      mechanicId: "",
      reg: "",
     
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
                value={this.state.timeDate}
                onChange={this.onChangeTimeDate}
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
                value={this.state.mechanicId}
                onChange={this.onChangeMechanicId}
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
                value={this.state.bookingTypeId}
                onChange={this.onChangeBookingTypeId}
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
                value={this.state.reg}
                onChange={this.onChangeReg}
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