import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Home from '../components/Home';

const HomePage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return <Home />;
};

export default HomePage;
