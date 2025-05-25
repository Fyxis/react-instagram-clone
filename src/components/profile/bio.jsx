import React from "react";
import { useUser } from "../../context/homeContext";

const Bio = () => {
    const { user } = useUser()
    const linkElement = document.getElementById("website_link")
    if (linkElement) {
        linkElement.addEventListener("click", function (event) {
            event.preventDefault()
            window.open(linkElement.href, "_blank")
        })
        linkElement.setAttribute("target", "_blank")
    }
    return (
        <div className="mb-2 profile-bio text-white">
            <p className="font-semibold">{user?.name_display}</p>
            <p className="text-white">
                {user?.bio}
            </p>
            {user?.website_link !== null && (
                <a href={user?.website_link} className="text-blue-600" id="website_link">
                    {user?.website_link}
                </a>
            )}
        </div>
    );
};

export default Bio;
