import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Header = () => {
  return (
    <Breadcrumb h={"10%"} textAlign={"center"} separator="-">
      {/*  //isCurrentPage */}
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/equipos">Equipos</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/fechas">Fechas</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Header;
