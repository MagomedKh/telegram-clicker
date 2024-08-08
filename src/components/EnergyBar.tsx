import React from "react";
import { Box, Progress, Text } from "@chakra-ui/react";

type Props = {
   energy: number;
   maxEnergy: number;
};

const EnergyBar: React.FC<Props> = ({ energy, maxEnergy }) => {
   const energyProcent = ((energy / maxEnergy) * 100).toFixed(0);

   return (
      <Box className={"energyBar"}>
         <Text fontWeight={100}>Your Energy: {energyProcent}%</Text>
         <Progress
            value={Number(energyProcent)}
            width={"30vw"}
            size="lg"
            colorScheme="black"
            background="#22001B"
            className={"progress"}
            borderRadius={"38px"}
            h={"3.5vh"}
            mt={"1vh"}
         />
         <Text pos={"absolute"} top="58%" left="30%" right={"30%"}>
            {energy}
         </Text>
      </Box>
   );
};

export default EnergyBar;
