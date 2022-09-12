import { Thead, Tr, Th } from "@chakra-ui/react";
import React from "react";

export default function TableWorldCupTitle({ title}) {
  return (
    <>
      <Thead  backgroundColor="white">
        <Tr>
          <Th>{title}</Th>
          <Th>copas</Th>
          <Th>ranking fifa</Th>
          <Th>partidos previos</Th>
          <Th>mejor resultado</Th>
        </Tr>
      </Thead>
    </>
  );
}
