import axios from "axios";

const logoutUser = async () => {
  return axios.post(
    `${import.meta.env.VITE_API_URL}/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
};

export default logoutUser;
