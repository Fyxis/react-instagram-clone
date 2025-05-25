import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL;

const registerApi = async (credentials, navigate, navigateTo) => {
    try {
        const response = await axios.post(
            `${API_URL}/instagram/auth/register`,
            credentials
        );
        console.log(response.data)
        if(response.status === 200) {
            alert("Register success, please login!");
            navigate(navigateTo, { replace: true });
        }
    } catch (error) {
        alert(error)
    }
}

export default registerApi
