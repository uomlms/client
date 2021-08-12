import axios from 'axios';
import { useState } from 'react';

/**
 * A hook that executes a request to the given url if the fuction
 * 'sendRequest' is called, and handles the error state. Also executes a
 * given callback if the request is successful.
 *
 * @param {Object} props
 * @returns {Object} The function that executes the request and the errors
 */
const useRequest = ({ url, method, body, config, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  /**
   * Executes a request on the given url
   */
  const sendRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body, config);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(err.response?.data.errors);
    }
  };

  return { sendRequest, errors };
};

export default useRequest;
