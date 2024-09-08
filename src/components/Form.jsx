import React from 'react';
import { Select, Input, Button, Flex } from '@chakra-ui/react';
import ICON from "../assets/index";

const Form = ({ sending, urlState, methodState, onSendRequest }) => {
  console.log('urlState:', urlState);  
  console.log('methodState:', methodState);

  const [URL, setURL] = urlState;  
  const [method, setMethod] = methodState;

  return (
    <form onSubmit={(e) => onSendRequest(e)} className="flex gap-1 w-full flex-wrap">
      <Flex
        direction={['column', 'column', 'row']}  // Stack vertically on small screens, row on larger
        align="center"
        justify="center"
        gap={3}  // Adds space between each element
        width="70%"  // Width of the form container
        mb={4}  // Adds some margin at the bottom
      >
        {/* Select Method */}
        <Select 
          value={method}  // Bind selected method to state
          onChange={(e) => setMethod(e.target.value)}  // Update method state on change
          placeholder="Select method" 
          w={['100%', '100%', '30%']}  // Responsive width
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="PATCH">PATCH</option>
          <option value="DELETE">DELETE</option>
        </Select>

        {/* Input URL */}
        <Input
          placeholder="Enter URL"
          value={URL}  // Bind input value to state
          onChange={({ target: { value } }) => setURL(value)}  // Update URL state on change
          w={['100%', '100%', '55%']}  // Responsive width
          mx={2}  // Adds margin on both sides for spacing
        />

        {/* Submit Button */}
        <Button
          colorScheme="teal" 
          w={['100%', '100%', '15%']}  // Responsive width
          type="submit"
          isLoading={sending}  // Loading state for button
        >
          {sending ? <ICON.Loader /> : <ICON.Send />}  {/* Icon depending on loading state */}
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
