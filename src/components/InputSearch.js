import {  Input } from "@chakra-ui/react";


const InputSearch = ({ search, handleSearch }) => {
  return (
    
      <Input
        textAlign={"center"}
        bg={"azure"}
        w={"auto"}
        value={search}
        onChange={handleSearch}
        autoComplete="on"
        placeholder="Buscar País..."
      />
   
  );
};

export default InputSearch;
