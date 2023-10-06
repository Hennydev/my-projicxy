import { Box, Button, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { ImQuotesLeft, ImQuotesRight, ImStarFull } from "react-icons/im"
import { RxRocket } from 'react-icons/rx'
import {RiTaskLine} from 'react-icons/ri'
import { MdOutlineFlag, MdOutlinePlagiarism } from 'react-icons/md'

const Hero = () => {
    return (
        <Box bgImage="url('asset/bgImg.svg')"
            bgPosition="cover"
            bgRepeat="repeat"
            mx={"auto"}
            w={{sm:"90%", md:"80%",lg: "75%", xl:"75%"}} >

            <HStack   mx={"auto"} display={"flex"}  py={"4"} flexDir={["column","column","row"]} alignItems={["center"]} justifyContent={[""]}  my={"4"}>
                <VStack w={["90%","90%","90%","60%"]} display={"flex"} flexDir={"column"} alignItems={"flex-start"} mr={""}>
                    <Text fontSize={["3xl","4xl","5xl"]} lineHeight={""}  fontWeight={"bold"}>
                        From stress to success – hire a pro essay writer!
                    </Text>
                    <Text fontSize={["lg","lg","xl"]} lineHeight={""} fontWeight={"semibold"}>
                        Trust your assignments to an essay writing service with the fastest delivery time and fully original content.
                    </Text>
                    <Button px={"10"} py={"6"} _hover={{ bg: "" }} my={"6"} color={"white"} bg={"#013a63"} rounded={"xl"}><Link href='ContactUs'>Write My Paper</Link></Button>
                </VStack>
                <VStack w={"40%"}  display={["none","none","none","flex"]} flexDir={"column"} alignItems={"flex-end"} justifyContent={"flex-end"}> 
                    <VStack display={["none","none","none","flex"]} >
                        <HStack w={"55%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <Text color={"#013a63"} fontSize={"4xl"} fontWeight={"bold"}><ImQuotesLeft /></Text>
                            <Image h={"16"} w={"18"} src='asset/rimg.png' alt='avatar' />
                        </HStack>

                        <Box w={"60%"} px={"4"} py={"4"} border={"2px"} borderColor={"#013a63"} roundedBottom={"3xl"} roundedTopLeft={"3xl"} borderRight={""}>
                            <HStack>
                                <Text color={"yellow.300"} fontWeight={"bold"} >
                                    <ImStarFull />
                                </Text>
                                <Text color={"yellow.300"} fontWeight={"bold"} >
                                    <ImStarFull />
                                </Text>
                                <Text color={"yellow.300"} fontWeight={"bold"} >
                                    <ImStarFull />
                                </Text>
                                <Text color={"yellow.300"} fontWeight={"bold"} >
                                    <ImStarFull />
                                </Text>
                                <Text color={"yellow.300"} fontWeight={"bold"} >
                                    <ImStarFull />
                                </Text>
                            </HStack>
                            <Text fontSize={"sm"} fontWeight={"semibold"} >
                                Reasonable price and high quality essays, highly recommended
                            </Text>
                            <Text color={"#013a63"} fontSize={"xs"} fontWeight={"semibold"}>
                                Jicxy
                            </Text>
                        </Box></VStack>
                    <VStack   display={["none","none","none","flex"]} alignItems={"flex-end"} justifyContent={"flex-end"} mt={"2"}>
                        <HStack w={"52%"} display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} mt={"2"}>

                            <Text color={"#013a63"} fontSize={"4xl"} fontWeight={"bold"}><ImQuotesRight /></Text>
                        </HStack>
                        <HStack  w={"full"} display={"flex"} alignItems={"flex-end"} justifyContent={"flex-end"} mt={"2"}>
                            <Image h={"20"} w={"24"} src='asset/rimg.png' alt='avatar' />
                            <Box w={["full","full","55%"]} px={"4"} py={"3"} border={"2px"} borderColor={"#013a63"} roundedBottom={"3xl"} roundedTopRight={"3xl"} borderRight={""}>
                                <HStack>
                                    <Text color={"yellow.300"} fontWeight={"bold"} >
                                        <ImStarFull />
                                    </Text>
                                    <Text color={"yellow.300"} fontWeight={"bold"} >
                                        <ImStarFull />
                                    </Text>
                                    <Text color={"yellow.300"} fontWeight={"bold"} >
                                        <ImStarFull />
                                    </Text>
                                    <Text color={"yellow.300"} fontWeight={"bold"} >
                                        <ImStarFull />
                                    </Text>
                                    <Text color={"yellow.300"} fontWeight={"bold"} >
                                        <ImStarFull />
                                    </Text>
                                </HStack>
                                <Text fontSize={"sm"} fontWeight={"semibold"} >
                                    The writers are very awesome, They never fail to deliver exactly what i need.
                                </Text>
                                <Text color={"#013a63"} fontSize={"xs"} fontWeight={"semibold"}>
                                    Henny
                                </Text>
                            </Box></HStack>


                    </VStack>


                    <Box py={"4"} my="6" px={"6"} bg={"gray.200"} rounded={"xl"}>
                        <HStack>
                            <VStack>
                                <Text color={"#013a63"} fontSize={"2xl"} fontWeight={"bold"}>
                                    100+
                                </Text>
                                <Text lineHeight={"0"} pb={"4"}>
                                    Customers
                                </Text>
                            </VStack>
                            <VStack mx={"8"}>
                                <Text color={"#013a63"} fontSize={"2xl"} fontWeight={"bold"}>
                                    5+
                                </Text>
                                <Text lineHeight={"0"} pb={"4"}>
                                    Years
                                </Text>
                            </VStack>
                            <VStack >
                                <Text color={"#013a63"} fontSize={"2xl"} fontWeight={"bold"}>
                                    100+
                                </Text>
                                <Text lineHeight={"0"} pb={"4"}>
                                    Subjects
                                </Text>
                            </VStack>
                        </HStack>
                    </Box>

                    

                </VStack>
            </HStack>
            <Box  w={{ sm: "90%", md: "98%", lg: "75%", xl: "80%" }}  mx={"auto"}  my={"8"}>
            <HStack display={"flex"} flexDir={["column","column","row"]} justifyContent={"space-evenly"} alignItems={"center"}>
                            <VStack  px={"6"} py={["8"]}>
                                <Box px={"6"} py={"6"} rounded={"full"} bg={"gray.200"}>
                                <Text color={"#013a63"} fontSize={"xl"} fontWeight={"bold"}>
                                    <RxRocket/>
                                </Text>
                                </Box>
                                
                                <Text color={"#013a63"} fontSize={""}  py={""} textAlign={"center"}>
                                Lighting-fast turnaround time
                                </Text>
                            </VStack>
                            <VStack  px={"6"} py={"8"}>
                                <Box px={"6"} py={"6"} rounded={"full"} bg={"gray.200"}>
                                <Text color={"#013a63"} fontSize={"xl"} fontWeight={"bold"}>
                                    <RiTaskLine />
                                </Text>
                                </Box>
                                
                                <Text color={"#013a63"} fontSize={""}  textAlign={"center"} py={""}>
                                Help with any assignment
                                </Text>
                            </VStack>
                            <VStack  px={"6"} py={"8"}>
                                <Box px={"6"} py={"6"} rounded={"full"} bg={"gray.200"}>
                                <Text color={"#013a63"} fontSize={"xl"} fontWeight={"bold"}>
                                   <MdOutlinePlagiarism />
                                </Text>
                                </Box>
                                
                                <Text color={"#013a63"} textAlign={"center"} fontSize={""}  py={""}>
                                Plagiarism-free content
                                </Text>
                            </VStack>
                            <VStack  px={"6"} py={"8"}>
                                <Box px={"6"} py={"6"} rounded={"full"} bg={"gray.200"}>
                                <Text color={"#013a63"} fontSize={"xl"} fontWeight={"bold"}>
                                    <MdOutlineFlag/>
                                </Text>
                                </Box>
                                
                                <Text textAlign={"center"} color={"#013a63"} fontSize={""}  py={""}>
                                Writers from Nigeria, US and Canada
                                </Text>
                            </VStack>
                            
                        </HStack>
            </Box>
        </Box>
    )
}

export default Hero
