
import { ContactUser } from '@/redux/ContactSlice'
import { Box, HStack, Text,Button, Center, Input, Image, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ReactDOM from "react-dom"
import { useForm, SubmitHandler } from "react-hook-form"



const ContactUs = () => {
// const [name, setName] = useState<string>("")
// const [email, setEmail] = useState<string>("")
// const [message, setMessage]= useState<string>("")
const { register, handleSubmit } = useForm<IFormInput>()



interface IFormInput {
  name: string,
 email:string,
 message:string
}


const dispatch = useDispatch()
const onSubmit: SubmitHandler<IFormInput> = (data) => {
  dispatch(ContactUser({Name:data.name, Email:data.email, Message:data.message}))
  console.log(data)
 
}
// const handleSubmit = (e:any)=>{
//   e.preventDefault()
  
// setName("")
// setEmail("")
// setMessage("")
  
// }  
return (
    
    <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} >
      <Box bg={"whiteAlpha.500"} w={"100%"} px={"16"} py={"32"}   mx={"auto"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <HStack w={"100%"} display="flex" flexDir={["column","column","row","row"]} >
          <Box w={["90%","90%","90%","50%"]} mr={["0","0","16"]}>
            <Center display={"flex"} flexDir={"column"} >
              <Text fontSize={"5xl"} color={"#013a63"} fontWeight={"bold"}>
                Contact Us
              </Text>
              <Box border={"2px"} w={"full"} m={"4"} px={"6"} py={"6"}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <Box  w={"full"} py={"6"} px={""}>
                    <Text>Name</Text>
                    <Input {...register("name", { required: true, maxLength: 20 })}   mb={"2"} borderTop={"0"} borderLeft={"0"} borderRight={"0"} rounded={"none"} borderBottom={"2px"} _focus={{ borderBottom: "2px" }} px={"0"} py={"0"} focusBorderColor='transparent' outlineColor={"transparent"} outline={"none"} ring={"0"}></Input>
                    <Text>Email</Text>
                    <Input {...register("email", { required: true, maxLength: 100 })}  borderTop={"0"} borderLeft={"0"} borderRight={"0"} rounded={"none"} borderBottom={"2px"} _focus={{ borderBottom: "2px" }} px={"0"} py={"0"} focusBorderColor='transparent' outlineColor={"transparent"} outline={"none"} ring={"0"}></Input>
                    <Text mt={"3"}>Message</Text>
                    <Textarea {...register("message", { required: true, maxLength: 20 })}  rounded={"none"} border={"2px"} _focus={{ border: "2px" }} px={"2"} py={"2"} mt={"3"} focusBorderColor='transparent' outlineColor={"transparent"} outline={"none"} ring={"0"}></Textarea>
                    <Button type='submit' mt={"4"} > Submit</Button>
                  </Box>
                  </form>
                
                               
              
              </Box>
            </Center>
          </Box>
          <Image display={["none"," none","none","flex"]} boxSize={"80"} src={"asset/contact.svg"} alt='contactImage'></Image>
        </HStack>
      </Box>
    </Box>
  )
}

export default ContactUs

