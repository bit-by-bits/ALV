// React and Styles
import React, { useEffect } from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import Hamburger from "./ham";
import { icons, items } from "./items";

// Components and Utils

const Header = ({ nav }) => {
  const controls = useAnimation();
  const { section: Msec, a: Manc } = motion;

  useEffect(() => {
    const alpha = nav ? 1 : 0;
    controls.start({
      backgroundColor: `rgba(255, 255, 255, ${alpha})`,
      boxShadow: `0px 2px 5px 0px rgba(0, 0, 0, ${alpha})`,
    });
  }, [nav, controls]);

  const PARAMS = (idx, link) => ({
    key: idx,
    href: link,
    target: "_blank",
    rel: "noreferrer",
    initial: {
      y: 0,
      transition: { duration: 0.2 },
    },
    whileHover: {
      y: [-3, 0],
      transition: { duration: 0.2 },
    },
  });

  return (
    <Msec className={`${styles.flex} ${styles.wrapper}`} animate={controls}>
      <Link to="/">
        <StaticImage
          alt="Americana"
          className={styles.left}
          src="../../images/logo.png"
        />
      </Link>
      <div className={`${styles.hide} ${styles.flex}`}>
        {items.map(([text, link], i) => (
          <Manc
            {...PARAMS(i, link)}
            className={`${nav ? styles.slink : ""} ${styles.link}`}
          >
            {text}
          </Manc>
        ))}
        {icons.map(([link, icon], i) => (
          <Manc
            {...PARAMS(i, link)}
            className={
              `${nav ? styles.slink : ""} ${styles.link} ` +
              (i ? "" : styles.llink)
            }
          >
            <i className={`social-icon fa fa-${icon}`} />
          </Manc>
        ))}
      </div>
      <Hamburger />
    </Msec>
  );
};

export default Header;
