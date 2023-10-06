import React, { useState } from 'react';
import { Box, Button, Text, Card, SimpleGrid, CardBody, Heading, CardHeader, CardFooter } from '@chakra-ui/react';
import { MdArrowBackIosNew, MdArrowForwardIos, MdArrowLeft } from 'react-icons/md';

const ReviewScrollContent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = React.createRef();
  const scrollContent =[
    {
      Name: "Ogunmakinju Olajide",
      Review: "The writer was wonderful and good",
      customerId: "#12345",
      Date:"02/26/1996"
    },
    {
      Name: "Ogunmakinju Stephen",
      Review: "The writer was wonderful and good",
      customerId: "#12345",
      Date:"02/26/1996"
    },
    {
      Name: "Ogunmakinju Olanrewaju",
      Review: "The writer was wonderful and good",
      customerId: "#12345",
      Date:"02/26/1996"
    },
    {
      Name: "Ogunmakinju Sukanmi",
      Review: "The writer was wonderful and good",
      customerId: "#12345",
      Date: "02/26/1996"
    }

  ]

  const handleScroll = (scrollType: any) => {
    const contentElement: any = contentRef.current;

    if (scrollType === 'prev') {
      contentElement.scrollLeft -= 100;
    } else if (scrollType === 'next') {
      contentElement.scrollLeft += 100;
    }

    setScrollPosition(contentElement.scrollLeft);
  };

  return (
    <Box w={"102%"} bg={""} my={"12"} mx={"auto"} display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"space-between"}>

      <Button
        onClick={() => handleScroll('prev')}
        disabled={scrollPosition === 0}
        py={["3","7"]}
        px={["3","3","5"]}
        rounded={"full"}
        mx={"4"}
        border="1px"
        borderColor={"gray.200"}
        bg="#f5f5f5"
      >
        <Text fontSize={["xl","2xl"]} color={"#013a63"}><MdArrowBackIosNew /></Text>
      </Button>
      <Box
        ref={contentRef}
        display="flex"
        overflowX="scroll"
        maxWidth="140%"
        // border="1px solid #ccc"
        p="2"
        scrollBehavior={"smooth"}
        scr
      >
        {/* Your overflowing content goes here */}
        {/* Example: */}
<Box  display={"flex"} flexDir={["row"]} alignItems={"center"} justifyContent={"space-between"}>
         
         {
          scrollContent.map((card)=>
          <Card mx={"3"} key={card.customerId} w={["260px"]} _hover={{boxShadow:"2xl"}} h={["300px","350px"]} bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'> {card.Name}</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>{card.Review}</Text>
            </CardBody>
            <CardFooter display={"column"}  borderTop={"1px"} borderColor={"gray.400"} >
              <Text color={'gray.400'}> Customer ID: {card.customerId} </Text>
              <Text color={'gray.400'}> {card.Date} </Text>

            </CardFooter >
          </Card>)
         }
          
          {/* <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} mx={"4"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'> Angela Gomez</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>The writers delivered promptly within a short timeframe</Text>
            </CardBody>
            <CardFooter display={"column"}  borderTop={"1px"} borderColor={"gray.400"}   >

              <Text color={'gray.400'}> Customer ID: #123456 </Text>
              <Text color={'gray.400'}> 02/26/2023 </Text>
            </CardFooter >
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'> Emma Bombay</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>The writers delivered promptly within a short timeframe</Text>
            </CardBody>
            <CardFooter display={"column"}  borderTop={"1px"} borderColor={"gray.400"} >
              <Text color={'gray.400'}> Customer ID: #123456 </Text>
              <Text color={'gray.400'}> 02/26/2023 </Text>
            </CardFooter >
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} mx={"4"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'> Tyler Copper</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>The writers delivered promptly within a short timeframe</Text>
            </CardBody>
            <CardFooter display={"column"}  borderTop={"1px"} borderColor={"gray.400"} >
              <Text color={'gray.400'}> Customer ID: #123456 </Text>
              <Text color={'gray.400'}> 02/26/2023 </Text>
            </CardFooter >
          </Card> */}
     </Box> 
      </Box>


      <Button
        onClick={() => handleScroll('next')} 
        disabled={scrollPosition === contentRef.current?.scrollWidth - contentRef.current?.clientWidth}
        rounded={"full"}

        py={["3","7"]}
        px={["3","3","5"]}
      
        mx={"4"}
        border="1px"
        borderColor={"gray.200"}
        bg="#f5f5f5"
      >
        <Text fontSize={["xl","2xl"]} color={"#013a63"}>< MdArrowForwardIos /></Text>
      </Button>

    </Box>
  );
};

export default ReviewScrollContent;
