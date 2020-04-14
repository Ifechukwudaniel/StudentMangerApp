import axios from 'axios';

class AxiosService {

  axiosInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axiosInstance = axios.create({
      timeout: 5000
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImFjY2Vzc0xldmVsIjowLCJfaWQiOiI1ZThkYTVjODgwZDU2NmFiNDQ3OGEwNWMiLCJtYXRyaWNOdW1iZXIiOiJiYXMvY3NjLzE3MDA0NCIsIm5hbWUiOiJVc2VybmFtZSAiLCJwYXNzd29yZCI6IlUyRnNkR1ZrWDE5cGdUK0lOMkhOSk5ScDBwQk90clcxS0l1VS83S1hneDg9IiwiX192IjowLCJpYXQiOjE1ODYzNzU5MTZ9.8336aX2GRwHMosj6vUPknH65QuQEPEXBGx1fFq5S0FA`;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      });

    return this.axiosInstance;
  }

  getInstance() {
    return this.axiosInstance || this.initInstance();
  }
}

export default new AxiosService();
