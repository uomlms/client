import { useEffect } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

/**
 * The Sign out page displayed in the /auth/signout page.
 * It signs the current user out of the application.
 *
 * @returns {JSX.Element}
 */
const SignOut = () => {
  const { sendRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => Router.push('/'),
  });

  useEffect(() => {
    sendRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default SignOut;
