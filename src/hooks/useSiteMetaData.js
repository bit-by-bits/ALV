// React and Styles

// Plugins and Modules
import { graphql, useStaticQuery } from "gatsby"

// Components and Utils

const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          url
          siteUrl
          description
          image
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetaData
