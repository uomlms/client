import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HomePage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return <div>Home page</div>;
};

export default HomePage;
