import axios from 'axios';

const API_URL = `https://localhost:80`; // Replace with your API URL

export const logoutApiCall = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
