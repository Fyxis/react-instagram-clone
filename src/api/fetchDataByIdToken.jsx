import axios from 'axios';

const fetchDataByIdToken = async () => {
    try {
        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/instagram/main/user-profile`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "authToken"
                    )}`,
                },
            }
        );
        return response
    } catch (error) {
        alert(error.response.data.message)
    }
}

export default fetchDataByIdToken
