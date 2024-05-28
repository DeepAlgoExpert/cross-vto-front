import axios from "axios";

export default axios.create({
  baseURL: "https://54.83.136.252",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});