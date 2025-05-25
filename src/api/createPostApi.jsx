// import axios from "axios";
import apiClient from "./apiClient";
import logoutUser from "./logout";

// const createPostApi = async (data) => {
//     // const formData = new FormData();
//     // formData.append("caption", caption);
//     // formData.append("content_url", content_url);
//     console.log(data)

//     try {
//         const response = await axios.post(`${import.meta.env.VITE_API_URL}/instagram/main/create-post`, data, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 Authorization: `Bearer ${localStorage.getItem("authToken")}`,
//             },
//         });

//         if(!response.data.status || response.data.status !== 200) {
//             throw new Error("Network response was not ok");
//         }

//         return response.data
//     } catch (error) {
//         console.error("Error uploading post:", error);
//         throw error;
//     }
// }

const createPostApi = async (data) => {
    try {
        return apiClient.post('/instagram/main/create-post', data);
    } catch (error) {
        if (error.isAuthError) {
            // Refresh token gagal → Logout
            await logoutUser();
        } else {
            console.error("Error uploading post:", error);
        }
        let errorMessage = 'Failed to create post';

        if (error.response) {
            // Error dari server
            errorMessage = error.response.data?.message || error.response.statusText;
        } else if (error.request) {
            // Tidak ada response dari server
            errorMessage = 'No response from server';
        }

        throw new Error(errorMessage);
    }

};

export default createPostApi;
