import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/homeContext";
import { useApp } from "../../context/loadingContext";
import Image from "../image";
import logoutUser from "../../api/logout";
import suggestedAccount from "../../api/suggestedAccount";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
    const { user, loading, error } = useUser();
    const [suggestedAccounts, setSuggestedAccounts] = useState([]);
    const { setIsNavigating } = useApp();
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSuggested = async () => {
            try {
                const response = await suggestedAccount();
                if (response.status === 200) {
                    setSuggestedAccounts(response.data);
                } else {
                    throw new Error(response.statusText || "Failed to fetch");
                }
            } catch (err) {
                console.error("Error fetching suggested accounts:", err);
            }
        };

        fetchSuggested();
    }, []);

    const handleLogout = async () => {
        try {
            setIsNavigating(true);
            await logoutUser();
            navigate("/home");
        } catch (err) {
            console.error("Logout error:", err);
        } finally {
            setTimeout(() => {
                setIsNavigating(false);
            }, 1000);
            logout();
        }
    };

    const handleProfile = () => {
        navigate("/profile");
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="hidden lg:block lg:w-1/4 xl:w-2/4 lg:h-full">
            <div className="pt-6 overflow-y-hidden">
                <div className="flex flex-col gap-5 w-full lg:pr-11 xl:pr-20">
                    {/* USER PROFILE */}
                    <div className="flex justify-between items-center w-full h-full md:gap-6">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className="shrink-0 w-12 h-12">
                                <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                                    {user?.profile_picture ? (
                                        <Image
                                            src={user.profile_picture}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" strokeWidth="1.5"
                                                stroke="currentColor" className="w-6 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <h1
                                    className="text-sm font-medium text-white truncate hover:cursor-pointer"
                                    onClick={handleProfile}
                                >
                                    {user?.username}
                                </h1>
                                <p className="text-xs text-gray-400 truncate">
                                    {user?.name_display}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="shrink-0 text-xs text-blue-500 hover:text-blue-400 transition-colors duration-200 whitespace-nowrap hover:cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>

                    {/* SUGGESTED ACCOUNTS */}
                    <div className="flex flex-col gap-3 h-full">
                        <div className="flex flex-row justify-between items-center">
                            <h3 className="text-sm text-gray-400 font-medium">
                                Suggested for you
                            </h3>
                            <h3 className="text-sm text-white cursor-pointer">See All</h3>
                        </div>

                        <div className="flex flex-col gap-3 h-min" id="suggested-account">
                            {suggestedAccounts?.map((account) => (
                                <div
                                    className="flex flex-row justify-between items-center h-full"
                                    key={account.id_user}
                                >
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <Image
                                                    src={account.profile_picture || "https://via.placeholder.com/48"}
                                                    alt={account.username}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full truncate">
                                                {account.username}
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                {account.name_display}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500 hover:cursor-pointer">Follow</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
