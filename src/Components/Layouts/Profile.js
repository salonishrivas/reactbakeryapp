import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './../../Styles/profile.css'
import PasswordIcon from '@mui/icons-material/Password';
import ChangePassword from './Profile/ChangePassword';
import { Card, CardMedia } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';






export default function AccountMenu() {

    //    get name and email on miniprofile
    const [Printuser, setPrintuser] = useState({});


    // logout fuction
    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }





    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {

        // onclick profile icon user detail show
        let userdata = JSON.parse(localStorage.getItem('user'));
        setPrintuser(userdata);

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            // width: 32,
                            // height: 32,
                            // ml: -0.5,
                            // mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            // width: 10,
                            // height: 10,
                            // bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <Card sx={{ height: 100, width: 400 }} className='miniavatar'>
                    {/* <CardMedia sx={{ height: 140 }} lassName='miniavatarBg'/> */}

                    {/* <Typography textAlign={'center'}></Typography>
                    <Typography textAlign={'center'}>email</Typography> */}

                </Card>
                <Avatar className=' mini_avatar' />
                <Typography textAlign={'center'} className='miniText'>

                    <Typography className='avatarname'>{Printuser.name}</Typography>
                    <Typography className='avataremail'>{Printuser.email}</Typography>
                    <Typography className='avataraddress'>{Printuser.contact}</Typography>
                    {/* <Typography className='avatarcontact'>{Printuser.address}</Typography> */}



                </Typography>

                <MenuItem onClick={handleClose}>
                    <Avatar />
                    <Link to="/allprofile"> All Profiles </Link>
                </MenuItem>

                {/* <MenuItem onClick={handleClose}>
                    <PasswordIcon />
                    <a href="/changepassword"> Change Password </a>
                </MenuItem> */}

                <Divider />
                {/* <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    <a href=" /alluseraccount"> All User Accounts </a>
                </MenuItem> */}

                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}
