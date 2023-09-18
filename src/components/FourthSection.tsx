import React from 'react'
import { Box, Button, Center, Text } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
import { Image } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react"
import { MdAddComment } from 'react-icons/md';
import ReviewScrollContent from './ReviewScrollContent';
const FourthSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"5xl"} color={"#013a63"}>What clients say about our writing service</Text>
            <Text mx={"24"} fontSize={"md"} fontWeight={"md"} color={"#013a63"} textAlign={"center"} >Check out the latest feedback from learners who use our essay writing services.</Text>
           
           <HStack display={"flex"} flexDir={"row"} mt={"10"} alignItems={"center"} justifyContent={"center"}>
           <HStack border={'1px'} px={"12"} py={"3"} borderColor={"#013a63"} rounded={"xl"}>
                <Text>Reviews</Text>
                <Image boxSize={"10"} src={"asset/projicxy.svg"} alt={"logo"} />
            </HStack>
            <HStack border={'1px'} px={"12"} py={"3"} mx={"2"} borderColor={"#013a63"} rounded={"xl"}>
                <Text>Reviews</Text>
                <Image boxSize={"10"} src={"asset/projicxy.svg"} alt={"logo"} />
            </HStack>
            <HStack border={'1px'} px={"12"} py={"3"} borderColor={"#013a63"} rounded={"xl"}>
                <Text>Reviews</Text>
                <Image boxSize={"10"} src={"asset/projicxy.svg"} alt={"logo"} />
            </HStack>
           </HStack>
           <Box>
            <CSSReset/>
            <ReviewScrollContent/>
           </Box>

            <Center>
                <Button border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{borderColor:"gray.500"}}  dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                    Create a review
                </Button>

            </Center>




        </Box>
    )
}

export default FourthSection
