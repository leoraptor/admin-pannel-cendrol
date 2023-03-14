import axios from "axios";

const axiosInterceptor = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosInterceptor.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Content-type"] = "application/json;charset=utf-8";
    config.headers["authtoken"] = process.env.REACT_APP_CUSTOM_TOKEN;
    config.headers["usertype"] = process.env.REACT_APP_USER_TYPE;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.log("Error status", error.response.status);
      console.log("Error data", error.response.data);
      console.log("Error headers", error.response.headers);
    } else {
      console.log("Error message", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInterceptor;
