import React from 'react'
import { Box, Button, Center, Text } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
import { Image } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react"
import { MdAddComment } from 'react-icons/md';
import ReviewScrollContent from './ReviewScrollContent';
const SixthSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={"5xl"} color={"#013a63"}>Your #1 paper writing service</Text>
            <Text mx={"24"} fontSize={"md"} fontWeight={"md"} color={"#013a63"} textAlign={"center"} >Here is what our expert essay writers can help you with.</Text>
           
          <HStack bg={"blue.50"} w={"full"} rounded={"xl"} py={"4"}>
            <VStack>
                <Text></Text>
            </VStack>
          </HStack>

            <Center>
                <Button border={"2px"} color={"white"} bg={"#013a43"} >
                    Find your writer
                </Button>

            </Center>




        </Box>
    )
}

export default SixthSection
