import axios from 'axios';
import React from 'react'

const API_URL = import.meta.env.VITE_API_URL;

const loginApi = async (credentials, login, navigate, navigateTo) => {
    try {
        const response = await axios.post(
            `${API_URL}/instagram/auth/login`,
            credentials
        );

        if (response.status === 200) {
            // Simpan token ke localStorage
            localStorage.setItem("authToken", response.data.data.token);

            // Update context state
            login(response.data.data.token);

            // Navigasi
            navigate(navigateTo, { replace: true });
        }
    } catch (error) {
        console.error("Login failed:", error);
    }
}

export default loginApi
