// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { StaticImage } from "gatsby-plugin-image"

// Components and Utils

const About = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.flex} ${styles.red}`}>
        <a href="#map-v3-container">
          <i class="fa fa-map-marker" />
          <span class="off-screen">map marker pin</span>
        </a>
        <span>2620 Regatta Drive, Las Vegas, NV 89128</span>
      </div>

      <div className={`${styles.flex} ${styles.column}`}>
        <StaticImage src="../../images/top.svg" alt="" />
        <div className={`${styles.about} ${styles.flex}`}>
          <StaticImage
            alt=""
            className={styles.left}
            src="https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_left_1.jpg"
          />
          <div className={`${styles.flex} ${styles.column} ${styles.right}`}>
            <h2>ABOUT US</h2>
            <div>
              Americana brings incredible blends of various cultures to the
              Desert Shores community in Las Vegas. The restaurant offers fine
              dining with a blended cultural theme of modern American cuisine.
            </div>
            <button></button>
          </div>
        </div>
        <StaticImage src="../../images/bottom.svg" alt="" />
      </div>
    </section>
  )
}

export default About
