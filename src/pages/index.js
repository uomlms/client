import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';
import useClient from '../hooks/use-client';
import useCurrentUser from '../hooks/use-current-user';

/**
 * The Home page displayed in the / route
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const HomePage = ({ currentUser, noCourses }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the welcome page if he is not authenticated
    if (!currentUser) {
      router.push('/welcome');
    }
  }, []);

  return <Home currentUser={currentUser} noCourses={noCourses} />;
};

/**
 * Generates the Home page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const client = useClient(context);
  const getCurrentUser = useCurrentUser(context);
  const currentUser = await getCurrentUser();

  let noCourses = 0;
  try {
    const response = await client.get('/api/courses');
    noCourses = response.data ? response.data.length : 0;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { title: 'HOME', noCourses: noCourses, currentUser: currentUser },
  };
};

export default HomePage;
