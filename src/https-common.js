import axios from "axios";

export default axios.create({
  baseURL: "https://52.206.78.118",
  //baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json"
  }
});