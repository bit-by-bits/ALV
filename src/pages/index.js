// React and Styles
import * as React from "react"
import "../styles/globals.css"
import "../styles/variables.css"

// Plugins and Modules

// Components and Utils
import Layout from "../layouts/index"
import Meta from "../components/Meta"
import Hero from "../components/Hero"
import About from "../components/About"
import Slideshow from "../components/Slideshow"

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Slideshow />
  </Layout>
)

export const Head = () => <Meta />

export default IndexPage
