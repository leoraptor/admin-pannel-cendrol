import axios from "axios";

const SERVER_URL = "https://localserver.cendrol.com/cendrolpeopledev/api";

const axiosClientInterceptors = axios.create({
  SERVER_URL,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    authtoken: "Y3VzdG9tdG9rZW50b3Byb3RlY3RhcGlyb3V0ZXM=",
    usertype: "admin",
  },
});
export default axiosClientInterceptors;
