import React from "react";
import { Box, Image } from "@chakra-ui/react";
import balanceCoinImg from "../assets/img/balance-coin.png";

type Props = {
   balance: number;
};

const Balance: React.FC<Props> = ({ balance }) => {
   return (
      <Box className="balance">
         <Image src={balanceCoinImg} alt="Balance Coin" boxSize={"30px"} mr={3} />

         {balance}
      </Box>
   );
};

export default Balance;
