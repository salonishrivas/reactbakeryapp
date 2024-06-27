import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './ProfileCss/changepassword.css'

const ChangePassword = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changePassword = async (e) => {
        e.preventDefault();

        // ----------------applying post api -------------------------
        let updatedpass = await axios.post("https://ecom-backend-z87b.onrender.com/user/updatepassword",
            {
                email: email,
                password: password
            })
        console.log("---------------", {
            email: email,
            password: password
        })
        console.log("----------login-----", updatedpass)


        //-----------------------storing token in local storage-------------------
        if (updatedpass.data.status) {

            // localStorage.setItem("token", result.data.token)
            // toster notification will show welcome msg

            toast.success('Password Changed Successfully :)', {
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

            toast.error('Try Again !', {
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

        // console.log(result.data.token, "--------ssss-------")

    }


    return (


        <div>
            <Box >
                <Grid className='change_password_section' >

                    <Paper elevation={0} className='textsection' >

                        <Paper className='loginsignupdiv'>
                            <Typography className='bellaloginlogo'>

                            </Typography>


                            <Typography>Change Password</Typography>
                            <p>enter your registered email</p>

                        </Paper>

                        <Box className="textfieldarea">
                            <TextField id="email" label="Email address" variant="standard" placeholder='abc@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField id="changepassword" label="ChangePassword" variant="standard" placeholder='********' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />


                        </Box>
                        <button className=' btn btnlogin' type='submit' onClick={changePassword}> Login  </button>
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
            </Box>
        </div>
    )
}

export default ChangePassword