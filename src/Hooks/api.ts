import axios from "axios";
import { logOut } from "./authAPI";

// Create an instance of axios
const api = axios.create({
  // baseURL: "http://localhost:7000/api",0
  // baseURL: "http://172.86.113.70:7000/api",
  baseURL: "https://api.daeta.xyz/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
*/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      logOut();
    }
    return Promise.reject(err);
  }
);

export default api;
