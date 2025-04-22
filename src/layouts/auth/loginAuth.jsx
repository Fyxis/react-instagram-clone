/* eslint-disable no-unused-vars */
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import loginApi from "../../api/loginApi";
import { useApp } from "../../context/loadingContext";

const LoginAuth = () => {
    const { isAuthenticated, login } = useAuth();
    const { setIsNavigating } = useApp()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/home", { replace: true });
        }
    }, [isAuthenticated, navigate, location]);

    const [credentials, setCredentials] = useState({
        identifier: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setIsNavigating(true)
            loginApi(credentials, login, navigate, "/home")
        } catch (error) {
            alert('Login failed. Please try again.')
        } finally {
            setTimeout(() => {
                setIsNavigating(false)
            }, 1500)
        }
    };
    return (
        <>
            <div className="bg-[#03050c]">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex flex-col gap-4 w-[400px] md:w-[500px] h-min border border-gray-500 items-center justify-center">
                        <div id="title" className="mt-10 mb-3">
                            <p className="text-white text-4xl font-semibold">
                                ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪
                            </p>
                        </div>
                        <form
                            onSubmit={handleLogin}
                            className="flex flex-col gap-1 w-[60%] mb-10"
                        >
                            <div className="relative z-0 w-full mb-3 group">
                                <input
                                    type="text"
                                    name="identifier"
                                    id="main-input"
                                    className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 pt-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                    value={credentials.identifier}
                                    onChange={handleChange}
                                    autoFocus
                                    required
                                />
                                <label
                                    htmlFor="main-input"
                                    className="w-full peer-focus:font-medium absolute text-sm md:text-md text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-90 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
                                >
                                    Phone number, username, or email
                                </label>
                            </div>
                            <div className="flex flex-col mb-5">
                                <div className="relative z-0 w-full mb-3 group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password-input"
                                        className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 pt-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label
                                        htmlFor="password-input"
                                        className="w-full peer-focus:font-medium absolute text-sm md:text-md text-gray-400 duration-300 transform -translate-y-5 scale-75 top-4 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-90 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
                                    >
                                        Password
                                    </label>
                                </div>
                                <Link
                                    to="/register"
                                    className="text-blue-400 text-xs md:text-md"
                                >
                                    {" "}
                                    Don't have a account?{" "}
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-sky-500 text-sm md:text-md hover:cursor-pointer text-white rounded-md font-semibold py-2"
                            >
                                Log in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginAuth;
