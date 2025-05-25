import React from "react";
import "../../assets/css/flowbite.css";
import VerticalNavbar from "../../components/home/verticalNavbar";
import Story from "../../components/home/story";
import FeedContentPost from "../../components/home/feedContentPost";
import RightSidebar from "../../components/home/rightSidebar";
import { UserProvider } from "../../context/homeContext";

const Home = () => {

    return (
        <UserProvider>
            <div className="bg-[#03050c] overflow-y-hidden">
                <div className="flex flex-row gap-8 h-screen">
                    <VerticalNavbar />
                    <div className="w-[90%] pt-6 overflow-y-auto scrollbar-hide pb-5">
                        <div className="w-[calc(100%-30px)]">
                            <Story />
                            <div className="w-full flex flex-col gap-5 items-center">
                                <FeedContentPost />
                            </div>
                        </div>
                    </div>
                    <RightSidebar />
                </div>
            </div>
        </UserProvider>
    );
};

export default Home;
