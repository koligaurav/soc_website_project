import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FreeCourses from "../components/FreeCourses";  // Correct import statement
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <FreeCourses />  // Correct component usage
      <Footer />
    </>
  );
}

export default Home;
