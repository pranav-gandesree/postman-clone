// import React from 'react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';

// import KeyValuePairs from './KeyValuePairs';
// import JsonEditor from "./JsonEditor";

// const RequestTabs = ({
//   queryParams,
//   setQueryParams,
//   headers,
//   setHeaders,
//   body,
//   setBody,
// }) => {
//   const tabs = [
//     {
//       id: 1,
//       name: "Query Params",
//       value: queryParams,
//       setValue: setQueryParams,
//       panel: KeyValuePairs,
//     },
//     {
//       id: 2,
//       name: "Headers",
//       value: headers,
//       setValue: setHeaders,
//       panel: KeyValuePairs,
//     },
//     {
//       id: 3,
//       name: "Body",
//       value: body,
//       setValue: setBody,
//       panel: JsonEditor,
//     },
//   ];

//   return (
//     <Box w="100%" maxW="1200px" mx="auto" p={[2, 4]} mt={6} boxShadow="lg" borderRadius="lg">
//       <Tabs>
//         <TabList className="relative text-white rounded-lg border border-white/5 bg-white/5 font-medium text-md p-1.5 flex gap-3 flex-wrap tabs">
//           {tabs.map((tab) => (
//             <Tab
//               key={tab.id}
//               className="relative z-10 px-4 py-2 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-[5px] cursor-pointer"
//             >
//               {tab.name}
//             </Tab>
//           ))}
//         </TabList>

//         <div className="w-full h-2"></div>
//         <TabPanels>
//           {tabs.map((tab) => {
//             const PanelComponent = tab.panel; // Move inside the map function
//             return (
//               <TabPanel key={tab.id}>
//                 <PanelComponent panelValue={tab.value} setPanelValue={tab.setValue} />
//               </TabPanel>
//             );
//           })}
//         </TabPanels>
//       </Tabs>
//     </Box>
//   );
// };

// export default RequestTabs;




import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import KeyValuePairs from './KeyValuePairs';
import JsonEditor from "./JsonEditor";

const RequestTabs = ({
  queryParams,
  setQueryParams,
  headers,
  setHeaders,
  body,
  setBody,
}) => {
  const tabs = [
    {
      id: 1,
      name: "Query Params",
      value: queryParams,
      setValue: setQueryParams,
      panel: KeyValuePairs,
    },
    {
      id: 2,
      name: "Headers",
      value: headers,
      setValue: setHeaders,
      panel: KeyValuePairs,
    },
    {
      id: 3,
      name: "Body",
      value: body,
      setValue: setBody,
      panel: JsonEditor,
    },
  ];

  return (
    <Box w="90%" maxW="1200px" mx="auto" p={4} mt={6} borderRadius="lg">
      <Tabs>
        <TabList className="relative text-white rounded-lg border border-white/5 bg-white/5 font-medium text-md p-1.5 flex gap-3 flex-wrap tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              className="relative z-10 px-4 py-2 focus:ring-1 focus:outline-none focus:ring-blue-300 rounded-[5px] cursor-pointer"
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabs.map((tab) => {
            const PanelComponent = tab.panel; 
            return (
              <TabPanel key={tab.id}>
                <PanelComponent panelValue={tab.value} setPanelValue={tab.setValue} />
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default RequestTabs;
