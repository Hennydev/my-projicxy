import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdArrowDropDown, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const SeventhSection = () => {
  const [dropDown, setDropDown] = useState(false)
  const [dropDown2, setDropDown2] = useState(false)
  const [dropDown3, setDropDown3] = useState(false)
  const [dropDown4, setDropDown4] = useState(false)
  const [dropDown5, setDropDown5] = useState(false)
  const [dropDown6, setDropDown6] = useState(false)
  const [dropDown7, setDropDown7] = useState(false)
  const [dropDown8, setDropDown8] = useState(false)
  const [dropDown9, setDropDown9] = useState(false)
  const [dropDown10, setDropDown10] = useState(false)
  return (
    <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={"4xl"} color={"#013a63"}>Essay writing service FAQs</Text>
      <Flex my={"8"} >
        <VStack w={"50%"} mr={"2"}>

          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown ?  <Text onClick={()=>setDropDown(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown2 ?  <Text onClick={()=>setDropDown2(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown2(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown2 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown3 ?  <Text onClick={()=>setDropDown3(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown3(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown3 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown4 ?  <Text onClick={()=>setDropDown4(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown4(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown4 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown5 ?  <Text onClick={()=>setDropDown5(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown5(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown5 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>



        </VStack>
        <VStack ml={"2"} w={"50%"}>
        <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown6 ?  <Text onClick={()=>setDropDown6(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown6(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown6 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
        </Box>
        <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown7 ?  <Text onClick={()=>setDropDown7(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown7(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown7 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown8 ?  <Text onClick={()=>setDropDown8(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown8(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown8 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown9 ?  <Text onClick={()=>setDropDown9(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown9(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown9 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
          <Box border={"1px"} p={"4"} rounded={"xl"} alignItems={"center"} borderColor={"#013a63"}>
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Text w={"80%"} fontWeight={"semibold"}> Will the assigned essay writer follow the guideline specificied in the order</Text>
              {
                !dropDown10 ?  <Text onClick={()=>setDropDown10(true)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowDown /></Text> : <Text onClick={()=>setDropDown10(false)} color={"#013a63"} fontSize={"2xl"}><MdKeyboardArrowUp /></Text>
              }
              
             
            </HStack>
            {
              dropDown10 &&   <Box>
              <Box bg={"#013a63"} w={"full"} h={"0.5"} my={"4"}></Box>
              <Text>
                Have no doubt! When ordering at our essay service, you can specify all your requirements for a particular task and even upload additional materials if necessary. Our professional paper writers will carefully study your guidelines and complete your paper with them in mind.

                Apart from this, you will have an opportunity to discuss any additional requirements directly with your chosen essay helper using a convenient live chat. This way, we ensure that you and our professional are on the same page and that we can satisfy your "write my essays for me" request in the best manner.
              </Text>
            </Box>
            }
           
          </Box>
        </VStack>
      </Flex>

    </Box>
  )
}

export default SeventhSection
