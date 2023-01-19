import React from "react";
import { Avatar, Heading, VStack, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Charan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={16}> 
     <VStack spacing={4} alignItems="center"> 
       <Avatar 
         src="https://media.licdn.com/dms/image/D5603AQF2D7FJuiW8MQ/profile-displayphoto-shrink_800_800/0/1674139520456?e=1679529600&v=beta&t=72he5wudsbOL24rGoncCIsjY_QeX9Ifnarr0YVEUenU" 
         size="2xl" 
         name="Charan" 
       /> 

       <Heading as="h4" size="md" noOfLines={1}> 
         {greeting} 
       </Heading> 
     </VStack> 
     <VStack spacing={6}> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio1} 
       </Heading> 
       <Heading as="h1" size="3xl" noOfLines={1}> 
         {bio2} 
       </Heading> 
     </VStack> 
   </VStack> 

  </FullScreenSection>
);

export default LandingSection;
