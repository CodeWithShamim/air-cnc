import axios from "axios";

export const link = axios.create({
  baseUrl: "http://localhost:5000",
});
