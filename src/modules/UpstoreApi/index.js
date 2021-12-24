import Auth from '../Auth';
import jumpTo from '../Navigation';
import axios from 'axios';
import { serverConfig } from '../../config/server-config';

const appServerURL = serverConfig.appServerUrl;
//const appServerURL = "http://localhost:8080/shirmal";

const UpstoreApi = config => {
  const token = Auth.getToken();
  if (token != null) {
    config.headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      Authorization: 'Bearer ' + token,
    };
  }

  axios.interceptors.response.use(
    response => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'INETRNAL SERVER ERROR',
          status: 500,
        };
      }
      if (error.response.status === 401) {
        Auth.logout();
        jumpTo('/login');
        throw error;
      }
      return Promise.reject(error);
    }
  );

  config.baseURL = appServerURL;
  return axios(config);
};
export default UpstoreApi;
