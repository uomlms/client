import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';

const SignUp = () => {
  return (
    <Grid className="h-100" container alignContent="center">
      <Container maxWidth="sm">
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
                  label="Email"
                  placeholder="Please enter your email"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  type="password"
                  label="Password"
                  placeholder="Please enter your password"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" fullWidth>
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
