// React and Styles
import React from "react"

// Plugins and Modules
import { Script } from "gatsby"

// Components and Utils
import useSiteMetadata from "../hooks/useSiteMetaData"

const Meta = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteUrl,
    image,
  } = useSiteMetadata()

  const SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image}`,
    url: `${url}${pathname || ``}`,
    siteUrl: siteUrl,
  }

  return (
    <head>
      <meta charset="utf-8" />
      <meta content="IE=edge" http-equiv="X-UA-Compatible" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />

      <meta content={SEO.title} name="title" />
      <meta content={SEO.description} name="description" />

      <meta content={SEO.description} property="og:description" />
      <meta content="website" property="og:type" />
      <meta content={SEO.url} property="og:url" />
      <meta content={SEO.title} property="og:title" />
      <meta content={SEO.image} property="og:image" />

      <title>{SEO.title}</title>
      <link
        rel="shortcut icon"
        href="https://static.spotapps.co/web/americanalasvegas--com/favicon-32x32.png"
        type="image/x-icon"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/site.webmanifest"
        rel="manifest"
      />
      <link
        color="#002e48"
        href="https://static.spotapps.co/web/americanalasvegas--com/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <meta content="#ffffff" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/gallery/gallery.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/fancybox/source/jquery.fancybox.css"
        media="screen"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/uikit/css/uikit.docs.min.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/uikit/css/slidenav.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/font-awesome-4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/hover_css/css/hover-min.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/owlcarousel/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/owlcarousel/owl.theme.default.min.css"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/css/style.css?version2"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/css/bottom_navigation_v1.css?v1640693125"
        rel="stylesheet"
      />
      <link
        href="css/custom.css?v1642674259&domain=americanalasvegas.com"
        rel="stylesheet"
      />
      <link
        href="https://static.spotapps.co/web/americanalasvegas--com/lib/icons_font/css/social_icons.css"
        rel="stylesheet"
      />
      <Script
        src="https://static.spotapps.co/websites/lib/lazysizes/lazysizes.min.js"
        async=""
      />

      {/* Other Tags */}
      {children}
    </head>
  )
}

export default Meta
