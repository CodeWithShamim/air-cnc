import axios from "axios";

export const link = axios.create({
  baseURL: "http://localhost:5000",
});
