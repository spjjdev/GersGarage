// code from https://bezkoder.com/react-crud-web-api/

import http from "../http-common";



class SuppliesDataService {
  getAll() {
    return http.get("/supplies");
  }

  get(supplies_id) {
    return http.get(`/supplies/${supplies_id}`);
  }

  create(data) {
    return http.post("/add-supplies", data);
  }

  update(supplies_id, data) {
    return http.put(`/supplies/${supplies_id}`, data);
  }

  delete(supplies_id) {
    return http.delete(`/supplies/${supplies_id}`);
  }

  deleteAll() {
    return http.delete(`/supplies`);
  }

  findBySuppliesId(supplies_id) {
    return http.get(`/supplies?supplies_id=${supplies_id}`);
  }
}

export default new SuppliesDataService();