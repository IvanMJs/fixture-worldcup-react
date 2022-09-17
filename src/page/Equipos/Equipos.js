import { useMemo, useState } from "react";
import equipos from "../../db/equipos.json";
import { TableContainer, Table, Flex, Text } from "@chakra-ui/react";
import InputSearch from "../../components/InputSearch";
import TableWorldCup from "../../components/TableWorldCup";
import TableWorldCupTitle from "../../components/TableWorldCupTitle";
import ButtonSearch from "../../components/ButtonSearch";

const Equipos = () => {
  const [search, setSearch] = useState("");
  const [searchButton, setSearchButton] = useState("");
  const [group, setGroup] = useState("");

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

  const switchGroup = (groupName) => {
    switch (groupName) {
      case "GRUPO A":
        setGroup(groupName);
        break;
      case "GRUPO B":
        setGroup(groupName);
        break;
      case "GRUPO C":
        setGroup(groupName);
        break;
      case "GRUPO D":
        setGroup(groupName);
        break;
      case "GRUPO E":
        setGroup(groupName);
        break;
      case "GRUPO F":
        setGroup(groupName);
        break;
      case "GRUPO G":
        setGroup(groupName);
        break;
      case "GRUPO H":
        setGroup(groupName);
        break;
      default:
        break;
    }
  }; //VER FROMA DE HACER MAS DINAMICA LAS TABLAS
  return (
    <>
      <form onSubmit={handleClick}>
        <Flex mb={"5%"} placeContent={"center"} mt={"5%"} display={"grid"}>
          <InputSearch search={search} handleSearch={handleSearch} />
          <ButtonSearch handleClick={handleClick} />
        </Flex>

        <Flex
          justifyContent={"center"}
          borderRadius={"2%"}
          mb={"5%"}
          bg={"#FECD45"}
          ml={"2%"}
          mr={"2%"}
          display={"grid"}
          textColor={"#2568FB"}
          fontWeight="bold"
        >
          <Flex justifySelf={"center"} mb={"5%"}>
            <Text textAlign={"center"} as="b" fontSize={"xx-large"}>
              Equipos del mundial
            </Text>
          </Flex>

          <TableContainer boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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
          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer mt={"5%"} boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}>
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

          <TableContainer
            mb={"5%"}
            mt={"5%"}
            boxShadow={"rgb(0 0 0 / 35%) 0px 5px 15px"}
          >
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
        </Flex>
      </form>
    </>
  );
};

export default Equipos;
