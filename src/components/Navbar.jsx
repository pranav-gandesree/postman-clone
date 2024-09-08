import { Button, useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <div className="py-3 px-6 sticky h-20 top-0 left-0 w-full z-30 bg-gray-800 flex justify-between items-center backdrop-blur-md shadow transition-all duration-500 ease-in-out">
    {/* <div className=" p-4 sticky top-0 left-0 bg-gray-800 text-white rounded-lg shadow-lg transition-all duration-500 ease-in-out items-center justify-between"> */}
       <h1 className="text-3xl font-semibold text-center text-[#81e6d9]">Postpal</h1>
      {/* <h3>📪</h3> */}
      {/* <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </Button> */}
    </div>
  );
};

export default Navbar;
