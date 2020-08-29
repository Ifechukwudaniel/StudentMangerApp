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
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImFjY2Vzc0xldmVsIjowLCJfaWQiOiI1ZjM1NWEyN2I5ZWEwNWRkZGU2ZTRkZTMiLCJtYXRyaWNOdW1iZXIiOiJCQVMvQ1NDLzE3MDM4NyIsIm5hbWUiOiJJRkVDSFVLV1UgREFOSUVMIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxK2VwK0w3VUxLbmo0amc5RmM0akNhMnpCTkhkY0Q0bHQwPSIsIl9fdiI6MCwiaWF0IjoxNTk3MzMyMTExfQ.4Z8-7akBkOCfcxKth92sWmSjeCKSqzXl6h-cyhD0q7Y`;

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
