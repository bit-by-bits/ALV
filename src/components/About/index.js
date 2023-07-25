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
        <a href="#map">
          <i class="fa fa-map-marker" />
          <span class="off-screen">map marker pin</span>
        </a>
        <span>2620 Regatta Drive, Las Vegas, NV 89128</span>
      </div>

      <div className={`${styles.flex} ${styles.column} ${styles.rel}`}>
        <StaticImage
          className={`${styles.top} ${styles.abs}`}
          src="../../images/red.svg"
          alt=""
        />
        <div className={styles.flex}>
          <StaticImage
            alt=""
            className={styles.left}
            src="https://static.spotapps.co/web/americanalasvegas--com/custom/about_us_left_1.jpg"
          />
          <div className={`${styles.flex} ${styles.column} ${styles.right}`}>
            <h1 className={styles.heading}>ABOUT US</h1>
            <div className={styles.body}>
              Americana brings incredible blends of various cultures to the
              Desert Shores community in Las Vegas. The restaurant offers fine
              dining with a blended cultural theme of modern American cuisine.
            </div>
            <a href="/las-vegas-americana-restaurant-about" target="_self">
              <button className={styles.button}>READ MORE</button>
            </a>
          </div>
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
          <div className={styles.flex} key={idx}>
            {idx && <img className={styles.leftt} src={item[0]} alt="" />}
            <div className={`${styles.flex} ${styles.column} ${styles.rightt}`}>
              <h1 className={styles.heading}>{item[1]}</h1>
              <h2 className={styles.subheading}>{item[2]}</h2>
              <div className={styles.body}>{item[3]}</div>
              <a href={item[4]} target="_blank">
                <button className={`${styles.invert} ${styles.button}`}>
                  {item[1]}
                </button>
              </a>
            </div>
            {!idx && <img className={styles.leftt} src={item[0]} alt="" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
