import React from "react";
import Carousel from "./index";
import carouselData from "./carouselData";

import SubHeading from "../Titles/SubHeading";

const ClientsLogos = () => {
  return (
    <section className=" mx-auto  py-16 lg:w-full bg-background z-50">
      <SubHeading>Trusted by Many</SubHeading>
      <Carousel items={carouselData} />
    </section>
  );
};

export default ClientsLogos;
