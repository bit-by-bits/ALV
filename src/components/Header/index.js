// React and Styles
import React, { useEffect } from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { Link } from "gatsby";
import { motion, useAnimation } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

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

  return (
    <Msec className={`${styles.flex} ${styles.wrapper}`} animate={controls}>
      <Link to="/">
        <StaticImage
          alt="Americana"
          className={styles.left}
          src="../../images/logo.png"
        />
      </Link>
      <div className={styles.flex}>
        {[
          [
            "MENU",
            "https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu",
          ],
          [
            "DRINKS",
            "https://americanalasvegas.com/las-vegas-americana-restaurant-drink-menu",
          ],
          [
            "CATERING",
            "https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http://americanalasvegas.com/#",
          ],
          [
            "EVENTS",
            "https://americanalasvegas.com/las-vegas-americana-restaurant-events",
          ],
          [
            "PARTIES",
            "https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http://americanalasvegas.com/#",
          ],
          [
            "RESERVE",
            "https://www.opentable.com/restref/client/?restref=269260&rid=269260&datetime=2021-12-08T16%3A00&covers=2&searchdatetime=2021-12-08T16%3A00&partysize=2&corrid=7ee00b3e-75e3-43ce-92ea-a69d52155d3d#",
          ],
          [
            "JOBS",
            "https://tmt.spotapps.co/job-listings?spot_id=77510&callback_url=http://americanalasvegas.com/#",
          ],
        ].map(([text, link], i) => (
          <Manc
            key={i}
            href={link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
            className={`${nav ? styles.slink : ""} ${styles.link}`}
          >
            {text}
          </Manc>
        ))}
        {[
          ["https://www.instagram.com/americanalv", "instagram"],
          ["https://www.yelp.com/biz/americana-las-vegas-2", "yelp"],
        ].map(([href, icon], i) => (
          <Manc
            key={i}
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1, transition: { duration: 0.05 } }}
            className={`${nav ? styles.slink : ""} ${i ? "" : styles.llink} ${
              styles.link
            }`}
          >
            <i className={`social-icon fa fa-${icon}`} />
          </Manc>
        ))}
      </div>
    </Msec>
  );
};

export default Header;
