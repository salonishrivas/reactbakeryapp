import { AppBar, Box, Button, DialogContent, Drawer, IconButton, Toolbar, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import logo from "./logo.png";
import '../../Styles/headerMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import Popuploginform from './../Popuploginform'
import Profile from './../Layouts/Profile'
import { Link } from 'react-router-dom';




const Header = () => {
  const [token, setToken] = useState(false)

  // on login, check token if user exist
  useEffect(() => {
    let tokenValue = localStorage.getItem("token")

    // token gets valuethen it runs true
    tokenValue && setToken(true)

  }, [])


  // function for menubar on mobile view 
  //handle menu click
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {

    setMobileOpen(!mobileOpen)
  }



  //login / signup button onclick
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {

    setOpen(true);

  };

  const handleClose = () => {

    setOpen(false);

  };


  // onclick profile icon


  //on mobile view
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

      <Typography sx={{ flexGrow: 1 }} component="header-div">
        <img src={logo} alt="bella olonje" />
      </Typography>

      {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
      <ul className='mobile-navigation'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/product"}>Product</Link>

        </li>
        <li>
          <Link to={"/Faq"}>Faq</Link>

        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>

        </li>
        <li>
          {/* on login profile icon show , else login/signup button */}
          {!token ? <Button variant="outlined" onClick={handleClickOpen}> login/signup </Button> : <Profile />}

          {open && <Popuploginform value={setOpen} />}
        </li>

      </ul>
      {/* </Box> */}
    </Box>
  )

  return (
    <>

      <Box>

        <AppBar component={"nav"} sx={{ bgcolor: 'white' }}>

          <Toolbar>
            {/* -----drawer: collapse navbar----- */}
            <IconButton aria-label='open drawer' edge='start' sx={{ mr: 2, display: { sm: 'none' }, }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ flexGrow: 1 }} component="div" className='headerlogo'>
              <img src={logo} alt="bella olonje" />
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/product"}>Product</Link>
                </li>
                <li>
                  <Link to={"/Faq"}>Faq</Link>
                </li>
                <li>
                  <Link to={"/Contact"}>Contact</Link>
                </li>
                <li>
                  {/* on login profile icon show , else login/signup button */}
                  {!token ? <Button variant="outlined" onClick={handleClickOpen}> login/signup </Button> : <Profile />}

                  {open && <Popuploginform value={setOpen} />}

                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                width: '260px',
                boxSizing: "border-box"
              },
            }}>
            {drawer}
          </Drawer>
        </Box>
        {/* back text=food food will not be hidden*/}
        <Box sx={{ p: 2 }}>
          <Toolbar />
        </Box>
      </Box>

    </>
  )
}

export default Header