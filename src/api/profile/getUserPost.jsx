// import axios from 'axios';
import apiClient from '../apiClient';
import logoutUser from '../logout';

// const getUserPost = async () => {
//     try {
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//             throw new Error('No authentication token found');
//         }

//         const response = await axios.get(
//             `${import.meta.env.VITE_API_URL}/instagram/main/user-post`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//                 timeout: 10000 // Timeout 10 detik
//             }
//         );

//         if (response.status !== 200) {
//             throw new Error(`Request failed with status ${response.status}`);
//         }

//         return response;
//     } catch (error) {
//         let errorMessage = 'Failed to fetch posts';

//         if (error.response) {
//             // Error dari server
//             errorMessage = error.response.data?.message || error.response.statusText;
//         } else if (error.request) {
//             // Tidak ada response dari server
//             errorMessage = 'No response from server';
//         }

//         throw new Error(errorMessage);
//     }
// }

const getUserPost = async () => {
    try {
        const response = await apiClient.get('/instagram/main/user-post');
        return response;
    } catch (error) {
        if( error.isAuthError) {
            // Refresh token gagal → Logout
            await logoutUser();
        }
        let errorMessage = 'Failed to fetch posts';

        if (error.response) {
            // Error dari server
            errorMessage = error.response.data?.message || error.response.statusText;
        } else if (error.request) {
            // Tidak ada response dari server
            errorMessage = 'No response from server';
        }

        throw new Error(errorMessage);
    }
}

export default getUserPost;
