import React from 'react';
import { Select, Input, Button, Flex } from '@chakra-ui/react';

const Form = () => {
  return (
    <Flex
      direction={['column', 'column', 'row']}  // Stack on small screens, row on larger
      align="center"
      justify="center"
      gap={3}  // Adds space between each element
      width="70%"
      mb={4}  // Adds some margin at the bottom
    >
      <Select placeholder="Select method" w={['100%', '100%', '30%']}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="DELETE">DELETE</option>
      </Select>

      <Input
        placeholder="Enter URL"
        w={['100%', '100%', '55%']}
        mx={2}  // Adds margin on both sides for spacing
      />

      <Button colorScheme="teal" w={['100%', '100%', '15%']}>
        Send
      </Button>
    </Flex>
  );
};

export default Form;
