// React and Styles
import * as React from "react"
import "../styles/globals.css"

// Plugins and Modules
import { Link } from "gatsby"
import { Typography, Image, Col } from "antd"

// Components and Utils
import Layout from "../layouts/404"
import Meta from "../components/Meta"

const NotFoundPage = () => {
  const { Title } = Typography

  return (
    <Layout>
      <Title>404 Error</Title>
      <Image
        preview={false}
        width={"60vw"}
        style={{ maxWidth: 500 }}
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="404"
      />
      <Col style={{ textAlign: "center" }}>
        <Title level={3} class="h2">
          Looks like you're lost!
        </Title>
        <Title level={5}>the page you are looking for is not available</Title>
        <Link to="/">Go to Home</Link>
      </Col>
    </Layout>
  )
}

export const Head = () => <Meta title="404 | Not Found" />

export default NotFoundPage
