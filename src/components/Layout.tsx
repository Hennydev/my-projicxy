import React, { useState } from 'react'
import {Box} from "@chakra-ui/react"
import Nav from './Nav'
import Footer from './Footer'
const Layout = ({children}) => {
    const [show, setShow] = useState(false)
  return (
    <Box h={""} bg={"#f5f5f5"} onScroll={() => setShow(true)}>
        <Nav />
        {children}
        <Footer/>
    

    </Box>
  )
}

export default Layout
