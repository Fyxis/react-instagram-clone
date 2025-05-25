/* eslint-disable no-unused-vars */
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const loginApi = async (credentials, login, navigate, navigateTo) => {
    try {
        const response = await axios.post(
            `${API_URL}/instagram/auth/login`,
            credentials
        );

        if (response.status === 200) {
            // Simpan token ke localStorage
            localStorage.setItem("authToken", response.data.data.accessToken);

            // Update context state
            login(response.data.data.accessToken);

            // Navigasi
            navigate(navigateTo, { replace: true });
        }
    } catch (error) {
        alert("Login failed. Please try again.");
    }
};

export default loginApi;
