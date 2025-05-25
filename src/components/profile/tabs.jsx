import React from "react";
import '../../assets/css/font-awesome.css';

const Tabs = () => {
    return (
        <div className="border-t border-gray-200 flex justify-center">
            <div className="flex">
                <button className="px-4 py-3 border-t border-black text-white flex items-center gap-1 text-sm font-medium">
                    <i className="table-cells-large"></i>
                    <span className="hidden md:inline">POSTS</span>
                </button>
            </div>
        </div>
    );
};

export default Tabs;
