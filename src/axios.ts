import axios, { AxiosInstance } from "axios";

const token = JSON.parse(
  localStorage.getItem("user_data") as string
)?.userTocken;

const Axios: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/", //
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
  withCredentials: false,
});

export default Axios;
