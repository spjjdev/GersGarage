// code from https://bezkoder.com/react-crud-web-api/

import http from "../http-common";



class InvoiceDataService {
  getAll() {
    return http.get("/invoice");
  }

  get(invoice_id) {
    return http.get(`/invoice/${invoice_id}`);
  }

  create(data) {
    return http.post("/add-invoice", data);
  }

  update(invoice_id, data) {
    return http.put(`/invoice/${invoice_id}`, data);
  }

  delete(invoice_id) {
    return http.delete(`/invoice/${invoice_id}`);
  }

  deleteAll() {
    return http.delete(`/invoice`);
  }

  findByInvoiceId(invoice_id) {
    return http.get(`/invoice?invoice_id=${invoice_id}`);
  }
}

export default new InvoiceDataService();
