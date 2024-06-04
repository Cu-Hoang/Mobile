import axios from "axios";
import * as SecureStore from "expo-secure-store";

const accessToken = SecureStore.getItem('accessToken')
const instance = axios.create({
  baseURL: "http://10.0.121.56:3000/api/v1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    authorization: accessToken
  },
});

instance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  async (response) => {
    console.log("Sau khi response");
    const config = response.config;
    if (
      config.url.indexOf("/auth/login") >= 0 ||
      config.url.indexOf("/auth/register") >= 0 ||
      config.url.indexOf("/auth/logout") >= 0 ||
      config.url.indexOf("/auth/refresh-token") >=0
    ) {
      return response;
    }
    const { status, msg } = response.data;
    console.log(response.data);
    if (status && status === 401) {
      if (msg && msg === "jwt expired") {
        try {
          console.log("Khi token het han");
          const refreshToken = await SecureStore.getItemAsync("refreshToken");
          console.log(refreshToken);
          const result = await instance({
            method: "POST",
            url: "auth/refresh-token",
            data: { refreshToken: refreshToken },
          });
           await SecureStore.setItem("accessToken", result.data.accessToken);
           await SecureStore.setItem("refreshToken",result.data.refreshToken);
           config.headers.authorization = `Bearer ${result.data.accessToken}`;
        } catch (error) {
          console.log(error);
        }
      }
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
