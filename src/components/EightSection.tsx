import { CardBody, Card, CardFooter, CardHeader,Heading,  Box, CSSReset, HStack, Image, Text, Button, Center } from '@chakra-ui/react'
import React from 'react'
import ReviewScrollContent from './ReviewScrollContent'

const EightSection = () => {
  return (
    <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
            <Text textAlign={"center"} fontWeight={"bold"}  fontSize={"5xl"} color={"#013a63"}>Follow our paper writing service on social media for the latest news, tips, and more</Text>
           
           
           <HStack display={"flex"} flexDir={"row"} mt={"10"} alignItems={"center"} justifyContent={"center"}>
           <Card w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} bg="transparent" border={"1px"} borderColor={"gray.200"} rounded={"2xl"}>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
             <Center>
                <Button border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{borderColor:"gray.500"}}  dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                    Create a review
                </Button>

            </Center>
            </CardFooter>
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} mx={"4"}  bg="transparent" border={"1px"}  rounded={"2xl"} borderColor={"gray.200"}>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
             <Center>
                <Button border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{borderColor:"gray.500"}}  dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                    Create a review
                </Button>

            </Center>
            </CardFooter>
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'> Customer dashboard</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter>
             <Center>
                <Button border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{borderColor:"gray.500"}}  dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                    Create a review
                </Button>

            </Center>
            </CardFooter>
          </Card>
           </HStack>
          

           




        </Box>
  )
}

export default EightSection
