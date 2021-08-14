import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';
import useCurrentUser from '../hooks/use-current-user';

/**
 * The Home page displayed in the / route
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const HomePage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the welcome page if he is not authenticated
    if (!currentUser) {
      router.push('/welcome');
    }
  }, []);

  return <Home />;
};

/**
 * Generates the Home page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const getCurrentUser = useCurrentUser(context);
  const currentUser = await getCurrentUser();

  return {
    props: { title: 'HOME', currentUser: currentUser },
  };
};

export default HomePage;
