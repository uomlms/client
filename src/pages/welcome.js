import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '../components/UI/Buttons/Button';
import useCurrentUser from '../hooks/use-current-user';

/**
 * The welcome page displayed in the /welcome route
 *
 * @param {Object} props
 * @returns {JSX.Element}
 */
const WelcomePage = ({ currentUser }) => {
  const router = useRouter();

  useEffect(() => {
    // Redirects the user to the home page if he is authenticated
    if (currentUser) {
      router.push('/');
    }
  }, []);

  return (
    <Box width="inherit" display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Typography component="h1" variant="h1" align="center">
          Welcome to UOMLMS
        </Typography>
        <Typography component="h5" variant="h5" align="center">
          You can navigate through your courses, assignments and submit your assignments which will
          be executed and corrected so you can get immediate feedback.
        </Typography>

        <Box display="flex" justifyContent="center">
          <Box m={1}>
            <Link href="/auth/signin">
              <Button color="primary">Sign in</Button>
            </Link>
          </Box>
          <Box m={1}>
            <Link href="/auth/signup">
              <Button color="primary">Sign up</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

/**
 * Generates the Welcome page on the server side every time there is a request
 *
 * @param {object} context
 * @returns {object}
 */
export const getServerSideProps = async (context) => {
  const getCurrentUser = useCurrentUser(context);
  const currentUser = await getCurrentUser();

  return {
    props: { title: 'WELCOME', currentUser: currentUser },
  };
};

export default WelcomePage;
