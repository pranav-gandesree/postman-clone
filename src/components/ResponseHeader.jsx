
import React from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


const rowStyle = {
    '&:last-child td, &:last-child th': { border: 0 },
    "& td" : { color : "#d2d2d2" }
}

export default function ResponseHeader({ panelValue }) {
  const headers = Object.entries(panelValue || {}).map(
    ([key, value], index) => {
      return (
        <Tr key={index} sx={rowStyle}>
          <Td>{key}</Td>
          <Td>{value}</Td>
        </Tr>
      );
    }
  );

  return (
    <TableContainer className="rounded-lg border border-white/5 bg-white/5 ">
      <Table aria-label="simple table">
        <Thead>
          <Tr sx={{ "& th" : { color : "white" } }}>
            <Td>Key</Td>
            <Td>Value</Td>
          </Tr>
        </Thead>
        <Tbody>{headers}</Tbody>
      </Table>
    </TableContainer>
    )
}
