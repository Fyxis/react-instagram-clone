import apiClient from "./apiClient";
import logoutUser from "./logout";

const API_URL = import.meta.env.VITE_API_URL;

const suggestedAccount = async () => {
    try {
        const response = await apiClient.get(
            `${API_URL}/instagram/main/suggested-account`
        );
        return response.data;
    } catch (error) {
        if(error.isAuthError) {
            await logoutUser();
        }
        
        console.error("Error fetching suggested accounts:", error);
        throw error; // Rethrow error for further handling
    }
}

export default suggestedAccount;
