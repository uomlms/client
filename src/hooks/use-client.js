import axios from 'axios';

/**
 * Creates and returns an Axios client with some default based on whether
 * the code is being executed on the server side or the client side.
 *
 * @param {object} context
 * @returns {AxiosInstance}
 */
const useClient = (context) => {
  if (typeof window === 'undefined') {
    // We are on the server
    return axios.create({
      baseURL: process.env.INGRESS_URL,
      headers: context?.req.headers,
    });
  } else {
    // We must be on the browser
    return axios.create({
      baseUrl: '/',
    });
  }
};

export default useClient;
