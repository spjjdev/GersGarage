import http from "../http-common";

class BookingDataService {
  getAll() {
    return http.get("/bookings");
  }

  get(booking_id) {
    return http.get(`/bookings/${booking_id}`);
  }

  create(data) {
    return http.post("/add-customer", data);
  }

  update(booking_id, data) {
    return http.put(`/bookings/${booking_id}`, data);
  }

  delete(booking_id) {
    return http.delete(`/bookings/${booking_id}`);
  }

  deleteAll() {
    return http.delete(`/bookings`);
  }

  findByEmail(booking_id) {
    return http.get(`/bookings?booking_id=${booking_id}`);
  }
}
export default new BookingDataService();
