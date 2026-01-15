import React from "react";
import Hero from "../components/Hero";
import FeaturedJob from "../components/FeaturedJob";
import Services from "../components/ServicesSection";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedJob />
      <Services />
      <Banner />
    </>
  );
};

export default Home;
