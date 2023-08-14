// React and Styles
import React, { useState } from "react";
import "../styles/globals.css";
import "../styles/variables.css";

// Plugins and Modules

// Components and Utils
import Layout from "../layouts/index";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import About from "../components/About";
import Slideshow from "../components/Slideshow";
import Booking from "../components/Booking";
import Collage from "../components/Collage";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const IndexPage = () => {
  const [navWhite, setNavWhite] = useState(false);

  return (
    <Layout nav={navWhite}>
      <Hero setNav={setNavWhite} />
      <About />
      <Slideshow />
      <Booking />
      <Collage />
      <Reviews />
      <Newsletter />
    </Layout>
  );
};

export const Head = () => <Meta />;

export default IndexPage;
