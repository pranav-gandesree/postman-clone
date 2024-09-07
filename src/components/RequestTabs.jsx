import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

const RequestTabs = () => {
  return (
    <Box w="100%" maxW="1200px" mx="auto" p={[2, 4]} mt={6} boxShadow="lg" borderRadius="lg">
      <Tabs variant="enclosed">
        <TabList>
          <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Headers</Tab>
          <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Body</Tab>
          <Tab _selected={{ color: 'white', bg: 'teal.500' }}>Response</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Request Headers go here!</p>
          </TabPanel>
          <TabPanel>
            <p>Request Body content!</p>
          </TabPanel>
          <TabPanel>
            <p>Response data will be shown here!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RequestTabs;
