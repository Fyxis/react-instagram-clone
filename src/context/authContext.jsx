/* eslint-disable no-unused-vars */
// authContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Fungsi untuk decode token
const decodeToken = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (error) {
    return null;
  }
};

// Fungsi cek expired token
const isTokenExpired = (token) => {
  const decoded = decodeToken(token);
  if (!decoded?.exp) return true;
  return Date.now() >= decoded.exp * 1000;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fungsi utama untuk cek status auth
  const checkAuth = () => {
    const token = localStorage.getItem('authToken');
    if (!token || isTokenExpired(token)) {
      logout();
      return false;
    }
    return true;
  };

  // Login function
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);

    // Set auto-check 1 menit sebelum expired
    const decoded = decodeToken(token);
    if (decoded?.exp) {
      const expiresIn = decoded.exp * 1000 - Date.now() - 60000; // 1 menit sebelum expired
      setTimeout(() => checkAuth(), expiresIn);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  // Cek auth saat pertama load
  useEffect(() => {
    if (checkAuth()) setIsAuthenticated(true);
  }, []);

  // Axios interceptor untuk cek token tiap request
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (isAuthenticated) {
          const token = localStorage.getItem('authToken');
          if (isTokenExpired(token)) {
            logout();
            window.location.href = '/login';
            return Promise.reject('Token expired');
          }
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
