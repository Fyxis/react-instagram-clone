/* eslint-disable no-unused-vars */
import React from "react";
import { useAuth } from "../../context/authContext";
import { useUser } from "../../context/homeContext";
import { useApp } from "../../context/loadingContext";
import Image from "../image";
import fetchDataByIdToken from "../../api/fetchDataByIdToken";
import logoutUser from "../../api/logout";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
    const { user, loading, error } = useUser();
    const { setIsNavigating } = useApp();
    const navigate = useNavigate();

    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            setIsNavigating(true);
            await logoutUser();
            navigate("/home");
        } catch (error) {
            console.error("Logout error:", error);
        } finally {
            setTimeout(() => {
                setIsNavigating(false);
            }, 1000);
            logout();
        }
    };

    // if(window.innerWidth < 640) {
    //     console.log("sm")
    // } else if(window.innerWidth < 768) {
    //     console.log("md")
    // } else if(window.innerWidth < 1024) {
    //     console.log("lg")
    // } else if(window.innerWidth < 1280) {
    //     console.log("xl")
    // } else if(window.innerWidth < 1536) {
    //     console.log("2xl")
    // }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="hidden lg:block lg:w-1/4 xl:w-2/4 lg:h-full">
                <div className="pt-6 overflow-y-hidden">
                    <div className="flex flex-col gap-5 w-full lg:pr-11 xl:pr-20">  {/* kode padding right ini tidak berfungsi, saat tampilan mobile padding right nya malah menjadi 20, seharusnya 10 /*}
                        {/* <!-- YOUR PROFILE --> */}
                        <div className="flex justify-between items-center w-full h-full md:gap-6">
                            {/* Profile Section */}
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                {/* Avatar */}
                                <div className="shrink-0 w-12 h-12">
                                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center">
                                        {user?.profile_picture ? (
                                            <Image
                                                src={user.profile_picture}
                                                alt="Profile picture"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-700">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 text-gray-400"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* User Info */}
                                <div className="flex flex-col min-w-0">
                                    <h1 className="text-sm font-medium text-white truncate hover:cursor-pointer">
                                        {user?.username}
                                    </h1>
                                    <p className="text-xs text-gray-400 truncate">
                                        {user?.name_display}
                                    </p>
                                </div>
                            </div>

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="shrink-0 text-xs text-blue-500 hover:text-blue-400 transition-colors duration-200 whitespace-nowrap hover:cursor-pointer"
                            >
                                Logout
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 h-full">
                            {/* <!-- TITLE SUGGESTED ACCOUNT --> */}
                            <div className="flex flex-row justify-between items-center">
                                <h3 className="text-sm text-gray-400 font-medium">
                                    Suggested for you
                                </h3>
                                <h3 className="text-sm text-white">See All</h3>
                            </div>
                            {/* <!-- SUGGESTED ACCOUNT --> */}
                            <div
                                className="flex flex-col gap-3 h-min"
                                id="suggested-account"
                            >
                                <div className="flex flex-row justify-between items-center h-full">
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <Image
                                                    src="https://picsum.photos/200/300?random=15"
                                                    alt="story instagram"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full">
                                                jakarta.keras
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                Followed by bagus.jpeg + 9 more
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500">
                                        Follow
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center h-full">
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <img
                                                    src="https://picsum.photos/200/300?random=16"
                                                    alt="story instagram"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full">
                                                sm3k_id
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                Followed by 1_.sandika + 32 more
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500">
                                        Follow
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center h-full">
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <img
                                                    src="https://picsum.photos/200/300?random=17"
                                                    alt="story instagram"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full">
                                                kegobloganunfaedah
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                Followed by gwenfayy + 11 more
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500">
                                        Follow
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center h-full">
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <img
                                                    src="https://picsum.photos/200/300?random=18"
                                                    alt="story instagram"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full">
                                                shonen.annime
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                Popular
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500">
                                        Follow
                                    </p>
                                </div>
                                <div className="flex flex-row justify-between items-center h-full">
                                    <div className="flex flex-row gap-3 h-min w-full">
                                        <div className="relative w-12 h-12 rounded-full">
                                            <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                                <img
                                                    src="https://picsum.photos/200/300?random=19"
                                                    alt="story instagram"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-0 h-min w-3/4 self-center">
                                            <h1 className="text-white text-sm font-semibold w-full">
                                                animenewscentre
                                            </h1>
                                            <p className="text-xs text-gray-400 w-[80%] truncate overflow-hidden">
                                                Followed by theanimeflow
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-blue-500">
                                        Follow
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightSidebar;
