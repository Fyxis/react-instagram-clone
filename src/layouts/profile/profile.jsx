import React from "react";
import ProfilePicture from "../../components/profile/profilePicture";
import ProfileInfo from "../../components/profile/profileInfo";
import Stats from "../../components/profile/stats";
import Bio from "../../components/profile/bio";
import VerticalNavbar from "../../components/home/verticalNavbar";
import { UserProvider } from "../../context/homeContext";
import Tabs from "../../components/profile/tabs";
import PhotoGrid from "../../components/profile/photoGrid";

const Profile = () => {
    return (
        <UserProvider>
            <div className="bg-[#03050c] h-screen overflow-x-hidden flex flex-row overflow-y-hidden">
                <VerticalNavbar />
                {/* <main className="w-full mx-auto px-10 py-9 pb-16 md:pb-6 "> */}
                <main className="w-full flex justify-center items-start px-10 py-9 pb-16 md:pb-6 overflow-y-auto">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 mb-8">
                            <ProfilePicture />
                            <div className="flex-1 text-center md:text-left">
                                <ProfileInfo />
                                <Stats />
                                <Bio />
                            </div>
                        </div>
                        <Tabs />
                        {/* Photo Grid */}
                        <PhotoGrid />
                    </div>
                </main>
            </div>
        </UserProvider>
    );
};

export default Profile;
