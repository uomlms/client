import { useState } from 'react';
import Router from 'next/router';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Alert from '@material-ui/lab/Alert';
import TextField from '../UI/TextField';
import useRequest from '../../hooks/use-request';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      name,
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const handleSignUpClicked = async (event) => {
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
    <Grid className="h-100" container alignContent="center">
      <Container maxWidth="sm">
        {errorMessages}

        <Card>
          <Box m={2}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h4" align="center">
                  Sign up
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  label="Name"
                  placeholder="Please enter your name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
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
                <Button color="primary" variant="contained" fullWidth onClick={handleSignUpClicked}>
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Grid>
  );
};

export default SignUp;
