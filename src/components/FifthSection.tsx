import React from 'react'
import { Box, Button, Center, Text } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
import { Image } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react"
import { MdAddComment, MdCheckCircleOutline, MdOutlineKeyboardAlt, MdOutlineSupportAgent } from 'react-icons/md';
import {TfiWrite} from "react-icons/tfi"
import {HiOutlineShieldCheck} from "react-icons/hi"
const FifthSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={["2xl","3xl","5xl"]}  color={"#013a63"}>The perks you get when using our essay writing service</Text>

            <Box mt={"20"} display={"flex"} flexDir={["column","column","row","row","row"]}  >

                <Box w={["95%","95%","50%"]} marginRight={["0","14"]} mx={["3", "3", "4","4","4"]}>
                    <VStack w={"full"} >
                        <VStack  w={"full"}  textAlign={"left"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                            <Text mt={"2"} fontSize={"3xl"} color={"#013a63"} > <TfiWrite /></Text>
                            <VStack w={"full"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                                <Text  color={"#013a63"} fontWeight={"bold"} fontSize={"xl"} my={""}> Original Writing</Text>
                                <Text> We know that students coming to our essay writing service expect us to provide them with original content. That's exactly what we do. We write a paper from scratch while following your instructions</Text>
                            </VStack>

                        </VStack>
                        <VStack  w={"full"}  textAlign={"left"} display={"flex"} my={"6"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                            <Text mt={"2"} fontSize={"3xl"} color={"#013a63"} > <MdOutlineKeyboardAlt /></Text>
                            <VStack w={"full"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                                <Text  color={"#013a63"} fontWeight={"bold"} fontSize={"xl"} my={""}>Unlimited Edit free of charge</Text>
                                <Text> We know that students coming to our essay writing service expect us to provide them with original content. That's exactly what we do. We write a paper from scratch while following your instructions</Text>
                            </VStack>

                        </VStack>
                        <VStack  w={"full"}  textAlign={"left"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                            <Text mt={"2"} fontSize={"3xl"} color={"#013a63"} > <MdOutlineSupportAgent /></Text>
                            <VStack w={"full"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                                <Text  color={"#013a63"} fontWeight={"bold"} fontSize={"xl"} my={""}>24/7 Support </Text>
                                <Text> We know that students coming to our essay writing service expect us to provide them with original content. That's exactly what we do. We write a paper from scratch while following your instructions</Text>
                            </VStack>

                        </VStack>
                        <VStack  w={"full"}  textAlign={"left"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                            <Text mt={"2"} fontSize={"3xl"} color={"#013a63"} > <HiOutlineShieldCheck /></Text>
                            <VStack w={"full"} display={"flex"} justifyItems={"flex-start"} alignItems={"flex-start"}>
                                <Text  color={"#013a63"} fontWeight={"bold"} fontSize={"xl"} my={""}> Security and Anonymity</Text>
                                <Text> We know that students coming to our essay writing service expect us to provide them with original content. That's exactly what we do. We write a paper from scratch while following your instructions</Text>
                            </VStack>

                        </VStack>
                        
                    </VStack>
                </Box>

                <Box pos={"relative"} rounded={"2xl"} h={"600px"} w={["95%","95%","50%"]} mt={["14", "12","12","0"]} mx={["3", "3", "4","4","6"]} border={"1px"} borderColor={"gray.300"}  >
                    <VStack bg={"white"} pos={"absolute"} w={"100%"} right={"4"} bottom={"4"} h={"600px"} border={"1px"} borderColor={"gray.300"} rounded={"xl"}>
                        <Text fontSize={"2xl"} py="4" fontWeight={"bold"} textAlign={"center"}>Prices Includes</Text>

                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>



                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>

                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>
                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>
                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>
                        <VStack fontSize={"md"} fontWeight={"semibold"} mt={"2"} w="full" px={"6"}>
                            <HStack display={"flex"} flexDir={"row"} color={"blue.600"} justifyContent={"space-between"} alignItems={"center"}  w={"full"} >
                                <HStack ><Text fontSize={"3xl"}><MdCheckCircleOutline /></Text>
                                    <Text>Turnitin Report</Text></HStack>
                                <HStack ><Text color={"gray.300"} >$15.00</Text>
                                    <Text color={"orange.500"}>Free</Text></HStack>
                            </HStack>

                            <Box h={"0.5"} w={"full"} my={"3"} bg={"gray.300"}></Box>
                        </VStack>
                    </VStack>
                </Box>




            </Box>

            <Center>
                <Button bg={'orange.500'} dropShadow={"lg"} px={"12"} py={"6"} my={"16"} color={"white"}>
                    Create an order
                </Button>

            </Center>




        </Box>
    )
}

export default FifthSection
