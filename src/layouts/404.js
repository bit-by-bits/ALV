// React and Styles
import * as React from "react"

// Plugins and Modules
import { Col, Row } from "antd"

// Components and Utils

const Layout = ({ children }) => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "80vh", width: "100%" }}
    >
      <Col style={{ textAlign: "center" }}>{children}</Col>
    </Row>
  )
}

export default Layout
