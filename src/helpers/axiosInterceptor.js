import axios from "axios";

const SERVER_URL = process.env.REACT_APP_BASE_URL;
const headers = {
  Authorization: "Bearer " + localStorage.getItem("token"),
  "Content-type": "application/json;charset=utf-8",
  authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
  usertype: "admin",
};

const axiosInterceptor = axios.create({
  baseURL: SERVER_URL,
  headers: headers,
});

export default axiosInterceptor;
