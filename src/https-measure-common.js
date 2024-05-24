import axios from "axios";

export default axios.create({
  baseURL: "https://52.207.54.44",
  headers: {
    "Content-type": "application/json"
  }
});