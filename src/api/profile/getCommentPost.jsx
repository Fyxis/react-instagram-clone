// src/api/profile/getCommentPost.jsx
// import axios from 'axios';
import apiClient from "../apiClient";
import logoutUser from "../logout";

// const getCommentPost = async (postId) => {
//     return axios.get(`${import.meta.env.VITE_API_URL}/instagram/main/post/${postId}/comments`, {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${localStorage.getItem('authToken')}`, // token yang benar
//         },
//         timeout: 5000,
//     });
// };

const getCommentPost = async (postId) => {
    try {
        return apiClient.get(`/instagram/main/post/${postId}/comments`);
    } catch (error) {
        if (error.isAuthError) {
            // Refresh token gagal → Logout
            await logoutUser();
        } else {
            console.error(error);
        }
    }
};

export default getCommentPost;
