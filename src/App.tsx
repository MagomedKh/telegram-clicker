import React, { useState, useEffect } from "react";
import Fruit from "./components/Fruit";
import EnergyBar from "./components/EnergyBar";
import useEnergy from "./hooks/useEnergy";
import { Box } from "@chakra-ui/react";
import "./styles/App.scss";
import Balance from "./components/Balance";
import Highlight from "./components/Highlight";

const MAX_ENERGY = 5;

const App: React.FC = () => {
   const [balance, setBalance] = useState(0);
   const [energy, setEnergy] = useEnergy(MAX_ENERGY, 1);

   useEffect(() => {
      const interval = setInterval(() => {
         setBalance((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const handleFruitClick = () => {
      if (energy > 0) {
         setBalance((prev) => prev + 1);
         setEnergy((prev) => prev - 1);
      }
   };

   return (
      <Box p={"0.1"} className="app">
         <Box position={"relative"} zIndex={5}>
            <Balance balance={balance} />
            <Fruit energy={energy} onClick={handleFruitClick} />
            <EnergyBar energy={energy} maxEnergy={MAX_ENERGY} />
         </Box>

         <Highlight />
      </Box>
   );
};

export default App;
