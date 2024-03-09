import HeroSection from "components/Hero";
import Testimonial from "components/Testimonial";
import Stats from "components/Stats";
import { NextPage } from "next";
import Contact from "components/Contact";
import Client from "components/Client";
import Team from "components/Team";
import MoveToTop from "components/MoveToTop";

import Services from "components/Services";


const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <Testimonial />
      <Services/>
      <Client />
      <Team />
      <Contact />
      <MoveToTop />
    </>
  );
};

export default Home;
