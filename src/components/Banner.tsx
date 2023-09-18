import React from 'react'
import {Box, Text} from "@chakra-ui/react"
const Banner = () => {
  return (
    <Box pt={"24"}>
      <Box   roundedBottomEnd={"xl"} roundedBottomLeft={"xl"}   bg={"gray.200"} display={["none", "none", "flex"]} alignItems={["center"]} justifyContent={"center"} py={"2"} w={{sm:"90%", md:"80%",lg: "80%", xl:"75%"}} mx={"auto"}>
        <Text textAlign={"center"} fontSize={"sm"}>
            Want to save your precious time but still get high-quality work?
        </Text>
        <Box ml={"2"} px={"3"} py={""} border={"2px"} fontSize={"sm"} borderColor={"orange.500"} textAlign={"center"}>
            Definitely YES!
        </Box>

    </Box>
    </Box>
    
  )
}

export default Banner
