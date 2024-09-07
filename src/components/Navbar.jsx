import { Button, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <div className="py-3 px-6 sticky top-0 left-0 w-full z-30 bg-gray-500/5 flex justify-between items-center backdrop-blur-md shadow">
      <h2>postman clone</h2>
      <h3>logo</h3>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </Button>
    </div>
  );
};

export default Navbar;
