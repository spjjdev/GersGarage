// code from https://bezkoder.com/react-crud-web-api/

import http from "../http-common";



class VehicleDataService {
  getAll() {
    return http.get("/vehicles");
  }

  get(reg) {
    return http.get(`/vehicles/${reg}`);
  }

  create(data) {
    return http.post("/add-vehicle", data);
  }

  update(reg, data) {
    return http.put(`/vehicles/${reg}`, data);
  }

  delete(reg) {
    return http.delete(`/vehicles/${reg}`);
  }

  deleteAll() {
    return http.delete(`/vehicles`);
  }

  findByReg(reg) {
    return http.get(`/vehicles?reg=${reg}`);
  }
}

export default new VehicleDataService();
