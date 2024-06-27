import * as React from 'react';
import "./../../../Styles/alluserprofile.css"
import { useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { useState } from 'react';
import { Backdrop, CircularProgress, Link } from '@mui/material';
import moment from 'moment/moment';


export default function Alluserprofile() {
  // manually printing time and date 

  const [date, setDate] = useState("2023-08-22")
  // console.log(date);

  // const [time, setTime] = useState("18:11.000Z")
  // console.log(time);

  const changeDate = () => {
    // let data = new Date("2023-08-22T12:47:41.000Z")
    let date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    setDate(date)
    console.log("======", date);
  }

  // const changeDate = (STRING) => {
  //   let data = new Date(STRING)
  //     data.setHours(data.getHours() + 5);
  //     data.setMinutes(data.getMinutes() + 30);
  //     return {
  //       date: data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear(),
  //       time: data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
  //     }
  //     // console.log("Welcome to Programiz!", data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
  //     // console.log("Welcome to Programiz!", data.getDate() + "-" + (data.getMonth() + 1) + "-" + data.getFullYear());
  // }


  const [open, setOpen] = React.useState(true);
  const closeonclick = () => {
    setOpen(!open);
  }

  const [beardata, setBeardata] = useState([]);
  useEffect(() => {

    let getallbeardata = axios.get("https://server-prod.nitecapp.io/api/drink_brand/get_all_drink_brand").then((response) => {
      // console.log("===", response)

      setOpen(false)
      setBeardata(response.data.data)

    })
  }, [])

  return (
    < >
      <div className='userdetailprofile'>

        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={closeonclick}>
          <CircularProgress color="inherit" />
        </Backdrop>

        {beardata.map((data) => {
          {
            {/* console.log("-----", data)   */ }
            {/* Date(data.createdAt ? data.createdAt : "2023-08-22T12:47:41.000Z")  */ }
          }
          return (

            <Card sx={{ maxWidth: 445 }} className='cardcss' key={data.drink_brand_id}>
              <CardMedia sx={{ height: 330 }} title="food food" image={data.image} />

              <CardContent >
                <Typography gutterBottom variant="h6" component="div">{data.drink_brand_name}</Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Founded on : {data.founding_date}
                </Typography>

                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Location : {data.location}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {data.type}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {data.notes}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {data.tagline}
                </Typography>

                <Typography sx={{ textAlign: "justify" }}>{data.description ? data.description.slice(0, 200) : ""}...</Typography>



              </CardContent>
              
              <Typography color="text.secondary" gutterBottom> {data.createdAt} </Typography>

              <CardActions className='cardaction'>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Created At: {data.createdAt ? data.createdAt : moment().format('Do MMMM YYYY, h:mm:ss a')}
                </Typography>
                <a href={data.website} target='_blank' className="beardatalink">Read More</a>
              </CardActions>

            </Card>

          )
        })}
      </div>
    </>
  );
}



{/* <Typography gutterBottom variant="h6" component="div"> drink_brand_name  </Typography>
<Typography variant="body2" color="text.secondary"> founding_date </Typography>
<Typography variant="body2" color="text.secondary"> website </Typography>
<Typography variant="body2" color="text.secondary"> notes </Typography>
<Typography variant="body2" color="text.secondary"> location  </Typography>
<Typography variant="body2" color="text.secondary"> description  </Typography>
<Typography variant="body2" color="text.secondary"> type  </Typography>
<Typography variant="body2" color="text.secondary"> tagline  </Typography>
<Typography variant="body2" color="text.secondary"> description  </Typography>
<Typography variant="body2" color="text.secondary"> isActive   </Typography>
<Typography variant="body2" color="text.secondary">  createdAt  </Typography>
<Typography variant="body2" color="text.secondary"> updatedAt  </Typography> */}
// "founding_date": "01/17/1905",
// "drink_brand_id": 1,
// "drink_brand_name": "Penfolds “Max’s,” South Australia",
// "website": "http://www.drinkbrand.com",
// "notes": "",
// "image": "https://lh3.googleusercontent.com/iieeOCOLbCPojohDDy7c2LSloVIsRR0j1Xs-VtxAMU3ut6ALxFmjkv8C8vYmKK40Csz4ZKjIO7I2AiK9lCCuBAm33D8=w500-rw",
// "location": "Adelaide, Australia",
// "description": "Penfolds Max’s Cabernet Sauvignon is a tribute to former Chief Winemaker, Max Schubert 1948-1975, a legend in Penfolds history. Max’s constant pursuit of excellence paved the way for those who followed in his footsteps and also allowed the status and heri",
// "type": null,
// "tagline": "",
// "isActive": true,
// "createdAt": "2023-04-18T07:18:11.000Z",
// "updatedAt": "2023-04-18T07:18:11.000Z"

