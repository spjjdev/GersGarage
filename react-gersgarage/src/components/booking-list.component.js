import React, { Component } from "react";
import BookingDataService from "../services/booking.service";
import { Link } from "react-router-dom";

export default class BookingList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchBookingId = this.onChangeSearchBookingId.bind(this);
    this.retrieveBookingss = this.retrieveBookings.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveBooking = this.setActiveBooking.bind(this);
    this.searchBookingId = this.searchBookingId.bind(this);

    this.state = {
      booking: [],
      currentBooking: null,
      currentIndex: -1,
      searchBookingId: "",
    };
  }

  componentDidMount() {
    this.retrieveBookings();
  }

  onChangeBookingId(e) {
    const searchBookingId = e.target.value;

    this.setState({
      searchBookingId: searchBookingId,
    });
  }

  retrieveBookings() {
    BookingDataService.getAll()
      .then((response) => {
        this.setState({
          bookings: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveBookings();
    this.setState({
      currentBooking: null,
      currentIndex: -1,
    });
  }

  setActiveBooking(booking, index) {
    this.setState({
      currentBooking: booking,
      currentIndex: index,
    });
  }

 

  searchBooking() {
    BookingDataService.findByBookingId(this.state.searchBookingId)
      .then((response) => {
        this.setState({
          bookings: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const {
      searchBookingId,
      bookings,
      currentBooking,
      currentIndex,
    } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by bookingId"
              value={searchBookingId}
              onChange={this.onChangeSearchBookingId}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchBookinId}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h4>Booking List</h4>

          <ul className="list-group">
            {bookings &&
              bookings.map((booking, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveBooking(booking, index)}
                  key={index}
                >
                  {booking.bookingId}
                </li>
              ))}
          </ul>

         
        </div>

        <div className="col-md-6">
          {currentBooking ? (
            <div>
              <h4>Booking</h4>
              <div>
                <label>
                  <strong>Bookin ID:</strong>
                </label>{" "}
                {currentBooking.bookingId}
              </div>
              <div>
                <label>
                  <strong>Time/Date:</strong>
                </label>{" "}
                {currentBooking.timeDate}
              </div>
              <div>
                <label>
                  <strong>Mechanic:</strong>
                </label>{" "}
                {currentBooking.mechanic}
              </div>
              <div>
                <label>
                  <strong>Booking Type:</strong>
                </label>{" "}
                {currentBooking.bookingType}
              </div>
              <div>
                <label>
                  <strong>Vehicle:</strong>
                </label>{" "}
                {currentBooking.vehicle}
              </div>

              <Link
                to={"/bookings/" + currentBooking.bookingId}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Booking...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}