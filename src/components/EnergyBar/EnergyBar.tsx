import React from "react";
import { Box, Progress, Text } from "@chakra-ui/react";
import "./EnergyBar.scss";

type Props = {
   energy: number;
   maxEnergy: number;
};

const EnergyBar: React.FC<Props> = ({ energy, maxEnergy }) => {
   const energyProcent = ((energy / maxEnergy) * 100).toFixed(0);

   return (
      <Box className={"energyBar"}>
         <Text fontWeight={100}>Your Energy: {energyProcent}%</Text>

         <Progress value={Number(energyProcent)} className={"progress"} />
         <Text pos={"absolute"} top="58%" left="30%" right={"30%"}>
            {energy}
         </Text>
      </Box>
   );
};

export default EnergyBar;
