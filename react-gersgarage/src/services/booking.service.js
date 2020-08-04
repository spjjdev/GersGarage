
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
}
export default new BookingDataService();