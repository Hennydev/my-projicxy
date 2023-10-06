import React from 'react'
import { Box, Button, Center, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { CSSReset } from '@chakra-ui/react';
import OverflowScrollWithButton from './Scroller';
import { Image } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react"
import { MdAddComment } from 'react-icons/md';
import ReviewScrollContent from './ReviewScrollContent';
import { CiEdit } from "react-icons/ci"
const SixthSection = () => {
    return (
        <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"} fontSize={["2xl","4xl"]} color={"#013a63"}>Your #1 paper writing service</Text>
            <Text mx={["6","24"]} fontSize={"md"} fontWeight={"md"} color={"#013a63"} textAlign={"center"} >Here is what our expert essay writers can help you with.</Text>

            <HStack pos={"relative"} display={["flex","flex","flex", "block"]} flexDir={["column", "column","column", ""]} bg={"gray.200"} w={"100%"} px={"2"} rounded={"xl"} py={"12"} my={"14"}>
                <VStack  pos={[,"","absolute"]} bottom={["","12"]}  left={["","-4"]} shadow={"2xl"}  py={["8","8","6"]} bg={"white"} w={["95%","95%","95%","28%"]} px={"6"} border={"1px"} borderColor={"gray.200"} rounded={"2xl"}>
                    <Box fontSize={"6xl"} fontWeight={"bold"} color={"#013a63"}><CiEdit /></Box>
                    <Box py={"3"} fontWeight={"semibold"} w={"full"}  border={"2px"} textAlign={"center"} px={"4"} borderColor={"gray.300"} _hover={{borderColor:"#013a63"}} color={"#013a63"} rounded={"md"}>Paperwork</Box>
                    <Box py={"3"} fontWeight={"semibold"} w={"full"}  border={"2px"} textAlign={"center"} borderColor={"gray.300"} _hover={{borderColor:"#013a63"}} px={"4"} color={"#013a63"} rounded={"md"}>Coursework/Homework</Box>
                    <Box py={"3"} w={"full"} fontWeight={"semibold"}  border={"2px"} borderColor={"gray.300"} _hover={{borderColor:"#013a63"}} textAlign={"center"} px={"4"} color={"#013a63"} rounded={"md"}>Other assignment</Box>
                </VStack>
                <Box display="flex" justifyContent={["center","center","center","space-between"]} ml={{sm:"0", md:"72"}} flexDir={["column","column","column","row"]} alignItems={"center"} w={["95%","95%","95%","70%"]} mt={{sm:"6",md:"0"}}>
                <UnorderedList >
                    <ListItem>Essay</ListItem>
                    <ListItem>Case Study</ListItem>
                
                    <ListItem>Research</ListItem>
                    <ListItem>Presentation or speech</ListItem>
                    <ListItem>Annotated bibliography</ListItem>
                    <ListItem>Article review</ListItem>
                    <ListItem>Presentation or speech</ListItem>
             
                    <ListItem>Article review</ListItem>
                </UnorderedList>
                <UnorderedList >
                    <ListItem>Literature Review</ListItem>
                    <ListItem>Book / movie review</ListItem>
                    <ListItem>Editing and proofreading</ListItem>
                    <ListItem>Thesis / dissertation</ListItem>
                    <ListItem>Research proposal </ListItem>
                    <ListItem>Editing and proofreading</ListItem>
                    <ListItem>Thesis / dissertation</ListItem>
                    <ListItem>Research proposal </ListItem>
                </UnorderedList>
                <UnorderedList>
                    <ListItem>Admission essay</ListItem>
                    <ListItem>Creative writing</ListItem>
                    <ListItem>Critical thinking / review</ListItem>
                    <ListItem>Book reviews</ListItem>
                    <ListItem>Creative writing</ListItem>
                    <ListItem>Critical thinking / review</ListItem>
                    <ListItem>Book reviews</ListItem>

                </UnorderedList>
                </Box>
                
            </HStack>


            <Center>
                <Button border={"2px"} px={"8"} py={"4"} color={"white"} bg={"#013a43"} >
                    Find your writer
                </Button>

            </Center>




        </Box>
    )
}

export default SixthSection
