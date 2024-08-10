import React, { useEffect } from "react";
import Fruit from "./components/Fruit";
import EnergyBar from "./components/EnergyBar";
import { Box } from "@chakra-ui/react";
import "./styles/App.scss";
import CoinsBlock from "./components/CoinsBlock";
import Highlight from "./components/Highlight";
import useBalance from "./hooks/useBalance";
import { useInitDataRaw } from "@telegram-apps/sdk-react";

const MAX_ENERGY = 1000;

const App: React.FC = () => {
   const initData = useInitDataRaw();
   const userId = initData?.result?.user?.id || 12345;

   const { coins, setCoins, energy, setEnergy } = useBalance(userId, MAX_ENERGY);

   useEffect(() => {
      const interval = setInterval(() => {
         setCoins((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const handleFruitClick = () => {
      if (energy > 0) {
         setCoins((prev) => prev + 1);
         setEnergy((prev) => prev - 1);
      }
   };

   return (
      <Box p={"0.1"} className="app">
         <Box position={"relative"} zIndex={5}>
            <CoinsBlock coins={coins} />
            <Fruit energy={energy} onClick={handleFruitClick} />
            <EnergyBar energy={energy} maxEnergy={MAX_ENERGY} />
         </Box>

         <Highlight />
      </Box>
   );
};

export default App;
