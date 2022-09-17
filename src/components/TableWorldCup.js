import { Tbody, Td, Tr } from "@chakra-ui/react";

import React from "react";

const TableWorldCup = ({ index, equi }) => {
  return (
    <>
      <Tbody  key={index} bg="azure">
        <Tr>
          <Td>{equi.title}</Td>
          <Td>{equi.copas}</Td>
          <Td>{equi.jugadores}</Td>
          <Td>{equi.id}</Td>
          <Td>{equi.dt}</Td>
        </Tr>
      </Tbody>
    </>
  );
};

export default TableWorldCup;
