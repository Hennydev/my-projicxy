import React, { useState } from 'react';
import { Box, Button, Text, Card, SimpleGrid, CardBody, Heading, CardHeader, CardFooter, Link } from '@chakra-ui/react';
import { MdArrowBackIosNew, MdArrowForwardIos, MdArrowLeft } from 'react-icons/md';

const OverflowScrollWithButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentRef = React.createRef();

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
        py="7"
        px={"5"}
        rounded={"full"}
        mx={"4"}
        border="1px"
        borderColor={"gray.200"}
        bg="#f5f5f5"
      >
        <Text fontSize={"2xl"} color={"#013a63"}><MdArrowBackIosNew /></Text>
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
<Box  display={"flex"} flexDir={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Card w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'>Ogunmakinju Olajide</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter display={"flex"} alignItems={"center"} justifyContent={"cdenter"}>
 <Link href='ContactUs'>              <Button>Contact the writer</Button></Link>
            </CardFooter>
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} mx={"4"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'>Ogunmakinju Olajide</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter display={"flex"} alignItems={"center"} justifyContent={"cdenter"}>
 <Link href='ContactUs'>              <Button>Contact the writer</Button></Link>
            </CardFooter>
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'>Ogunmakinju Olajide</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter display={"flex"} alignItems={"center"} justifyContent={"cdenter"}>
 <Link href='ContactUs'>              <Button>Contact the writer</Button></Link>
            </CardFooter>
          </Card>
          <Card  w={"260px"} _hover={{boxShadow:"2xl"}} h={"350px"} mx={"4"}  bg="transparent" border={"1px"} borderColor={"gray.50"}>
            <CardHeader>
              <Heading size='md'>Ogunmakinju Olajide</Heading>
            </CardHeader>
            <CardBody bg={"transparent"}>
              <Text>View a summary of all your customers over the last month.</Text>
            </CardBody>
            <CardFooter display={"flex"} alignItems={"center"} justifyContent={"cdenter"}>
 <Link href='ContactUs'>              <Button>Contact the writer</Button></Link>
            </CardFooter>
          </Card>
     </Box> 
      </Box>


      <Button
        onClick={() => handleScroll('next')} py={"7"}
        disabled={scrollPosition === contentRef.current?.scrollWidth - contentRef.current?.clientWidth}
        rounded={"full"}

        px={"5"}

        mx={"6"}
        border="1px"
        borderColor={"gray.200"}
        bg="#f5f5f5"
      >
        <Text fontSize={"2xl"} color={"#013a63"}>< MdArrowForwardIos /></Text>
      </Button>

    </Box>
  );
};

export default OverflowScrollWithButton;
