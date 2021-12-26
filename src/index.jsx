import * as React from 'react'
import ReactDOM from "react-dom"

// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeScript, CSSReset } from "@chakra-ui/react";

const App = () => {
    const loginHook = useLogin();
    const graphHook = useGraph(loginHook);
  
    return (
      <UserContext.Provider value={loginHook}>
        <GraphContext.Provider value={graphHook}>
          <MainApp />
        </GraphContext.Provider>
      </UserContext.Provider>
    );
  };
  
  ReactDOM.render(
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      <ColorModeScript initialColorMode={customTheme.config.initialColorMode} />
      <App />
    </ChakraProvider>,
    document.getElementById("root")
  );