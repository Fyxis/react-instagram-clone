import React, { useEffect, useState } from 'react';
import getUserPost from '../../api/profile/getUserPost';
import '../../assets/css/font-awesome.css';
import PostModal from '../modals/postModal';

const PhotoGrid = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getUserPost();
                if (response.status === 200) {
                    setPosts(response.data?.data || []);
                } else {
                    throw new Error(response.statusText || 'Failed to fetch posts');
                }
            } catch (error) {
                setError(error.message);
                console.error('Error fetching posts:', error);
            }
        };

        fetchPost();
    }, []);

    if (error) {
        return (
            <div className="text-center py-8 text-red-500">
                Error loading posts: {error}
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="text-center py-8 text-gray-500">
                No posts found
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center" id="photo-grid">
                {posts.map((post) => (
                    <div
                        key={post.id_post}
                        className="group relative aspect-square w-64 h-72 overflow-hidden rounded-lg cursor-pointer"
                        onClick={() => {
                            setSelectedPost(post);
                            setIsModalOpen(true);
                        }}
                    >
                        <img
                            src={post.image}
                            alt="Post"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex gap-4 text-white text-lg">
                                <span className="flex items-center gap-2">
                                    <i className="heart"></i> {post.like_count || 0}
                                </span>
                                <span className="flex items-center gap-2">
                                    <i className="comment"></i> {post.comment_count || 0}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && selectedPost && (
                <PostModal post={selectedPost} onClose={() => {
                    setIsModalOpen(false);
                    setSelectedPost(null);
                }} />
            )}
        </>
    );
};

export default PhotoGrid;
