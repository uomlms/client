import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Courses from '../components/Courses/Courses';

/**
 * The Courses page displayed in the /courses route
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CoursesPage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the welcome page if he is not authenticated
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return <Courses />;
};

export default CoursesPage;
