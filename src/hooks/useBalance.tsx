import { useState, useEffect } from "react";
import axios from "axios";
import useEnergy from "./useEnergy";

const http = axios.create({
   baseURL: "http://127.0.0.1:8002/test/",
});

const useBalance = (userId: number, maxEnergy: number) => {
   const [coins, setCoins] = useState(0);
   const [energy, setEnergy] = useEnergy(maxEnergy, 1);

   useEffect(() => {
      (async () => {
         const { data } = await http.get<{ coins: number; energy: number }>(
            `user_entry_check/${userId}`
         );

         setEnergy(data.energy);
         setCoins(data.coins);
      })();
   }, []);

   useEffect(() => {
      const sendUserData = () => {
         http.post(`user_exit/${userId}`, null, {
            params: {
               coins,
               energy,
            },
         });
      };
      window.addEventListener("beforeunload", sendUserData);

      return () => window.removeEventListener("beforeunload", sendUserData);
   }, [coins, energy]);

   return { coins, setCoins, energy, setEnergy } as const;
};

export default useBalance;
