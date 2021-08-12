import { useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import TextField from '../UI/TextField';
import Button from '../UI/Buttons/Button';
import useRequest from '../../hooks/use-request';

/**
 * SignIn component
 *
 * Handles the Sign in process by rendering the sign in form and executing
 * the sign in request to the authentication service.
 */
const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /**
   * Handles the execution and the errors of the POST request to the authentication
   * service that signs in a user.
   *
   * @type {Object}
   */
  const { sendRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => router.push('/'),
  });

  /**
   * Handles the click event of the Sign in button.
   * Executes the sign in request to the authentication service.
   *
   * @param {object} event
   */
  const handleSignInClicked = async (event) => {
    event.preventDefault();
    await sendRequest();
  };

  const errorMessages =
    errors &&
    errors.map((err) => (
      <Box key={err.message} my={1}>
        <Alert severity="error">{err.message}</Alert>
      </Box>
    ));

  return (
    <Box flexGrow={1} display="flex" alignItems="center">
      <Container maxWidth="sm">
        {errorMessages}

        <Card>
          <Box m={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4" align="center">
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  placeholder="Please enter your email"
                  fullWidth
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  label="Password"
                  placeholder="Please enter your password"
                  fullWidth
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Button color="primary" fullWidth onClick={handleSignInClicked}>
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SignIn;
