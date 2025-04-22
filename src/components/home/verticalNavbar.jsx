import Image from "../image";

const VerticalNavbar = ({ onOpenModal }) => {
    return (
        <>
            <div className="pt-9 min-w-[16%] w-[16%] md:min-w-[20%] md:w-[33%] border-r-[1px] border-slate-800 overflow-y-hidden" id="vertical-navbar">
                {/*  TITLE APP  */}
                <div className="hidden md:block md:pl-6 md:w-min" id="title-app">
                    <h1 className="text-2xl text-white">ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪</h1>
                </div>
                {/* VERTICAL NAVBAR CONTENT */}
                <div className="flex flex-col gap-2 mt-10 ml-3" id="vertical-navbar-content">
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/home-active.svg" alt="home icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white md:font-bold">
                            Home
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/search-nonactive.svg" alt="search icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Search
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/explore-nonactive.svg" alt="explore icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Explore
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content">
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/reels-nonactive.svg" alt="reels icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Reels
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content"
                    >
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/messages-nonactive.svg" alt="messages icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Messages
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content"
                    >
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/notifications-nonactive.svg" alt="notifications icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Notifications
                        </h1>
                    </div>
                    <button type="button" onClick={onOpenModal} className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content"
                    >
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/create-nonactive.svg" alt="create icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Create
                        </h1>
                    </button>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content"
                    >
                        <div className="w-6 h-6" id="icon-navbar">
                            <Image src="./svg/dashboard-nonactive.svg" alt="dashboard icon" />
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Dashboard
                        </h1>
                    </div>
                    <div className="w-min md:w-full md:flex flex-row gap-4 items-center rounded-md hover:bg-gray-900 hover:cursor-pointer pl-3 py-3 pr-3 md:pr-10" id="navbar-content"
                    >
                        <div className="w-6 h-6" id="icon-navbar">
                            <div className="w-6 h-6 rounded-full">
                                <Image src="./img/profile/1.jpg" />
                            </div>
                        </div>
                        <h1 className="hidden md:block md:text-base md:text-white">
                            Profile
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerticalNavbar;
