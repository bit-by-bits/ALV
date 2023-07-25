// React and Styles
import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

// Plugins and Modules

// Components and Utils

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
