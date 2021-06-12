import React from "react";
import Footer from "../../Shared/Footer/Footer";
import NavHeader from "../../Shared/NavHeader/NavHeader";
import AboutMe from "../About/AboutMe";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import HomeBanner from "../HomeBanner/HomeBanner";
import Testimonial from "../Testimonial/Testimonial";
import Team from "../Team/Team";
import '../Responsive/Responsive.css'

const Home = () => {
  return (
    <div>
      <NavHeader />
      <HomeBanner />
      <AboutMe />
      <ClassSchedule />
      <Testimonial />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
