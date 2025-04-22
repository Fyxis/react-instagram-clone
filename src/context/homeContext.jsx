import { createContext, useContext, useEffect, useState } from 'react';
import fetchDataByIdToken from '../api/fetchDataByIdToken';
import { useAuth } from './authContext';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { logout } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetchDataByIdToken();
                setUser(res.data?.data);
            } catch (err) {
                if (err.response?.status === 401) logout();
                else setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
