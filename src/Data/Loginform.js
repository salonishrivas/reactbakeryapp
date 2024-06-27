import { Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import "./../Styles/loginform.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import logo from "./../Components/Layouts/Bella_Olonje_logo.png"
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom'




const Loginform = (props) => {
  // loader function
  const [open, setOpen] = React.useState(false);

  // navigation
  const navigate = useNavigate();


  //functionality for login 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitData = async (e) => {
    e.preventDefault();

    setOpen(true)

    let signin = await axios.post("https://ecom-backend-z87b.onrender.com/user/signin",
      {
        email: email,
        password: password
      })

    //-----------------------storing token in local storage-------------------
    if (signin.data.status) {
      // loader stops when condition
      setOpen(false)
      // storing token in local storage
      localStorage.setItem("token", signin.data.token)
      window.location.reload();

      // storing  in local storage
      localStorage.setItem("user", JSON.stringify(signin.data.user))

      // page redirect to home 
      navigate('/');
      // toster notification will show welcome msg
      toast.success('Welcome :) ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }


    else {

      // toster notification  will show error msg
      toast.error('Incorrect Credentials !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }
    // navigate('/');


  }



  return (

    <Grid className='loginform'>

      <Paper elevation={0} className='loginformstyling'>

        <Paper className='loginsignupdiv'>
          <Typography className='bellaloginlogo'>
            <img src={logo} alt="bella olonje" />
          </Typography>

          <Box className="login">
            <Typography className='onLogin' onClick={() => props.onFormSwitch('login')} >Login</Typography>
            <Typography className='onSignup' onClick={() => props.onFormSwitch('signup')} >SignUp</Typography>
          </Box>
        </Paper>

        <Box className="textfieldarea">
          <TextField id="email" label="Email address" variant="standard" placeholder='abc123@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="password" label="Password" variant="standard" placeholder='********' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormGroup className='checkboxremem'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" className='rememberme' />
          </FormGroup>


          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} >
            <CircularProgress color="inherit" />
          </Backdrop>
          <button className=' btn btnlogin' type='submit' onClick={handleSubmitData}> Login  </button>




          {/* <Typography> <a href="/ ">Forgot Password ?</a> </Typography> */}
          <Typography>Don't have an account ?<a onClick={() => props.onFormSwitch('signup')} className='signuplink'> Sign Up </a> </Typography>
        </Box>
      </Paper>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Grid>
  )
}

export default Loginform