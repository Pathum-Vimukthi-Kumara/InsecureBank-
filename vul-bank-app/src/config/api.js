const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  BASE_URL: API_URL,
  LOGIN: `${API_URL}/api/login`,
  REGISTER: `${API_URL}/api/register`,
  LANDING: `${API_URL}/api/landing`,
  TRANSFER: `${API_URL}/api/transfer`,
  TRANSACTIONS: `${API_URL}/api/transactions`,
  USER: (id) => `${API_URL}/api/user/${id}`,
  SEARCH_USERS: `${API_URL}/api/users/search`,
  UPDATE_PROFILE: `${API_URL}/api/profile/update`,
  ADMIN_USERS: `${API_URL}/api/admin/users`,
  SYSTEM_PING: `${API_URL}/api/system/ping`,
  FORGOT_PASSWORD: `${API_URL}/api/forgot-password`
};

export default API_URL;
