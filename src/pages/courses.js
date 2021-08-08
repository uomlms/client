import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Courses from '../components/Courses/Courses';
import useClient from '../hooks/use-client';

/**
 * The Courses page displayed in the /courses route
 *
 * @param {object} props
 * @returns {JSX.Element}
 */
const CoursesPage = ({ currentUser, courses }) => {
  const router = useRouter();
  const isStaff = currentUser.role === 'staff';

  useEffect(() => {
    // Redirects the user to the welcome page if he is not authenticated
    if (!currentUser) {
      router.push('/welcome');
    }
  }, [currentUser]);

  return <Courses courses={courses} isStaff={isStaff} />;
};

/**
 * Generates the courses page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const client = useClient(context);
  let courses = [];
  try {
    const response = await client.get('/api/courses');
    courses = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: { courses: courses },
  };
};

export default CoursesPage;
