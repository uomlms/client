import axios from 'axios';
import { useState } from 'react';

/**
 * A hook that executes a request to the given url if the fuction
 * 'sendRequest' is called, and handles the error state. Also executes a
 * given callback if the request is successful.
 *
 * @param {object} param0
 * @returns {object}
 */
const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const sendRequest = async () => {
    try {
      setErrors(null);
      const response = await axios[method](url, body);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };

  return { sendRequest, errors };
};

export default useRequest;
