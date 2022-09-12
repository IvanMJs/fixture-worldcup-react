import { useMemo, useState } from "react";
import equipos from "../../db/equipos.json";
import { Stack, TableContainer, Table, Flex, Text } from "@chakra-ui/react";
import InputSearch from "../../components/InputSearch";
import TableWorldCup from "../../components/TableWorldCup";
import TableWorldCupTitle from "../../components/TableWorldCupTitle";
import ButtonSearch from "../../components/ButtonSearch";

const Equipos = () => {
  const [search, setSearch] = useState("");
  const [searchButton, setSearchButton] = useState("");

  const filteredProduct = useMemo(
    () =>
      equipos.filter((prod) => {
        const product = prod.title
          .toLowerCase()
          .includes(searchButton.toLowerCase());
        return product;
      }),
    [searchButton]
  );

  const handleSearch = (event) => {
    if (event.target.value === "") setSearchButton("");
    setSearch(event.target.value);
  };
  const handleClick = (event) => {
    event.preventDefault();
    setSearchButton(search);
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <Flex mb={"5%"} placeContent={"center"} mt={"5%"} display={"grid"}>
          <InputSearch search={search} handleSearch={handleSearch} />
          <ButtonSearch handleClick={handleClick} />
        </Flex>

        <Flex
          justifyContent={"center"}
          borderRadius={"0.9%"}
          mb={"5%"}
          bg={"#FECD45"}
          ml={"2%"}
          mr={"2%"}
        >
          <Flex
            display={"grid"}
            mt={"5%"}
            textColor={"#2568FB"}
            fontWeight="bold"
          >
            <Flex
              mb={"5%"}
              fontSize="50px"
              color={"#2568FB"}
              justifySelf={"center"}
            >
              <Text as="b" fontSize={"xx-large"}>
                Equipos del mundial
              </Text>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO A" ? (
                          <TableWorldCupTitle title="GRUPO A" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO A" />
                    )}
                    {filteredProduct?.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO A" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO B" ? (
                          <TableWorldCupTitle title="GRUPO B" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO B" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO B" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO C" ? (
                          <TableWorldCupTitle title="GRUPO C" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO C" />
                    )}

                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO C" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO D" ? (
                          <TableWorldCupTitle title="GRUPO D" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO D" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO D" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO E" ? (
                          <TableWorldCupTitle title="GRUPO E" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO E" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO E" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO F" ? (
                          <TableWorldCupTitle title="GRUPO F" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO F" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO F" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack mt={"10%"} borderRadius={"12px"} borderWidth={"1px"}>
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO G" ? (
                          <TableWorldCupTitle title="GRUPO G" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO G" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO G" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
            <Flex justifyContent={"center"}>
              <Stack
                mt={"10%"}
                mb={"15%"}
                borderRadius={"12px"}
                borderWidth={"1px"}
              >
                <TableContainer>
                  <Table variant="simple">
                    {searchButton !== "" ? (
                      filteredProduct?.map((e) =>
                        e?.grupo === "GRUPO H" ? (
                          <TableWorldCupTitle title="GRUPO H" />
                        ) : (
                          ""
                        )
                      )
                    ) : (
                      <TableWorldCupTitle title="GRUPO H" />
                    )}
                    {filteredProduct.map(
                      (equi, index) =>
                        equi.grupo === "GRUPO H" && (
                          <TableWorldCup equi={equi} index={index} />
                        )
                    )}
                  </Table>
                </TableContainer>
              </Stack>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
};

export default Equipos;
