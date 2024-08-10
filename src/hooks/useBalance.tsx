import { useState, useEffect } from "react";
import axios from "axios";
import useEnergy from "./useEnergy";

const ID = 321;
const WS_URL = "ws://127.0.0.1:8002/ws/";

const http = axios.create({
   baseURL: "http://127.0.0.1:8002/test/",
});

const useBalance = (maxEnergy: number) => {
   const [coins, setCoins] = useState(0);
   const [energy, setEnergy] = useEnergy(maxEnergy, 1);
   const [coinsSocket, setCoinsSocket] = useState<WebSocket | null>(null);
   const [energySocket, setEnergySocket] = useState<WebSocket | null>(null);

   useEffect(() => {
      (async () => {
         const { data } = await http.get<{ coins: number; energy: number }>(
            `user_entry_check/${ID}`
         );

         setEnergy(data.energy);
         setCoins(data.coins);
      })();
   }, []);

   useEffect(() => {
      const sendUserData = () => {
         // e.preventDefault(); e: BeforeUnloadEvent

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
      const coinsWS = new WebSocket(`${WS_URL}coins_gain/${ID}`);
      const energyWS = new WebSocket(`${WS_URL}energy_gain/${ID}`);

      setCoinsSocket(coinsWS);
      setEnergySocket(energyWS);
      coinsWS.onopen = () => {
         console.log("WebSocket Connected");
      };

      // Обработчик получения сообщений
      coinsWS.onmessage = (event) => {
         const data = JSON.parse(event.data);
         console.log("Received message:", data);
         // Обработка входящих сообщений, если необходимо
      };

      // Обработчик ошибок
      coinsWS.onerror = (error) => {
         console.error("WebSocket Error:", error);
      };

      // Обработчик закрытия соединения
      coinsWS.onclose = () => {
         console.log("WebSocket Disconnected");
      };
      return () => {
         // coinsWS.close();
         // energyWS.close();
      };
   }, []);

   const sendWSCoins = () => {
      if (coinsSocket && coinsSocket.readyState === WebSocket.OPEN) {
         coinsSocket.send(
            JSON.stringify({
               // type: "UPDATE",
               coins,
            })
         );
      }
   };
   const sendWSEnergy = () => {
      if (energySocket && energySocket.readyState === WebSocket.OPEN) {
         energySocket.send(
            JSON.stringify({
               // type: "UPDATE",
               energy,
            })
         );
      }
   };

   useEffect(sendWSCoins, [coins]);
   useEffect(sendWSEnergy, [energy]);

   return { coins, setCoins, energy, setEnergy } as const;
};

export default useBalance;
