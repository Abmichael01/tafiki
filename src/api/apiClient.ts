// src/api/apiClient.ts
import axios from "axios";
import useAuthStore from "@/stores/authStore";

const API_BASE_URL = "https://foo-dhybrid-backend.onrender.com"; 

// Create Axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor - Inject access token from Zustand store
apiClient.interceptors.request.use(
  (config) => {
    const { access } = useAuthStore.getState();
    if (access) {
      config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;