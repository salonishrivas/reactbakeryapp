import { Box, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import appdata from './../../Data/Appdatafile.js'
import './../../Styles/appdata.css'

const Appdata = () => {
    return (
        <>
            <Box className='appheadline'>
            <Divider variant='middle' className='divider'/>

                <Typography className='howappworks'>How the app works </Typography>
            </Box>
            <Box className="applicationdata">
                {appdata.map((data) => (

                    <Box className="appdetail">
                        { }
                        <CardMedia className='appuiimgs' id={data.appdetails.order[0]} component={'img'} src={data.image} alt={data.image} />
                        <CardContent className='applogindetails' id={data.appdetails.order[1]}>
                            {/* <Typography className='appdetailclass'> {data.appdetails} </Typography> */}
                            <Typography className='topheadline'> {data.appdetails.topheadline} </Typography>
                            <Typography className='description' > {data.appdetails.description} </Typography>
                            <Typography className='detail'> {data.appdetails.detail} </Typography>
                        </CardContent>
                    </Box>

                ))}
            </Box>
        </>
    )
}

export default Appdata