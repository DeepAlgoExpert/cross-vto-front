import axios from "axios";

export default axios.create({
  baseURL: "https://100.25.156.233",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});