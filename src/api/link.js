import axios from "axios";

export const link = axios.create({
  baseURL: "https://aircnc100.herokuapp.com",
});
