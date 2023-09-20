import { Box, Button, CSSReset, Center, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ReviewScrollContent from './ReviewScrollContent'
import NinthScrollContent from './NinthScrollContent'

const NinthSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"32"}>
            <Box w={"95%"} pos={"relative"} mx={"auto"} border={"2px"} borderColor={"#013a63"} rounded={"3xl"} h={"90vh"}>
                <Box pos={"absolute"} w={"full"} mx={"auto"} bg={"#013a63"} rounded={"3xl"} top={"-6"} left={"-6"} h={"90vh"}>

                    <Image w="full" h={"full"} src='asset/bgImg.svg' alt='background-image'></Image>
                    <Box pos={"absolute"} top={"1"} p={"16"} color={"white"}>
                        <Text textAlign={"center"} fontWeight={"bold"} fontSize={"5xl"} color={"white"}>Essay writing service that protects your identity</Text>
                        <Text fontSize={"lg"} my={"6"}>
                            Getting paper writing help is not a shameful practice, yet we understand the wish of our clients when it comes to keeping this secret. Therefore, respectfully, we have implemented encryption of the highest levels and only employ world-renewed payment gateways, so that both your identity and card information is in safe hands. Say "help write my essay" knowing, that you won't get exposed and that your data won't be sold to frisky third parties such as ad agencies or even universities.


                        </Text>
                        <Text fontSize={"lg"}>
                            Hire essay writers and work with real pros, improve your academic performance, and have access to a unique set of bonuses.
                        </Text>
                        <Center>
                            <Button bg={'orange.500'} dropShadow={"lg"} px={"12"} py={"6"} my={"6"} color={"white"}>
                                Create an order
                            </Button>

                        </Center>

                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default NinthSection
