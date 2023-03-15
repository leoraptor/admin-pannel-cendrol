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

const errorHandler = async (error) => {
  const status = error.response ? error.response.status : null;
  const refereshToken = localStorage.getItem("token");

  if (refereshToken === null || status === 401) {
    window.location.href = "/";
  }
  // else if (status === 401) {
  //   // will loop if refreshToken returns 401
  //   try {
  //     const response = await axios.post(`${SERVER_URL}/refreshtoken`, {
  //       refreshToken: refereshToken,
  //     });
  //     localStorage.setItem("token", response.data.token);
  //     error.response.config.headers["x-auth-token"] = response.data.token;
  //     return await axiosClientInterceptors(error.response.config);
  //   } catch (err) {
  //     window.location.href = "/";
  //   }
  // }

  return Promise.reject(error);
};

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
