// src/components/verticalNavbar.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "../image";
import CreatePostModal from "../modals/createPostModal";
import { useUser } from "../../context/homeContext";

const VerticalNavbar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useUser()

    const isActive = (path) => location.pathname.includes(path);

    return (
        <>
            <div className="pt-9 min-w-[16%] w-[16%] md:min-w-[20%] md:w-[20%] border-r-[1px] border-slate-800 overflow-y-hidden" id="vertical-navbar">
                <div className="hidden md:block md:pl-6 md:w-min" id="title-app">
                    <h1 className="text-2xl text-white">ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪</h1>
                </div>
                <div className="flex flex-col gap-2 mt-10 ml-3" id="vertical-navbar-content">
                    {/* Home */}
                    <div onClick={() => navigate("/home")} className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/home-active.svg" alt="home icon" />
                        </div>
                        <h1 className={`hidden md:block md:text-base md:text-white ${isActive("/home") ? "md:font-bold md:tracking-wider" : ""}`}>Home</h1>
                    </div>
                    {/* Search */}
                    <div onClick={() => navigate("/search")} className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/search-nonactive.svg" alt="search icon" />
                        </div>
                        <h1 className={`hidden md:block md:text-base md:text-white ${isActive("/search") ? "md:font-bold md:tracking-wider" : ""}`}>Search</h1>
                    </div>
                    {/* Create */}
                    <button type="button" onClick={() => setIsOpenModal(true)} className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/create-nonactive.svg" alt="create icon" />
                        </div>
                        <h1 className={`hidden md:block md:text-base md:text-white ${isActive("/create") ? "md:font-bold md:tracking-wider" : ""}`}>Create</h1>
                    </button>
                    {/* Profile */}
                    <div onClick={() => navigate("/profile")} className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <div className="w-6 h-6 rounded-full">
                                <Image src={user?.profile_picture} className="rounded-full" />
                            </div>
                        </div>
                        <h1 className={`hidden md:block md:text-base md:text-white ${isActive("/profile") ? "md:font-bold md:tracking-wider" : ""}`}>Profile</h1>
                    </div>
                </div>
            </div>
            <CreatePostModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
        </>
    );
};

export default VerticalNavbar;
