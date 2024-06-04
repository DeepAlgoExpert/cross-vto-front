import axios from "axios";

export default axios.create({
  baseURL: "https://52.3.242.218",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});