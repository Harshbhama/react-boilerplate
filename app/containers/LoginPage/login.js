import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Field, reduxForm } from 'redux-form';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: 'white' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        GT Tax Pro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: '13px',
  },
  multilineColor: {
    color: 'black',
  },
}));
const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  // <TextField hintText={label}
  //   floatingLabelText={label}
  //   errorText={touched && error}
  //   {...input}
  //   {...custom}
  // />
  <TextField
    margin="normal"
    required
    fullWidth
    label={label}
    autoFocus
    errorText={touched && error}
    {...input}
    {...custom}
    InputLabelProps={{
      style: { color: 'white' },
    }}
  />
);

const SignIn = props => {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{ marginLeft: '65%', marginTop: '10%', width: '50%' }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ position: 'relative' }}
        >
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field
            name="email"
            component={renderTextField}
            label="Email Address"
            style={{ paddingTop: '6%' }}
          />

          <Field
            name="password"
            type="password"
            component={renderTextField}
            label="Password"
            style={{ paddingTop: '6%' }}
          />
          {/*           
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container style={{ position: 'relative' }}>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
      <Box mt={8} style={{ position: 'relative' }}>
        <Copyright />
      </Box>
    </Container>
  );
};
export default reduxForm({
  form: 'SignIn', // a unique identifier for this form
})(SignIn);
// export default SignIn
