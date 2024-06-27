import React from 'react'
import { Box, Typography } from '@mui/material'
import '../../Styles/footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from './logo.png'

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: "inherit" }} className="footercopyright" >
                <img src={logo} alt="bella olonje" className='footerlogo' />

                <Box className="footericons">
                    {/* footer icons */}
                    {/* <a href="https://twitter.com/?lang=en-in">  <TwitterIcon /> </a>  */}
                    <TwitterIcon />
                    <FacebookIcon />
                    <InstagramIcon />
                </Box>
                <Typography className='copyrighttext'>
                    Copyright &copy; 2020 Bella Olonje.com
                </Typography>
            </Box>
        </>
    )
}

export default Footer