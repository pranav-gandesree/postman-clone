// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import KeyValuesInput from "./KeyValuesInput";
// import { Button } from '@chakra-ui/react'


// export default function KeyValuePairs({ panelValue, setPanelValue }) {
//   const [keyState, setKeyState] = useState(panelValue || []);

  
//     const addNewRow = () => {
//       setKeyState((state) => [
//         ...state,
//         {
//           id: uuidv4(),
//           key: "",
//           value: "",
//         },
//       ]);
//     };
  
//     const updateRow = (row, { name, value }) => {
//       setKeyState((state) =>
//         [...state].map((e) => {
//           if (e.id == row.id) {
//             return { ...e, [ name ] : value }
//           }
//           return e;
//         })
//       );
//     };
  
//     const removeRow = (row) => {
//       setKeyState((state) =>
//         [...state].filter((e) => e.id !== row.id)
//       );
//     };
  
//     useEffect(() => {
//       setPanelValue(keyState)
//     }, [ keyState ])

//     useEffect(() => {
//       setKeyState(panelValue || []);
//     }, [panelValue]);
    
  
//     return (
//       <section className="relative rounded-lg border border-white/5 bg-white/5 text-gray-200 text-sm p-2">
//         {keyState.map((row) => (
//           <KeyValuesInput
//             row={row}
//             key={row.id}
//             updateRow={updateRow}
//             removeRow={removeRow}
//           />
//         ))}
  
//         <Button onClick={addNewRow}>
//           Add
//         </Button>
//       </section>
//     );
//   }





import React from 'react';
import { Input, IconButton, Flex } from '@chakra-ui/react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';

const KeyValuePairs = ({ panelValue, setPanelValue }) => {
  const addRow = () => setPanelValue([...panelValue, { key: "", value: "" }]);
  
  const removeRow = (index) => {
    const newValues = [...panelValue];
    newValues.splice(index, 1);
    setPanelValue(newValues);
  };

  const updateRow = (index, field, value) => {
    const newValues = [...panelValue];
    newValues[index][field] = value;
    setPanelValue(newValues);
  };

  return (
    <>
      {panelValue.map((pair, index) => (
        <Flex key={index} gap={2} alignItems="center" mb={2}>
          <Input
            placeholder="Key"
            value={pair.key}
            onChange={(e) => updateRow(index, "key", e.target.value)}
            w="45%"
          />
          <Input
            placeholder="Value"
            value={pair.value}
            onChange={(e) => updateRow(index, "value", e.target.value)}
            w="45%"
          />
          <IconButton 
            icon={<DeleteIcon />} 
            onClick={() => removeRow(index)} 
            colorScheme="red" 
          />
        </Flex>
      ))}
      <IconButton
        icon={<AddIcon />}
        onClick={addRow}
        colorScheme="teal"
        mt={2}
      />
    </>
  );
};

export default KeyValuePairs;
