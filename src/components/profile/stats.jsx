import React, { useEffect, useState } from "react";
import getUserStats from "../../api/profile/getUserStats";

const Stats = () => {
    const [stats, setStats] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await getUserStats();
                if (response.status === 200) {
                  setStats(response.data?.data);
                } else {
                    throw new Error(
                        response.statusText || "Failed to fetch posts"
                    );
                }
            } catch (error) {
                setError(error.message);
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);

    if (error) {
        return (
            <div className="text-center py-8 text-red-500">
                Error loading stats: {error}
            </div>
        );
    }

    return (
        <>
            <div className="flex gap-8 mb-4 profile-stats">
                <div className="text-white">
                    <span className="font-semibold">{stats.posts_count || 0}</span> posts
                </div>
                <div className="text-white">
                    <span className="font-semibold">{stats.followers_count || 0}</span> followers
                </div>
                <div className="text-white">
                    <span className="font-semibold">{stats.following_count || 0}</span> following
                </div>
            </div>
        </>
    );
};

export default Stats;
