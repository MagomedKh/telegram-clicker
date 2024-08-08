import React from "react";
import { Box } from "@chakra-ui/react";

const Highlight: React.FC = () => {
   return (
      <>
         {/* fruit */}
         <Box
            position="absolute"
            width="100vw"
            height="70vh"
            top={"18vh"}
            background="radial-gradient(ellipse, rgba(203, 16, 172, 0.9) 5%, rgba(255, 110, 5, 0) 75%)"
         />
         {/* fruit shadow */}
         <Box
            position="absolute"
            top={"62vh"}
            left={"22vw"}
            width="59vw"
            height="4vh"
            boxShadow="0px 60px 40px rgb(0, 0, 0, 0.8)"
            borderRadius="30%"
         />
         {/* left top */}
         <Box
            position="absolute"
            width="140vw"
            height="100vh"
            top={"-36vh"}
            right={"12vw"}
            background="radial-gradient(ellipse, rgba(203, 16, 172, 0.3) 1%, rgba(203, 16, 172, 0) 70%)"
            transform={"rotate(70deg)"}
         />
         {/* under balance */}
         <Box
            position="absolute"
            width="125vw"
            height="30vh"
            top={"9vh"}
            left={"-9vw"}
            background="radial-gradient(ellipse, rgba(203, 16, 172, 0.3) 5%, rgba(203, 16, 172, 0) 65%)"
         />
         {/* right bottom */}
         <Box
            position="absolute"
            width="130vw"
            height="90vh"
            bottom={"-40vh"}
            left={"30vw"}
            background="radial-gradient(ellipse, rgba(203, 16, 172, 0.28) 1%, rgba(203, 16, 172, 0) 70%)"
            transform={"rotate(-70deg)"}
         />
      </>
   );
};

export default Highlight;
