// Plugins and Modules
import { graphql, useStaticQuery } from "gatsby";

const useSiteMetaData = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
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
  `);

  return siteMetadata;
};

export default useSiteMetaData;
