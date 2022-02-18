<<<<<<< Updated upstream
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Footer from './layouts/Footer';
=======
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { withCookies } from "react-cookie";

import {
    Avatar,
    Button,
    Box,
    Checkbox,
    CircularProgress,
    Dialog,
    DialogTitle,
    FormControlLabel,
    Grid,
    IconButton,
    InputAdornment,
    Link,
    Paper,
    Typography,
    TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import Footer from "./layouts/Footer";

>>>>>>> Stashed changes
import {
  freshState,
  signIn,
  validateEmail,
  validatePassword,
  showPassword,
  disableSubmit
} from '../actions/userAuthActions';

const SignIn = (props) => {
  const navigate = useNavigate();

<<<<<<< Updated upstream
  // Check requestError, if false then navigate to dashboard page
  useEffect(() => {
    if (props.requestError === false) {
      const timer = setTimeout(() => {
        navigate('/dashboard');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [props.requestError]);
=======
    useEffect(() => {
        const { cookies } = props;
        // Make a cookie for userAuth, so that the values can be retrieved on site refresh
        cookies.set("userAuth", props.userAuth , { path: "/" });
    }, [props.userAuth]);

    // Check requestError, if false then navigate to dashboard page
    useEffect(() => {
        if (props.requestError === false) {
            const timer = setTimeout(() => {
                if (props.userAuth.is_admin === "1") {
                    navigate("/categories");
                }else {
                    navigate("/dashboard");
                }
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [props.requestError]);
>>>>>>> Stashed changes

  // This will run, if there is changes in the state
  useEffect(() => {
    // Enable the submit button if no errors in fields
    if (props.isValidEmail && props.isValidPassword ) {
      props.disableSubmit(false);
    }
  }, [props]);

  const navigateToSignUp = (e) => {
    e.preventDefault();

    props.freshState();
    navigate('/sign-up');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // This is for the email and password inputted data
    const data = new FormData(event.currentTarget);

    props.signIn(data);
  };

  // Toggle Show Password
  const handleShowPassword = () => {
    props.showPassword(props.isShownPass);
  };

<<<<<<< Updated upstream
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      {props.requestError === false ? (
        <Dialog
          fullWidth
          open={true}
          maxWidth="xs"
          sx={{ marginTop: '-5%', backdropFilter: 'blur(5px)' }}
          align="center"
        >
          <DialogTitle>
            Signing In...
            <CircularProgress
              color="primary"
              sx={{
                float: 'right',
                marginRight: '90px',
                marginTop: '-5px'
              }}
            ></CircularProgress>
          </DialogTitle>
        </Dialog>
      ) : null}
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(images/bg-6.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar
            sx={{
              width: '200px',
              height: '200px',
              marginBottom: '-30px',
              marginTop: '-50px'
            }}
            src="images/e-learning.png"
          ></Avatar>
          <Typography component="h1" variant="h5" sx={{ marginTop: '-40px' }}>
            Sign in
          </Typography>
          <Typography component="h6" variant="h6" style={{ color: 'red' }}>
            {props.requestErrorMessage}
            &nbsp;
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ marginTop: '10px' }}
          >
            <TextField
              onKeyUp={(e) => {
                props.validateEmail(e.target.value);
              }}
              id="email"
              type="email"
              helperText={props.emailError === '' ? ' ' : props.emailError}
              error={props.emailError === '' ? false : true}
              margin="dense"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              InputLabelProps={{ required: false }}
              autoComplete="off"
            />
            <TextField
              onKeyUp={(e) => {
                props.validatePassword('signIn', e.target.value);
              }}
              helperText={
                props.passwordError === '' ? ' ' : props.passwordError
              }
              error={props.passwordError === '' ? false : true}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputLabelProps={{ required: false }}
              autoComplete="off"
              type={props.isShownPass === false ? 'password' : 'text'}
              defaultValue={props.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
=======
    return (
        <Grid container component="main" sx={{ height: "100vh" }}>
            {props.requestError === false ? (
                <Dialog
                    fullWidth
                    open={true}
                    maxWidth="xs"
                    sx={{ marginTop: "-5%", backdropFilter: "blur(5px)" }}
                    align="center"
                >
                    <DialogTitle>
                        Signing In...
                        <CircularProgress
                            color="primary"
                            sx={{
                                float: "right",
                                marginRight: "90px",
                                marginTop: "-5px",
                            }}
                        ></CircularProgress>
                    </DialogTitle>
                </Dialog>
            ) : null}
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: "url(images/bg-6.jpeg)",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: (t) =>
                        t.palette.mode === "light"
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            width: "200px",
                            height: "200px",
                            marginBottom: "-30px",
                            marginTop: "-50px",
                        }}
                        src="images/e-learning.png"
                    ></Avatar>
                    <Typography
                        component="h5"
                        variant="h5"
                        sx={{ marginTop: "-40px" }}
                    >
                        Sign in
                    </Typography>
                    <Typography
                        component="h6"
                        variant="h6"
                        style={{ color: "red" }}
>>>>>>> Stashed changes
                    >
                      {props.isShownPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={props.isSubmitDisabled}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="" variant="body2" onClick={navigateToSignUp}>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
            <Footer sx={{ mt: 5, mb: '-30px', pt: 0, pb: 0 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

<<<<<<< Updated upstream
const mapToStateProps = (state) => {
  return {
    emailError: state.auth.emailError,
    password: state.auth.password,
    passwordError: state.auth.passwordError,
    isValidEmail: state.auth.isValidEmail,
    isValidPassword: state.auth.isValidPassword,
    requestError: state.auth.requestError,
    requestErrorMessage: state.auth.requestErrorMessage,
    isShownPass: state.auth.isShownPass,
    isSubmitDisabled: state.auth.isSubmitDisabled
  };
};

export default connect(mapToStateProps, {
  freshState,
  signIn,
  validateEmail,
  validatePassword,
  showPassword,
  disableSubmit
})(SignIn);
=======
const mapToStateProps = (state, ownProps) => {
    return {
        emailError: state.auth.emailError,
        password: state.auth.password,
        passwordError: state.auth.passwordError,
        isValidEmail: state.auth.isValidEmail,
        isValidPassword: state.auth.isValidPassword,
        requestError: state.auth.requestError,
        requestErrorMessage: state.auth.requestErrorMessage,
        isShownPass: state.auth.isShownPass,
        isSubmitDisabled: state.auth.isSubmitDisabled,
        userAuth: state.auth.userAuth,
        cookies: ownProps.cookies,
    };
};

export default withCookies(
    connect(mapToStateProps, {
        freshState,
        signIn,
        validateEmail,
        validatePassword,
        showPassword,
        disableSubmit,
    })(SignIn)
);
>>>>>>> Stashed changes
