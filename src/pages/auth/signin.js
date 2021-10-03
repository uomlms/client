import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SignIn from '../../components/Auth/SignIn';
import useCurrentUser from '../../hooks/use-current-user';

/**
 * The Sign in page displayed in the /auth/signin route
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const SignInPage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the home page if he is authenticated
    if (currentUser) {
      router.push('/home');
    }
  }, []);

  return <SignIn />;
};

/**
 * Generates the Sign In page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const getCurrentUser = useCurrentUser(context);
  const currentUser = await getCurrentUser();

  return {
    props: { title: 'SIGN UP', currentUser: currentUser },
  };
};

export default SignInPage;
