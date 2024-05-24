import axios from "axios";

export default axios.create({
  baseURL: "https://100.26.250.115",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});