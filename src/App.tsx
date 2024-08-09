import React, { useState, useEffect } from "react";
import Fruit from "./components/Fruit";
import EnergyBar from "./components/EnergyBar";
import useEnergy from "./hooks/useEnergy";
import { Box } from "@chakra-ui/react";
import "./styles/App.scss";
import Balance from "./components/Balance";
import Highlight from "./components/Highlight";
import axios from "axios";
const ID = 321;
const MAX_ENERGY = 1000;

const http = axios.create({
   baseURL: "http://127.0.0.1:8002/test/",
});

const App: React.FC = () => {
   const [coins, setBalance] = useState(0);
   const [energy, setEnergy] = useEnergy(MAX_ENERGY, 1);

   useEffect(() => {
      (async () => {
         const { data } = await http.get<{ coins: number; energy: number }>(
            `user_entry_check/${ID}`
         );

         setEnergy(data.energy);
         setBalance(data.coins);
      })();
   }, []);

   useEffect(() => {
      const sendUserData = (e: BeforeUnloadEvent) => {
         // e.preventDefault();

         http.post(`user_exit/${ID}`, null, {
            params: {
               coins,
               energy,
            },
         });
      };
      window.addEventListener("beforeunload", sendUserData);

      return () => window.removeEventListener("beforeunload", sendUserData);
   }, [coins, energy]);

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
            <Balance coins={coins} />
            <Fruit energy={energy} onClick={handleFruitClick} />
            <EnergyBar energy={energy} maxEnergy={MAX_ENERGY} />
         </Box>

         <Highlight />
      </Box>
   );
};

export default App;
