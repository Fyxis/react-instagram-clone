import React, { useEffect, useRef, useState } from "react";
import getCommentPost from "../../api/profile/getCommentPost";
import "../../assets/css/font-awesome.css";

const PostModal = ({ post, onClose }) => {
    const [comments, setComments] = useState([]);
    const modalRef = useRef(null);

    useEffect(() => {
        const fetchComments = async () => {
            if (post) {
                try {
                    const response = await getCommentPost(post.id_post);
                    if (response.status === 200) {
                        setComments(response.data?.data);
                    } else {
                        console.error("Failed to fetch comments:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error fetching comments:", error.message);
                }
            }
        };
        fetchComments();
    }, [post]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    if (!post) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div ref={modalRef} className="bg-[#03050c] text-white rounded-lg max-w-screen-lg w-full max-h-[90vh] overflow-hidden flex">
                {/* Left Side - Post Image */}
                <div className="flex-1 bg-[#03050c] flex items-center justify-center">
                    <img
                        src={post.image}
                        alt="Post"
                        className="w-full h-full object-contain aspect-square"
                    />
                </div>

                {/* Right Side - Comments */}
                <div className="hidden md:flex flex-1 max-w-md flex-col">
                    {/* Post Header */}
                    <div className="border-b-[0.1px] border-b-gray-500/40 p-4 flex items-center gap-3">
                        <div className="flex flex-row items-center gap-4">
                            <img
                                src={post.profile_picture}
                                alt="User"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex flex-col">
                                <span className="font-semibold">{post.username}</span>
                            </div>
                        </div>
                        <button
                            className="ml-auto text-gray-500 hover:cursor-pointer"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                    </div>

                    {/* Comment List */}
                    <div className="flex-1 flex-col overflow-y-auto p-4 space-y-4">
                        {post.caption && (
                            <div className="flex gap-4 items-start">
                                {!post.profile_picture ? (
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-4 text-gray-400"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                            />
                                        </svg>
                                    </div>
                                ) : (
                                    <img
                                        src={post.profile_picture}
                                        alt="User"
                                        className="w-8 h-8 rounded-full"
                                    />
                                )}
                                <div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-semibold text-sm">{post.username}</span>
                                        <span className="text-gray-500 text-sm">{post.time_difference}</span>
                                    </div>
                                    <p className="text-sm">{post.caption}</p>
                                </div>
                            </div>
                        )}
                        {comments && comments.length > 0 ? (
                            comments.map((comment) => (
                                <div key={comment.id_comment} className="flex gap-4 items-start">
                                    {!comment.profile_picture ? (
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-4 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <img
                                            src={comment.profile_picture}
                                            alt="User"
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span className="font-semibold text-sm">{comment.username}</span>
                                            <span className="text-gray-500 text-sm">{comment.time_difference}</span>
                                        </div>
                                        <p className="text-sm">{comment.comment_text}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center text-gray-500"></div>
                        )}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex justify-between mb-2">
                            <div className="flex space-x-4">
                                <button id="likeButton" className="flex">
                                    <i className="heart"></i>
                                </button>
                                <button className="flex">
                                    <i className="comment"></i>
                                </button>
                                <button className="flex">
                                    <i className="paper-plane"></i>
                                </button>
                            </div>
                            <button className="flex">
                                <i className="far fa-bookmark"></i>
                            </button>
                        </div>

                        <div className="mb-2">
                            <p className="font-semibold text-sm" id="likesCount">
                                {post.like_count !== 0 ? post.like_count : "No likes yet"}
                            </p>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs text-gray-500">{post.time_difference}</p>
                        </div>

                        <div className="flex items-center border-t pt-3">
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                className="flex-1 text-sm outline-none"
                            />
                            <button className="text-blue-500 font-semibold text-sm ml-2">
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostModal;
