import { useState, useEffect } from "react";

const useEnergy = (maxEnergy: number, rechargeRate: number) => {
   const [energy, setEnergy] = useState(maxEnergy);

   useEffect(() => {
      const interval = setInterval(() => {
         setEnergy((prev) => Math.min(prev + 1, maxEnergy));
      }, rechargeRate * 1000);

      return () => clearInterval(interval);
   }, [maxEnergy, rechargeRate]);

   return [energy, setEnergy] as const;
};

export default useEnergy;
