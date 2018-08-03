import axios from 'axios';

const Instance = {
  axiosInstance() {
    const instance = axios.create({
      baseURL: this.getHostName(),
      timeout: process.env.REACT_APP_API_TIMEOUT_INTERVAL || 1000,
      headers: this.getHeader(),
    });
    return instance;
  },

  getHeader() {
    const API_HEADER = {
      'Content-Type': 'application/json',
    };
    return API_HEADER;
  },

  getHostName() {
    return `${process.env.REACT_APP_API_HOST_URL}/web/v1`;
  },
};

export default Instance;
