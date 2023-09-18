import React from 'react'
import { Box, Button, Center, Text } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
const ScrollBarComp = () => {
  return (
    <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"5xl"} color={"#013a63"}>Top-notch essay writers in one place</Text>
      <Text mx={"24"} fontSize={"md"} fontWeight={"md"} color={"#013a63"} textAlign={"center"} >Welcome to a time-tested and student-trusted platform. Here we connect students like you, who are looking for quality essay help, with those, who can provide it. See the ratings of our essay writers and hire the one that fits your request best.</Text>

      <CSSReset />

      <OverflowScrollWithButton />
      <Center>
                <Button border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{borderColor:"gray.500"}}  dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                    Create a review
                </Button>

      </Center>
    </Box>
  )
}

export default ScrollBarComp
