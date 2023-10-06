import { UserDetails } from "@/redux/SignInSlice"
import { Box, Button, HStack, Image, Input, Link, Text, VStack } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import { MdCreditCard, MdOutlineBeenhere, MdThumbUp } from "react-icons/md"
import { useDispatch } from "react-redux"


interface IFormInput {
  Name: string
  lastName: string
  mail: string
  password: number
}


export default function Forms() {
  const dispatch = useDispatch()
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
   {
    dispatch(UserDetails({SignInName:data.Name, SignInEmail:data.mail}) )}


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box rounded={"3xl"} w={{sm:"90%", md:"60%",lg: "75%", xl:"60%"}} mx={"auto"} display={["flex"]} flexDir={["column", "column","column", "row", "row"]} alignItems={"center"} my={"32"} bg={"black"} px={""} py={"8"}>
        <VStack px={""} rounded={"xl"} py={"10"} mx={"6"} w={["90%","95%","95%","50%","50%"]} >
          <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>Projicxy</Text>
          <Text color={"white"} fontSize={"2xl"} textAlign={"center"} fontWeight={"bold"}>Delegate Your Tasks to Professionals</Text>

          <HStack bg={"blue.300"} mt={"4"} filter={"auto"} brightness={"50%"} display={["none","none","none","flex","flex"]} alignItems={"flex-start"} justifyContent={"flex-start"} border={"1px"} rounded={"xl"} borderColor={"teal.300"} px={"2"} py={"2"}>
            <Box p={"2"} mt={"1"} rounded={"lg"} bg={"blue.500"} filter={"auto"} brightness={"80%"}>
              <Text color={"white"} ><MdThumbUp /></Text>
            </Box>
            <Text fontSize={"sm"} color={"white"}>
              Only Original Papers

              We have a zero-tolerance policy toward plagiarism. Don't just take our word for it - request an originality report upon the completion of your order!
            </Text>

          </HStack>
          <HStack bg={"blue.300"} mt={"2"} filter={"auto"} brightness={"50%"} display={["none","none","none","flex","flex"]} alignItems={"flex-start"} justifyContent={"flex-start"} border={"1px"} rounded={"xl"} borderColor={"teal.300"} px={"2"} py={"2"}>
            <Box p={"2"} mt={"1"} rounded={"lg"} bg={"blue.500"} filter={"auto"} brightness={"80%"}>
              <Text color={"white"} ><MdCreditCard/></Text>
            </Box>
            <Text fontSize={"sm"} color={"white"} >
              Only Original Papers

              We have a zero-tolerance policy toward plagiarism. Don't just take our word for it - request an originality report upon the completion of your order!
            </Text>

          </HStack>
          <HStack bg={"blue.300"} mt={"2"} filter={"auto"} brightness={"50%"} display={["none","none","none","flex","flex"]} alignItems={"flex-start"} justifyContent={"flex-start"} border={"1px"} rounded={"xl"} borderColor={"teal.300"} px={"2"} py={"2"}>
            <Box p={"2"} mt={"1"} rounded={"lg"} bg={"blue.500"} filter={"auto"} brightness={"80%"}>
              <Text color={"white"} ><MdOutlineBeenhere /></Text>
            </Box>
            <Text fontSize={"sm"} color={"white"}>
              Only Original Papers

              We have a zero-tolerance policy toward plagiarism. Don't just take our word for it - request an originality report upon the completion of your order!
            </Text>

          </HStack>
        </VStack >
        <VStack bg={"white"} px={"6"} rounded={"2xl"} py={"10"} mx={"6"} w={["90%","90%","80%","50%","50%"]}  >
          <Image boxSize={"24"} src={"asset/projicxy.svg"} alt={"logo"} />
          <VStack display={"flex"} flexDir={"column"} alignItems={"flex-start"} w={"full"}>
            <Text textAlign={"start"}>Name</Text>
            <Input {...register("Name", { required: true, maxLength: 20 })} />
          </VStack> {/* <Input my={"3"} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
          
          */}
          <VStack display={"flex"} flexDir={"column"} alignItems={"flex-start"} w={"full"}>
            <Text fontSize={""} textAlign={"start"}>Email Address </Text>
            <Input
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}

            />

            {errors.mail && <p role="alert">{errors.mail.message}</p>}


          </VStack>
          <VStack display={"flex"} flexDir={"column"} alignItems={"flex-start"} w={"full"} >
            <Text fontSize={""} textAlign={"start"}>Password</Text>
            <Input my={""} type="number" {...register("password", { min: 0, max: 999999 })} />
            <HStack>
              <Text fontSize={"sm"} lineHeight={"0"} mt={"1"}>{"Don't have an account?"}</Text><Link color={"blue.400"} fontSize={"sm"} href={"Login"}>Login </Link>
            </HStack>

          </VStack>

          <Button fontSize={"sm"} bg={"blue.300"} color={"white"} _hover={{bg:"blue.200"}}  w={"full"}  mt={"4"} rounded={"lg"} type="submit" > Create my account</Button>
          <Text fontSize={"sm"} textAlign={"center"} mt={""}>By creating an account, you agree to the
          <Link ml={"1"} fontSize={"sm"} href={"#"} color={"blue.400"}>Terms and Conditions</Link> ,   <Link fontSize={"sm"} href={"#"} color={"blue.400"}>Privacy Policy</Link> and   <Link ml={"1"} fontSize={"sm"} href={"#"} color={"blue.400"}>Refund Policy</Link>. </Text>
        </VStack>
      </Box>


    </form>
  )
}