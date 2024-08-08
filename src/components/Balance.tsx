import React from "react";
import { Box, Image } from "@chakra-ui/react";

type Props = {
   balance: number;
};

const Balance: React.FC<Props> = ({ balance }) => {
   return (
      <Box className="balance">
         <Image src="assets/img/balance-coin.png" boxSize={"30px"} mr={3} />

         {balance}
      </Box>
   );
};

export default Balance;
