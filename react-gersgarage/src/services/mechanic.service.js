// code from https://bezkoder.com/react-crud-web-api/

import http from "../http-common";

class MechanicDataService {
  getAll() {
    return http.get("/mechanics");
  }

  get(mechanic_id) {
    return http.get(`/mechanics/${mechanic_id}`);
  }

  create(data) {
    return http.post("/add-mechanic", data);
  }

  update(mechanic_id, data) {
    return http.put(`/customers/${mechanic_id}`, data);
  }

  delete(mechanic_id) {
    return http.delete(`/mechanics/${mechanic_id}`);
  }

  deleteAll() {
    return http.delete(`/mechanics`);
  }

  findByMechanicId(mechanic_id) {
    return http.get(`/mechanics?mechanic_id=${mechanic_id}`);
  }
}

export default new MechanicDataService();
