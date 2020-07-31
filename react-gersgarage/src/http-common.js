// code from https://bezkoder.com/react-crud-web-api/

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/",
  headers: {
    "Content-type": "application/json",
  },
});
