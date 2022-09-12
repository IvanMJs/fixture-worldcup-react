import { Button } from "@chakra-ui/react";
import React from "react";

export default function ButtonSearch({ handleClick }) {
  return (
    <Button bg={"#F1B814"} mt={"5%"} type="submit" onClick={handleClick}>
      Buscar Equipo
    </Button>
  );
}
