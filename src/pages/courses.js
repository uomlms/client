import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Courses from '../components/Courses';

const CoursesPage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return <Courses />;
};

export default CoursesPage;
