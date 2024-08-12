import React, { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import fruitImg from "../../assets/img/fruit.png";
import Splash from "../Splash/Splash";
import "./Fruit.scss";

type Props = {
   onClick: () => void;
   energy: number;
};

const Fruit: React.FC<Props> = ({ energy, onClick }) => {
   const [animationKey, setAnimationKey] = useState(0);
   const [splashes, setSplashes] = useState<{ id: number; x: number; y: number }[]>([]);

   const handleClick = (event: React.MouseEvent) => {
      onClick();

      setAnimationKey((prev) => prev + 1);

      const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setSplashes((prevSplashes) => [...prevSplashes, { id: Date.now(), x, y }]);
   };

   const handleSplashAnimationEnd = (id: number) => {
      setSplashes((prevSplashes) => prevSplashes.filter((splash) => splash.id !== id));
   };

   const animationCheck = animationKey && energy;

   return (
      <Box as="div" userSelect="none" mb={"5vh"} className={"fruit"}>
         <Image
            src={fruitImg}
            onClick={handleClick}
            key={animationKey}
            alt="Fruit"
            animation={animationCheck ? "clickAnimation 0.2s linear" : ""}
         />

         {splashes.map((splash) => (
            <Splash
               key={splash.id}
               x={splash.x}
               y={splash.y}
               onAnimationEnd={() => handleSplashAnimationEnd(splash.id)}
            />
         ))}
      </Box>
   );
};

export default Fruit;
