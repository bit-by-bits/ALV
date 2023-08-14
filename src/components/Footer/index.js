// React and Styles
import React from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

// Components and Utils

const Footer = () => {
  const { div: Mdiv } = motion;

  const variants = prevX => ({
    initial: { opacity: 0, x: prevX },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  return (
    <section className={`${styles.flex} ${styles.column} ${styles.wrapper}`}>
      <div className={`${styles.flex} ${styles.column} ${styles.top}`}>
        <Mdiv {...variants(-10)} className={`${styles.flex} ${styles.text}`}>
          <span>Powered by: </span>
          <a
            href="https://www.spothopperapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              height={25}
              alt="SpotHopper"
              src="https://static.spotapps.co/web/americanalasvegas--com/images/spothopper-logo-new.png"
            />
          </a>
        </Mdiv>
        <Mdiv {...variants(10)} className={`${styles.flex} ${styles.text}`}>
          <a
            href="https://www.spothopperapp.com/contact-us?contact_reason=demo"
            target="_blank"
            rel="noreferrer"
          >
            Website design, Social Media marketing and Email marketing provided
            by SpotHopper.
          </a>
        </Mdiv>
      </div>
      <div className={`${styles.flex} ${styles.column} ${styles.btm}`}>
        <Mdiv {...variants(0)} className={`${styles.flex} ${styles.text}`}>
          <span>We strive to make our website accessible to everybody.</span>
          <a
            href="https://americanalasvegas.com/accessibility-page-01"
            target="_blank"
            rel="noreferrer"
          >
            Learn More.
          </a>
        </Mdiv>
      </div>
    </section>
  );
};

export default Footer;
