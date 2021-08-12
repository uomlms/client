import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useRequest from '../../hooks/use-request';

/**
 * The Sign out page displayed in the /auth/signout page.
 * It signs the current user out of the application.
 *
 * @returns {JSX.Element}
 */
const SignOut = () => {
  const router = useRouter();

  /**
   * Handles the execution and the errors of the POST request to the authentication
   * service that signs out a user.
   *
   * @type {Object}
   */
  const { sendRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => router.push('/'),
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default SignOut;
