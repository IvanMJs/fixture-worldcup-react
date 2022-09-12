import { Flex } from "@chakra-ui/react";
import React from "react";
import DateWorldCup from "../../components/dateWorldCup";
import fechas from "../../db/fechas.json";

const Fechas = () => {
  return (
    <Flex justifyContent={"center"}>
      <DateWorldCup fechas = {fechas}/>
    </Flex>
  );
};

export default Fechas;
