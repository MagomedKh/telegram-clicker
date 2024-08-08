import React, { useState } from "react";
import { Box, Image, keyframes } from "@chakra-ui/react";

type Props = {
   onClick: () => void;
   energy: number;
};

const clickAnimation = keyframes`
  0% { transform: scaleX(1) scaleY(1.1); }
  50% { transform: scaleX(0.95) scaleY(1.05);  }
  100% { transform: scaleX(1) scaleY(1.1); }
`;

const Fruit: React.FC<Props> = ({ energy, onClick }) => {
   const [animationKey, setAnimationKey] = useState(0);

   const handleClick = () => {
      setAnimationKey((prev) => prev + 1);
      onClick();
   };

   const animationCheck = animationKey && energy;

   return (
      <Box as="div" userSelect="none" mb={"5vh"} className={"fruit"}>
         <Image
            src="../assets/img/fruit.png"
            onClick={handleClick}
            key={animationKey}
            transform={"scaleY(1.1)"}
            alt="Fruit"
            pos={"relative"}
            animation={`${animationCheck && clickAnimation} 0.2s linear`}
            w={"72vw"}
            m={"auto"}
         />
      </Box>
   );
};

export default Fruit;
