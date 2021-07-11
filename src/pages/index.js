import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';

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

export default HomePage;
