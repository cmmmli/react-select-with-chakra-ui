import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./example";
import ColorModeSwitch from "./color-mode-switch";

ReactDOM.render(
  <ChakraProvider>
    <App />
    <ColorModeSwitch />
  </ChakraProvider>,
  document.getElementById("root")
);
