import React from 'react'
import { Box, Button, Center, Link, Text } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
import {Image} from "@chakra-ui/react";
import {HStack, VStack} from "@chakra-ui/react"
import { MdAddComment } from 'react-icons/md';
const ThirdSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={["2xl","3xl","5xl"]} color={"#013a63"}>Work with a perfectly-fit essay writer online</Text>
            <Text mx={["4","6","24"]} fontSize={"md"} fontWeight={"md"} color={"#013a63"} textAlign={"center"} >Interested in a specific paper writer? Take a look at the writer's account to see their ratings, reviews, and order stats. Once you think they are the perfect fit, have them write paper for you.</Text>

            <Box mt={"20"} display={"flex"} flexDir={["column","column","column","row"]}  >

                <Box  pos={"relative"}   rounded={"2xl"} h={["200px","250px","250px","405px"]} w={["85%","100%","100%","65%"]}  border={"1px"}  borderColor={"gray.300"} marginRight={"6"} >
                    <Image pos={"absolute"} h={["170px","240px","250","400px"]} w={["92%","full","full","100%"]} bottom={"4"} right={"4"}  src={'asset/image.webp'} alt='image'/>
                </Box>

                 <Box w={["90%","100%","100%","35%"]} mt={["6", "6", "6","0"]}>
                    <VStack w={"full"} >
                        <HStack bg={"transparent"} _hover={{border:"0",bg:"white"}} border={"1px"} borderColor={"gray.300"}   w={"full"} rounded={"xl"} p={"4"} display={"flex"} alignItems={"flex-start"} justifyItems={"center"}>
                            <Text mt={"2"} fontSize={"xl"}> <MdAddComment/></Text>
                            <VStack>
                            <Text color={"#013a63"} fontWeight={"semibold"} fontSize={"lg"}> 1. Give us your essay writing instructions</Text>
                            <Text> To complete your write my essay request, our team needs few details concerning your order.Kindly fill this form to specify the kind of essay writing you seek and place your order</Text>
                            </VStack>
                           
                        </HStack>
                        <HStack bg={"transparent"}  _hover={{border:"0",bg:"white"}} w={"full"} border={"1px"} borderColor={"gray.300"} rounded={"xl"} my={"2"} p={"4"} display={"flex"} alignItems={"flex-start"} justifyItems={"center"}>
                            <Text mt={"1"} fontSize={"xl"}> <MdAddComment/></Text>
                            <VStack>
                            <Text color={"#013a63"} fontWeight={"semibold"} fontSize={"lg"}> 2. Hire your ideal writer online</Text>
                           
                            </VStack>
                           
                        </HStack>
                        <HStack bg={"transparent"}  w={"full"} border={"1px"} borderColor={"gray.300"} _hover={{border:"0", bg:"white"}} rounded={"xl"} p={"4"} display={"flex"} alignItems={"flex-start"} justifyItems={"center"}>
                            <Text mt={"1"} fontSize={"xl"}> <MdAddComment/></Text>
                            <VStack>
                            <Text color={"#013a63"} fontWeight={"semibold"} fontSize={"lg"}> 3. Get your paper writing done</Text>
                           
                            </VStack>
                           
                        </HStack>
                    </VStack>
                 </Box>


            </Box>

            <Center>
           <Link href='ContactUs'>
           <Button bg={'orange.500'} dropShadow={"lg"} px={"12"} py={"6"} my={"16"} color={"white"}>
                    Create an order
                </Button>
</Link>    
            </Center>




        </Box>
    )
}

export default ThirdSection
