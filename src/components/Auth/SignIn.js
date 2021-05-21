import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import TextField from '../UI/TextField';

const SignIn = () => {
  return (
    <Grid className="h-100" container alignContent="center">
      <Container maxWidth="sm">
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
                <FormControlLabel
                  control={
                    <Checkbox name="remember-me-checkbox" color="primary" />
                  }
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" fullWidth>
                  Sign in
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>
    </Grid>
  );
};

export default SignIn;
