import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true, // supaya cookie refreshToken dikirim
});

// Request Interceptor → Tambah Access Token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor → Handle 401 & Refresh
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Kalau error karena token expired
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/refresh-token")
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.get(`${API_URL}/instagram/auth/refresh-token`, {
          withCredentials: true,
        });

        const newAccessToken = res.data.accessToken;
        localStorage.setItem("authToken", newAccessToken);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return apiClient(originalRequest); // Coba ulang request pakai token baru
      } catch (refreshError) {
        // Jangan redirect di sini, cukup buang token & beri tahu caller
        localStorage.removeItem("authToken");
        return Promise.reject({ ...refreshError, isAuthError: true });
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
