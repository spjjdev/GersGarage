
import http from "../http-common";



class BookingDataService {
  getAll() {
    return http.get("/bookings");
  }

  get(booking_id) {
    return http.get(`/bookings/${booking_id}`);
  }

  findByBookingId(booking_id) {
    return http.get(`/bookings?bookingId=${booking_id}`);
}
create(data) {
  return http.post("/add-booking", data);
}
}
export default new BookingDataService();