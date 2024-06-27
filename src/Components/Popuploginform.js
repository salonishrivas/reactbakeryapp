import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import Loginform from '../Data/Loginform';
import Signupform from '../Data/Signupform';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

// popup form component template

export default function CustomizedDialogs({ children, value }) {
    // usecontext
    const { openpopupform } = useContext(AppContext);
    console.log("openpopupform", openpopupform);




    // const [open, setOpen] = React.useState(true);
    // console.log("=======", value);

    const navigatetohome = useNavigate();
    // handle close button click
    const handleClose = () => {
        // setOpen(false);
    };

    const [loginForm, setLoginForm] = useState('login');
    const [signupform, setSignupForm] = useState('signup')

    const switchForm = (formType) => {
        // console.log("ansewr:", switchForm);
        setLoginForm(formType);
    }

    return (
        <div>

            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title"
                open={openpopupform}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}> </BootstrapDialogTitle>
                <DialogContent >  {children}  </DialogContent>
                {
                    loginForm === "login" ? <Loginform onFormSwitch={switchForm} /> : <Signupform onFormSwitch={switchForm} />
                }

            </BootstrapDialog>

        </div>
    );
}

