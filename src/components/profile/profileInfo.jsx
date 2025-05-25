import React from "react";
import { useUser } from "../../context/homeContext";

const ProfileInfo = () => {
    const { user } = useUser()
    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 mb-4">
                <h1 className="text-2xl font-light text-white">{user?.username}</h1>
                <div className="flex justify-center items-center">
                    <button className="bg-gray-500/40 hover:bg-gray-500/30 hover:cursor-pointer text-white px-6 py-1 rounded text-sm font-medium">
                        Edit Profile
                    </button>
                    {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm font-medium">
                        Follow
                    </button> */}
                    {/* <button className="border border-gray-300 px-4 py-1 rounded text-sm font-medium">
                        Message
                    </button> */}
                    {/* <button className="border border-white p-1 rounded">
                        <i className="fas fa-chevron-down text-xs text-white"></i>
                    </button> */}
                </div>
            </div>
        </>
    );
};

export default ProfileInfo;
