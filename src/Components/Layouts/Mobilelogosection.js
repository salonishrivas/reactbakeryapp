import React from 'react'
import "./../../Styles/mobilelogosection.css"
import mobileimage from "./../Images/Group 53.png"
// import Divider from '@mui/material/Divider';



const Mobilelogosection = () => {
    return (
        <>

            <div className='mobileimgsection'>
                <div className='mobileappimage'>
                    <img src={mobileimage} alt="mobileappimage" />
                </div>
            </div>
        </>
    )
}

export default Mobilelogosection