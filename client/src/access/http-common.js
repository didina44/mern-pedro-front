import axios from "axios";

export default axios.create({
  baseURL: "https://mern-pedro.elasistefan.repl.co",
  headers: {
    "Content-type": "application/json"
  }
});