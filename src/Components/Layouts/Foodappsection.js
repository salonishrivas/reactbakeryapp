import React from 'react'
// import headsectionimg from "./../Images/headersection.png"
import '../../Styles/foodappsection.css'

const Foodappsection = () => {
    return (
        <>
            <div className='headersection'>
                <div className='foodappcontent'>
                    <h3 className='foodapp'>Food app</h3>
                    <p className='foodquote'>Why stay hungry when you can order from Bella Onojie</p>
                    <p className='foodpara'>Download the bella onoje’s food app now on</p>
                    <div className='headsectionbutton'>
                        <button className='button playstorebtn'>Playstore</button>
                        <button className='button appstorebtn'>Appstore</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Foodappsection