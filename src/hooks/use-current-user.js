import useClient from './use-client';

/**
 * Build a function that when called executes a GET request to the authentication
 * service and returns the current user.
 *
 * @param {Object} context
 * @returns A async function that returns the current users
 */
const useCurrentUser = (context) => {
  const client = useClient(context);

  /**
   * Executes a GET request to the authentication service and returns the current user
   *
   * @returns {Object}
   */
  const getCurrentUser = async () => {
    let currentUser;
    try {
      const { data } = await client.get('/api/users/currentuser');
      currentUser = data.currentUser ? data.currentUser : null;
    } catch (error) {
      console.log(error);
    }

    return currentUser;
  };

  return getCurrentUser;
};

export default useCurrentUser;
