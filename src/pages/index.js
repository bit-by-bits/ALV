// React and Styles
import React, { Suspense, lazy, useState } from "react";
import "../styles/globals.css";
import "../styles/variables.css";

// Plugins and Modules

// Components and Utils
const Layout = lazy(() => import("../layouts/index"));
const Meta = lazy(() => import("../components/Meta"));
const Hero = lazy(() => import("../components/Hero"));
const About = lazy(() => import("../components/About"));
const Slideshow = lazy(() => import("../components/Slideshow"));
const Booking = lazy(() => import("../components/Booking"));
const Collage = lazy(() => import("../components/Collage"));
const Reviews = lazy(() => import("../components/Reviews"));
const Newsletter = lazy(() => import("../components/Newsletter"));

const IndexPage = () => {
  const [navWhite, setNavWhite] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout nav={navWhite}>
        <Hero setNav={setNavWhite} />
        <About />
        <Slideshow />
        <Booking />
        <Collage />
        <Reviews />
        <Newsletter />
      </Layout>
    </Suspense>
  );
};

export const Head = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Meta />
  </Suspense>
);

export default IndexPage;
