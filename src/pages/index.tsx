import React, { useState } from 'react'
import { Box } from "@chakra-ui/react"
import Nav from '@/components/Nav'
import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import ScrollBarComp from '@/components/ScrollBarComp'
import ThirdSection from '@/components/ThirdSection'
import FourthSection from '@/components/FourthSection'
import FifthSection from '@/components/FifthSection'
import SixthSection from '@/components/SixthSection'
const index = () => {
  const [show, setShow] = useState(false)
  return (
    <Box h={""} bg={"#f5f5f5"} onScroll={() => setShow(true)}>
      <Nav />

      <Banner />


      <Hero />
      <ScrollBarComp />
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
    </Box>
  )
}

export default index
