import { Avatar, Box, Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FaceIcon from '@mui/icons-material/Face';
import "./../Styles/signupform.css"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import logo from "./../Components/Layouts/Bella_Olonje_logo.png"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



const Signupform = (props) => {

  //functionality for login / signup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');


  const handleSubmitData = async (e) => {
    // stops reloading
    e.preventDefault();

    let signupresult = await axios.post("https://ecom-backend-z87b.onrender.com/user/signup",
      {
        name: name,
        email: email,
        password: password,
        contact: contact,

      })
    console.log("---------------", {
      name: name,
      email: email,
      password: password,
      contact: contact,

    })
    console.log("signup-------", signupresult)

    if (signupresult.data.status) {

      // localStorage.setItem("token", signupresult.data.token)
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
  }

  // const updatePassword = async (e) => {

  //   e.preventDefault();

  //   let update = await axios.post("https://ecom-backend-z87b.onrender.com/user/updatepassword",
  //     {
  //       email: email,
  //       password: password
  //     })
  // }


  //------------------------------------------


  return (
    <Grid className='signupform' sx={{}}>
      <Paper elevation={0} sx={{}} className='signupformstyling'>

        <Paper className='signupdiv '>
          <Typography className='bellaloginlogo'>
            <img src={logo} alt="bella olonje" />
          </Typography>

          <Box className="signupBox">
            <Typography className='onLogin' onClick={() => props.onFormSwitch('login')} >Login</Typography>
            <Typography className='onSignup' onClick={() => props.onFormSwitch('signup')} >SignUp</Typography>
          </Box>
        </Paper>

        <Box className="signuptextfieldarea">

          <TextField id="name" label="Name" variant="standard" placeholder='abc' type='name' value={name} onChange={(e) => setName(e.target.value)} />
          <TextField id="email" label="Email address" variant="standard" placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField id="password" label="Password" variant="standard" placeholder='********' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextField id="contact" label="Contact" variant="standard" placeholder='1234567890' type='contact' value={contact} onChange={(e) => setContact(e.target.value)} />

          <button className=' btn btnlogin signupbtn' type='submit' onClick={handleSubmitData}> Sign Up </button>
          <Typography >Already have an account ?<a onClick={() => props.onFormSwitch('login')} className='loginlink'> Login </a> </Typography>

        </Box>

      </Paper>
      <ToastContainer />
    </Grid>
  )
}

export default Signupform