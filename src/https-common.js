import axios from "axios";

export default axios.create({
  baseURL: "https://54.210.51.189",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});