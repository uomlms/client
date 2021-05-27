import { useRouter } from 'next/router';

const HomePage = ({ currentUser }) => {
  const router = useRouter();

  if (!currentUser) {
    router.push('/welcome');
  }

  return <div>Home page</div>;
};

export default HomePage;
