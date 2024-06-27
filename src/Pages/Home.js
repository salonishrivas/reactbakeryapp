import React, { useState } from 'react'
import Foodappsection from '../Components/Layouts/Foodappsection'
import Mobilelogosection from '../Components/Layouts/Mobilelogosection'
import Appdata from '../Components/Layouts/Appdata'
import Downloadappsection from '../Components/Layouts/Downloadappsection'
import CustomizedDialogs from '../Components/Popuploginform'
// import LoadingBar from 'react-top-loading-bar'
// import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';


const Home = () => {

  const [status, setstatus] = useState(false)

  let token = localStorage.getItem("token")

  setTimeout(() => {
    // popupform will hide when user logged in
    !token && setstatus(true)

  }, 5000);


  return (

    <div>
      {/* popupform ui */}
      

      {status && <CustomizedDialogs />}

      <Foodappsection />
      <Mobilelogosection />
      <Appdata />
      <Downloadappsection />

    </div>
  )
}

export default Home