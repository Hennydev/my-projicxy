import { CardBody, Card, CardFooter, CardHeader, Heading, Box, CSSReset, HStack, Image, Text, Button, Center, VStack } from '@chakra-ui/react'
import React from 'react'
import ReviewScrollContent from './ReviewScrollContent'

const EightSection = () => {
  return (
    <Box w={{ sm: "90%", md: "80%", lg: "80%", xl: "75%" }} mx={"auto"} my={"14"}>
      <Text textAlign={"center"} fontWeight={"bold"} fontSize={["xl","2xl","2xl","5xl"]} color={"#013a63"}>Follow our paper writing service on social media for the latest news, tips, and more</Text>


      <HStack w={"full"} display={"flex"} flexDir={["column","column","column","row"]} mt={"10"} alignItems={"center"} justifyContent={"center"}>
        <Card w={["95%","95%","260px"]} _hover={{ boxShadow: "2xl" }} h={"350px"} bg="transparent" border={"1px"} borderColor={"gray.200"} rounded={"2xl"}>
          <CardHeader>
            <HStack display={"flex"} alignItems={"center"} justifyContent={["center"]}>
              <Box>

                <svg width="32px" height="32px" viewBox="0 0 3364.7 3364.7" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21" /><stop offset=".78" stop-color="#d82d7e" /></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" /><stop offset="1" stop-color="#8c3aaa" /></radialGradient></defs><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)" /><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)" /><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff" /></svg>
              </Box>
              <VStack>
                <Text fontSize={"2xl"} lineHeight={"3"} fontWeight={"bold"}>7k</Text>
                <Text color={"gray.600"} fontSize={""} fontWeight={""}>Followers</Text>
              </VStack>

            </HStack>
          </CardHeader>
          <CardBody bg={"transparent"}>
            <Text textAlign={"center"}>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Center w={"full"}>
              <Button w="full" border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{ borderColor: "gray.500" }} dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                Create a review
              </Button>

            </Center>
          </CardFooter>
        </Card>
       
        <Card w={["95%","95%","260px"]} _hover={{ boxShadow: "2xl" }} h={"350px"} bg="transparent" border={"1px"} borderColor={"gray.200"} rounded={"2xl"}>
          <CardHeader>
            <HStack display={"flex"} alignItems={"center"} justifyContent={["center"]}>
              <Box>

              <svg width="36px" height="36px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#1877F2" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"/><path fill="#ffffff" d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"/></svg>
              </Box>
              <VStack>
                <Text fontSize={"2xl"} lineHeight={"3"} fontWeight={"bold"}>7k</Text>
                <Text color={"gray.600"} fontSize={""} fontWeight={""}>Followers</Text>
              </VStack>

            </HStack>
          </CardHeader>
          <CardBody bg={"transparent"}>
            <Text textAlign={"center"}>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter>
            <Center w={"full"}>
              <Button w={"full"} border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{ borderColor: "gray.500" }} dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
                Create a review
              </Button>

            </Center>
          </CardFooter>
        </Card>
       
        <Card w={["95%","95%","260px"]} _hover={{ boxShadow: "2xl" }} h={"350px"} bg="transparent" border={"1px"} borderColor={"gray.200"} rounded={"2xl"}>
          <CardHeader>
            <HStack display={"flex"} alignItems={"center"} justifyContent={["center"]}>
              <Box>
                <svg width="36px" height="36px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="20" fill="#FF0000" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white" />
                </svg>

              </Box>
              <VStack>
                <Text fontSize={"2xl"} lineHeight={"3"} fontWeight={"bold"}>7k</Text>
                <Text color={"gray.600"} fontSize={""} fontWeight={""}>Followers</Text>
              </VStack>

            </HStack>
          </CardHeader>
          <CardBody bg={"transparent"}>
            <Text textAlign={"center"}>View a summary of all your customers over the last month.</Text>
          </CardBody>
          <CardFooter >
            <Center w={"full"}>
              <Button w={"full"} border={"2px"} bg={"transparent"} textColor={"#013a43"} borderColor={"#013a43"} _hover={{ borderColor: "gray.500" }} dropShadow={"lg"} px={"12"} py={"6"} my={"4"} color={"#013a63"}>
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
