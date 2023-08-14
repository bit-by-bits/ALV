// React and Styles
import React from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";

// Components and Utils

const About = () => {
  const { img: Mimg, div: Mdiv } = motion;

  const variants = prevX => ({
    initial: { opacity: 0, x: prevX },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  return (
    <section className={styles.wrapper}>
      <div className={`${styles.flex} ${styles.red}`}>
        <Link to="/#map">
          <i className="fa fa-map-marker" />
        </Link>
        <span>2620 Regatta Drive, Las Vegas, NV 89128</span>
      </div>
      <div className={`${styles.flex} ${styles.column} ${styles.rel}`}>
        <StaticImage
          className={`${styles.top} ${styles.abs}`}
          src="../../images/red.svg"
          alt=""
        />
        <div
          style={{ backgroundColor: "#ddedfa" }}
          className={`${styles.cover} ${styles.flex}`}
        >
          <Mimg
            {...variants(-100)}
            alt=""
            className={styles.left}
            src="https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_left_1.jpg"
          />
          <Mdiv
            {...variants(100)}
            className={`${styles.flex} ${styles.column} ${styles.right}`}
          >
            <h1 className={styles.heading}>ABOUT US</h1>
            <div className={styles.body}>
              Americana brings incredible blends of various cultures to the
              Desert Shores community in Las Vegas. The restaurant offers fine
              dining with a blended cultural theme of modern American cuisine.
            </div>
            <a href="/las-vegas-americana-restaurant-about" target="_self">
              <button className={styles.button}>READ MORE</button>
            </a>
          </Mdiv>
        </div>
        <StaticImage
          className={`${styles.btm} ${styles.abs}`}
          src="../../images/white.svg"
          alt=""
        />
      </div>
      <div className={styles.about}>
        {[
          [
            "https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_right.jpg",
            "CATERING",
            "Let us cater your next event",
            "We Cater your Needs. Elegant style of catering for your style and budget. Any kind of event from weddings to birthdays.",
            "https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F",
          ],
          [
            "https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_left_2.jpg",
            "PARTIES",
            "Book your next party with us!",
            "No matter the occasion you can celebrate at our place! Book a private party.",
            "https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http://americanalasvegas.com/",
          ],
        ].map((item, idx) => (
          <div
            className={`${styles.cover} ${styles.flex}`}
            key={idx}
            style={{ flexDirection: idx % 2 === 0 ? "row" : "row-reverse" }}
          >
            <Mimg
              {...variants(idx % 2 === 0 ? -100 : 100)}
              className={styles.leftt}
              src={item[0]}
              alt=""
            />
            <Mdiv
              {...variants(idx % 2 === 0 ? 100 : -100)}
              className={`${styles.flex} ${styles.column} ${styles.rightt}`}
            >
              <h1 className={styles.heading}>{item[1]}</h1>
              <h2 className={styles.subheading}>{item[2]}</h2>
              <div className={styles.body}>{item[3]}</div>
              <a href={item[4]} target="_blank" rel="noreferrer">
                <button className={`${styles.invert} ${styles.button}`}>
                  {item[1]}
                </button>
              </a>
            </Mdiv>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
