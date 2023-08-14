// React and Styles
import React, { useState } from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { Carousel } from "antd";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

// Components and Utils

const Slideshow = () => {
  const { h1: Mone } = motion;
  const [auto, setAuto] = useState(true);

  const variants = prevX => ({
    initial: { opacity: 0, x: prevX },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  });

  return (
    <section className={styles.wrapper}>
      <div
        tabIndex={0}
        role="button"
        onKeyDown={event => setAuto(event.key === "Enter" ? !auto : auto)}
        className={`${styles.flex} ${styles.rel} ${styles.big}`}
      >
        <StaticImage
          className={`${styles.top} ${styles.abs}`}
          src="../../images/white.svg"
          alt=""
        />
        <Carousel
          effect="fade"
          className="ss"
          autoplaySpeed={2000}
          autoplay={auto}
        >
          {[
            [
              "https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/2c/a177c9479648c99cc3cdc58d5cc96d/:original",
              "Americana's Authentic Dishes",
              "https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu",
              "Our Menu",
            ],
            [
              "https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/0d/c06afe3575412ea41a27a7f0356281/:original",
              "Served To Perfection",
              "https://tmt.spotapps.co/catering?spot_id=77510&callback_url=http%3A%2F%2Famericanalasvegas.com%2F",
              "Catering",
            ],
            [
              "https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/80/9ed2ab348f4b18b2c922c182ed82c8/:original",
              "Authentic Taste In Every Cuisine",
              "https://americanalasvegas.com/las-vegas-americana-restaurant-food-menu",
              "Our Menu",
            ],
            [
              "https://res.cloudinary.com/spothopper/image/fetch/f_auto,q_70,c_fit,h_864/http://static.spotapps.co/spots/4b/2ae138a15d4ea0908dbeab5a27ca35/:original",
              "Host Your Next Party With Us",
              "https://tmt.spotapps.co/private-parties?spot_id=77510&callback_url=http://americanalasvegas.com/",
              "Parties",
            ],
          ].map((item, idx) => (
            <div key={idx} className={`${styles.flex} ${styles.rel}`}>
              <img
                alt=""
                src={item[0]}
                className={`${styles.abs} ${styles.img}`}
              />
              <div className={`${styles.abs} ${styles.cover}`} />
              <Mone {...variants(100)} className={styles.heading}>
                {item[1]}
              </Mone>
              <a href={item[2]} target="_blank" rel="noreferrer">
                <button className={styles.button} role="link">
                  {item[3]}
                </button>
              </a>
            </div>
          ))}
        </Carousel>
        <button
          className={`${styles.abs} ${styles.controls}`}
          onClick={() => setAuto(!auto)}
        >
          <i className={`fa fa-${auto ? "pause" : "play"} ${styles.control}`} />
        </button>
        <StaticImage
          className={`${styles.btm} ${styles.abs}`}
          src="../../images/blue.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default Slideshow;
