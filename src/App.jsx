import Navbar from "./components/Navbar"
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";


const theme = extendTheme({
  config: {
    initialColorMode: "dark", // Default mode can be 'light' or 'dark'
    useSystemColorMode: false, // Disable system preference
  },
});


function App() {

  return (
    <>
     <ChakraProvider  theme={theme}>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <Navbar/>
      <HomePage/>
       </ChakraProvider>
    </>
  )
}

export default App
