import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SignUp from '../../components/Auth/SignUp';
import useCurrentUser from '../../hooks/use-current-user';

/**
 * The Sign up page displayed in the /auth/signup route
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const SignUpPage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the home page if he is authenticated
    if (currentUser) {
      router.push('/home');
    }
  }, []);

  return <SignUp />;
};

/**
 * Generates the Sign Up page on the server side every time there is a request
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

export default SignUpPage;
