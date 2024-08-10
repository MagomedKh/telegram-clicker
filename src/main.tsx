import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { SDKProvider } from "@telegram-apps/sdk-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <ChakraProvider>
         <SDKProvider debug>
            <App />
         </SDKProvider>
      </ChakraProvider>
   </React.StrictMode>
);
