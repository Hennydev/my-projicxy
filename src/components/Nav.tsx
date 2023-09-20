import { Box, HStack, Text, Button, VStack, Link, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineClose } from "react-icons/md"
import { RxHamburgerMenu } from "react-icons/rx"

const Nav = () => {
    const [toggleSer, setToggleSer] = useState<boolean>(false)
    const [toggleOffer, setToggleOffer] = useState<boolean>(false)
    const [navToggle, setNavToggle] = useState<boolean>(false)
    const [showToggle, setShowToggle] = useState<boolean>(false)

    return (
        <Box pos={"fixed"} w={"100%"} bg={"#f5f5f5"} boxShadow={"sm"} zIndex="banner" >

            <HStack display={"flex"} py={""} flexDir={["row"]} alignItems={["center", "center"]} justifyContent={["space-between"]} w={{sm:"90%", md:"80%",lg: "75%", xl:"75%"}} mx={"auto"}>
                <Image boxSize={"24"} src={"asset/projicxy.svg"} alt={"logo"} />
                <HStack display={["none", "none", "flex"]} pos={"relative"} flexDir={["column", "column", "row", "row"]} alignItems={["center", "center"]} justifyContent={["center", "center", "space-between", "space-between"]}><Text>How To Order</Text>

                    {toggleSer ?
                        <HStack onMouseOver={() => setToggleSer(false)} onMouseLeave={() => setToggleSer(true)} mx={"6"} cursor={"pointer"}> <Text>Services</Text>    <Text fontSize={"xl"}><MdOutlineKeyboardArrowUp /></Text></HStack>
                        : <HStack onMouseOver={() => setToggleSer(true)} onMouseLeave={() => setToggleSer(false)} mx={"6"} cursor={"pointer"}> <Text>Services</Text><Text fontSize={"xl"}><MdOutlineKeyboardArrowDown /></Text>
                        </HStack>
                    }

                    {toggleOffer ?
                        <HStack onMouseOver={() => setToggleOffer(false)} onMouseLeave={() => setToggleOffer(true)} mx={"6"} cursor={"pointer"}> <Text>Offers</Text>    <Text fontSize={"xl"}><MdOutlineKeyboardArrowUp /></Text></HStack>
                        : <HStack onMouseOver={() => setToggleOffer(true)} onMouseLeave={() => setToggleOffer(false)} mx={"6"} cursor={"pointer"}> <Text>Offers</Text><Text fontSize={"xl"}><MdOutlineKeyboardArrowDown /></Text>
                        </HStack>
                    }



                    {
                        toggleSer && < VStack onMouseLeave={() => setToggleSer(false)} pos={"absolute"} top={"16"} left={"12"} border={"2px"} borderColor={"teal.600"} px={"8"} py={"6"} rounded={"lg"} >
                            <Text><Link href="">Buy Essay</Link></Text>
                            <Text><Link href="">Rewrite My Essay</Link></Text>
                            <Text><Link href="">Do My Homework</Link></Text>
                            <Text><Link href="">College Essay Help</Link></Text>
                        </VStack>
                    }
                    {
                        toggleOffer && < VStack onMouseLeave={() => setToggleOffer(false)} pos={"absolute"} top={"16"} right={"12"} border={"2px"} borderColor={"teal.600"} px={"8"} py={"6"} rounded={"lg"} >
                            <Text><Link href="">Buy Essay</Link></Text>
                            <Text><Link href="">Rewrite My Essay</Link></Text>
                            <Text><Link href="">Do My Homework</Link></Text>
                            <Text><Link href="">College Essay Help</Link></Text>
                        </VStack>
                    }

                    <Text mr={"6"}>About Us</Text>
                    <Text>Blog</Text>
                </HStack>

                <HStack>
                    <Button px="4" py={"2"} colorScheme='black' _hover={{ bg: "#013a63", color: "white" }} variant='outline'>
                        <Link href="Login" _hover={{ textDecor: "none" }}> Login</Link>
                    </Button>
                    <Button bg="#013a63" px={"4"} py={"2"} color="white" colorScheme='#013A63' variant='outline'>
                        SignUp
                    </Button>


                </HStack>

                {
                    navToggle ? <Text cursor={"pointer"} onClick={() => setNavToggle(false)} fontSize={"2xl"} display={["block", "block", "none"]}> <MdOutlineClose /></Text> :
                        <Text cursor={"pointer"} onClick={() => setNavToggle(true)} fontSize={"2xl"} display={["block", "block", "none"]}> <RxHamburgerMenu /></Text>
                }

            </HStack>
            {
                navToggle && <HStack display={["flex", "flex", "none"]} my={"6"} flexDir={["column", "column", "row", "row"]} alignItems={["center", "center"]} justifyContent={["center", "center", "space-between", "space-between"]}><Text>How To Order</Text>

                    {!toggleSer ?

                        <HStack mx={"6"} onMouseOver={() => setToggleSer(true)}> <Text my={"3"}>Services</Text>    <Text fontSize={"xl"}><MdOutlineKeyboardArrowDown /></Text></HStack>


                        : <HStack mx={"6"} onClick={() => setToggleSer(false)} cursor={"pointer"}> <Text my={"3"}>Services</Text><Text fontSize={"xl"}> <MdOutlineKeyboardArrowUp /> </Text>
                        </HStack>
                    }
                    {
                        toggleSer && < VStack  display={["block", "block", "none"]} textAlign={"center"} onMouseLeave={() => setToggleSer(false)}   >
                            <Text><Link href="">My Services</Link></Text>
                            <Text my={"3"}><Link href="">Rewrite My Essay</Link></Text>
                            <Text><Link href="">Do My Homework</Link></Text>
                            <Text mt={"3"}><Link href="">College Essay Help</Link></Text>
                        </VStack>
                    }



                    {!toggleOffer ?

                        <HStack mx={"6"} onMouseOver={() => setToggleOffer(true)}> <Text my={"3"}>Offers</Text>    <Text fontSize={"xl"}><MdOutlineKeyboardArrowDown /></Text></HStack>


                        : <HStack mx={"6"} onClick={() => setToggleOffer(false)} cursor={"pointer"}> <Text my={"3"}>Offers</Text><Text fontSize={"xl"}> <MdOutlineKeyboardArrowUp /> </Text>
                        </HStack>
                    }
                    {
                        toggleOffer && < VStack display={["block", "block", "none"]} textAlign={"center"} onMouseLeave={() => setToggleOffer(false)}   >
                            <Text><Link href="">My Services</Link></Text>
                            <Text my={"3"}><Link href="">Rewrite My Essay</Link></Text>
                            <Text><Link href="">Do My Homework</Link></Text>
                            <Text mt={"3"}><Link href="">College Essay Help</Link></Text>
                        </VStack>
                    }









                    <Text my={"3"}>About Us</Text>
                    <Text>Blog</Text>
                </HStack>
            }



        </Box>
    )
}

export default Nav
