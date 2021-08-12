import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';
import useClient from '../hooks/use-client';

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
  }, [currentUser]);

  return <Home />;
};

/**
 * Generates the Home page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const client = useClient(context);
  let currentUser;

  try {
    const { data } = await client.get('/api/users/currentuser');
    currentUser = data.currentUser ? data.currentUser : null;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { title: 'HOME', currentUser: currentUser },
  };
};

export default HomePage;
