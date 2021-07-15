import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CoursesProvider from '../store/CoursesProvider';
import Courses from '../components/Courses/Courses';
import COURSES from '../components/Courses/DummyCourses';

/**
 * The Courses page displayed in the /courses route
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CoursesPage = ({ currentUser, courses }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the welcome page if he is not authenticated
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return (
    <CoursesProvider courses={courses}>
      <Courses />
    </CoursesProvider>
  );
};

/**
 * Generates the courses page statically but re-renders the content if a request
 * is send after 60 seconds
 *
 * @param {object} context
 * @returns {object}
 */
export const getStaticProps = async (context) => {
  return {
    props: { courses: COURSES },
    revalidate: 60,
  };
};

export default CoursesPage;
