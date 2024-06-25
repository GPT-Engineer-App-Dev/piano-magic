import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  background: {
    100: "#e0f7fa",
    200: "#b2ebf2",
    300: "#80deea",
    400: "#4dd0e1",
    500: "#26c6da",
    600: "#00bcd4",
    700: "#00acc1",
    800: "#0097a7",
    900: "#00838f",
  },
  text: {
    100: "#ffffff",
    200: "#e0f7fa",
    300: "#b2ebf2",
    400: "#80deea",
    500: "#4dd0e1",
    600: "#26c6da",
    700: "#00bcd4",
    800: "#00acc1",
    900: "#00838f",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);