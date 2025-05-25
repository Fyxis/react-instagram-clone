// import axios from 'axios';
import apiClient from './apiClient';
import logoutUser from './logout';

// const fetchDataByIdToken = async () => {
//     try {
//         const response = await axios.get(
//             `${import.meta.env.VITE_API_URL}/instagram/main/user-profile`, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem(
//                         "authToken"
//                     )}`,
//                 },
//             }
//         );
//         return response
//     } catch (error) {
//         alert(error.response.data.message)
//     }
// }

const fetchDataByIdToken = async () => {
    try {
        const response = await apiClient.get('/instagram/main/user-profile');
        return response;
    } catch (error) {
        if (error.isAuthError) {
            // Refresh token gagal → Logout
            await logoutUser();
        }
        let errorMessage = 'Failed to fetch user profile';

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

export default fetchDataByIdToken
