import { Badge, Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DateWorldCup = ({ fechas }) => {
  const [value, onChange] = useState(new Date());
  const [dateFilter, setDateFilter] = useState();
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const startMundial = new Date(2022, 10, 20);
  const valueParse = value.toLocaleDateString("arg", opciones);

  useEffect(() => {
    const dateValueFilter = fechas.filter((e) => e.fecha === valueParse);
    setDateFilter(dateValueFilter);
    // eslint-disable-next-line no-use-before-define
  }, [fechas, valueParse]);

  return (
    <Flex
      borderRadius={"2%"}
      bg={"#FECD45"}
      mb={"5%"}
      mt={"5%"}
      ml={"2%"}
      mr={"2%"}
      display="grid"
      justifyItems={"center"}
      textAlign={"center"}
    >
      <Flex mb={"5%"} justifyContent="center">
        <Text as="b" fontSize="50px" color={"#2568FB"} ml={"10%"} mr={"10%"}>
          <p>Desde el 20 de noviembre hasta el 2 de diciembre puedes elegir</p>
        </Text>
      </Flex>

      <Flex justifyContent={"center"}>
        <Box boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
          <Calendar
            onChange={onChange}
            defaultActiveStartDate={startMundial}
            value={value}
          />
        </Box>
      </Flex>
      <SimpleGrid spacing="7" mt={"5%"} mb={"10%"}>
        <SimpleGrid
          spacing="7"
          columns={
            dateFilter?.length !== 1 ? { sm: 2, md: 2 } : { sm: 1, md: 1 }
          }
        >
          {dateFilter?.map((date, index) => (
            <Box
              key={index}
              boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}
              textAlign={"center"}
              mt={"5%"}
              maxW="sm"
              borderWidth="4px"
              borderRadius="lg"
              overflow="hidden"
              borderColor={"blue.200"}
            >
              <Box background={"#2e2e2e"} textColor="white" boxSize="sm">
                <Flex w={"50%"}>
                  <Img src={date.flagOne} />

                  <Img src={date.flagTwo} />
                </Flex>
                <Text as="b">Partido:</Text>
                <Text>
                  <Badge borderRadius="full" px="2" bgColor={"#5EBEC4"}>
                    {date.title}
                  </Badge>
                </Text>

                <Text as="b">Fecha:</Text>
                <Text>
                  <Badge borderRadius="full" px="2" colorScheme="yellow">
                    {date.fecha}
                  </Badge>
                </Text>
                <Text as="b">Hora:</Text>
                <Text>
                  <Badge borderRadius="full" px="2" colorScheme="yellow">
                    {date.hora}
                  </Badge>
                </Text>
                <Text as="b">Lugar:</Text>
                <Text>
                  <Badge borderRadius="full" px="2" bgColor={"#5EBEC4"}>
                    {date.lugar}
                  </Badge>
                </Text>
                <Text as="b">Grupo:</Text>
                <Text>
                  <Badge borderRadius="full" px="2">
                    "{date.grupo}"
                  </Badge>
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </SimpleGrid>
    </Flex>
  );
};

export default DateWorldCup;
