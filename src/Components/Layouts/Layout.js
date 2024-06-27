import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'



const Layout = ({ children }) => {
 
    return (
        <>
            <Header />
            
            {/* usinglayout as repel container  */}
            {/* destructuring props.children directly */}
            <div> {children} </div>

            <Footer />
        </>
    )
}

export default Layout