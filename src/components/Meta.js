import React from "react";
import { Script } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetaData";

const Meta = ({ title, description, pathname, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteUrl,
    image,
  } = useSiteMetadata();

  const SEO = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${url}${image}`,
    url: `${url}${pathname || ''}`,
    siteUrl: siteUrl,
  };

  const iconLinks = [
    { rel: "shortcut icon", href: "favicon-32x32.png", type: "image/x-icon" },
    { rel: "apple-touch-icon", href: "apple-touch-icon.png", sizes: "180x180" },
    { rel: "icon", href: "favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", href: "favicon-16x16.png", sizes: "16x16", type: "image/png" },
  ];

  const styleLinks = [
    "bootstrap/css/bootstrap.min.css",
    "gallery/gallery.css",
    "fancybox/source/jquery.fancybox.css",
    "fancybox/source/helpers/jquery.fancybox-thumbs.css",
    "uikit/css/uikit.docs.min.css",
    "uikit/css/slidenav.css",
    "font-awesome-4.7.0/css/font-awesome.min.css",
    "hover_css/css/hover-min.css",
    "owlcarousel/owl.carousel.min.css",
    "owlcarousel/owl.theme.default.min.css",
    "leaflet@1.3.1/dist/leaflet.css",
    "css/style.css?version2",
    "css/bottom_navigation_v1.css?v1640693125",
    "icons_font/css/social_icons.css",
  ];

  const renderLinks = (links, baseUrl) =>
    links.map((link, index) => (
      <link key={index} href={`https://static.spotapps.co/web/americanalasvegas--com/lib/${baseUrl}/${link}`} rel={link.rel} sizes={link.sizes} type={link.type} />
    ));

  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="title" content={SEO.title} />
      <meta name="description" content={SEO.description} />

      <meta property="og:description" content={SEO.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO.url} />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:image" content={SEO.image} />

      <title>{SEO.title}</title>

      {renderLinks(iconLinks, "")}

      <link rel="manifest" href="site.webmanifest" />
      <link rel="mask-icon" color="#002e48" href="safari-pinned-tab.svg" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {renderLinks(styleLinks, "lib")}
      
      <Script src="lazysizes/lazysizes.min.js" async="" />

      {/* Other Tags */}
      {children}
    </>
  );
};

export default Meta;
