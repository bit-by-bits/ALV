// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { StaticImage } from "gatsby-plugin-image"
import { message } from "antd"

// Components and Utils

const Newsletter = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.flex} ${styles.column} ${styles.rel}`}>
        <StaticImage
          className={`${styles.top} ${styles.abs}`}
          src="../../images/white.svg"
          alt=""
        />
        <div className={`${styles.cover} ${styles.flex}`}>
          <div className={`${styles.flex} ${styles.column} ${styles.right}`}>
            <h1 className={styles.heading}>NEWSLETTER</h1>
            <h2 className={styles.subheading}>Stay tuned for updates</h2>
            <div className={styles.body}>
              Sign up for our newsletter & get exclusive offers and invites!
            </div>
            <div className={`${styles.cover} ${styles.flex}`}>
              <input className={styles.input} placeholder="Email Address" />
              <button
                className={styles.button}
                onClick={() => message.success("Thank you for signing up!")}
              >
                SUBMIT
              </button>
            </div>
          </div>
          <iframe
            id="map"
            title="OpenStreetMap"
            width="600"
            height="450"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-115.27408301830292%2C36.20449730021135%2C-115.26177215576173%2C36.2099217191935&layer=mapnik"
            className={styles.left}
          />
        </div>
        <StaticImage
          className={`${styles.btm} ${styles.abs}`}
          src="../../images/red.svg"
          alt=""
        />
      </div>
      <div className={styles.red}>
        <div className={styles.box} style={{ gridRow: "span 2" }}>
          <div className={styles.title}>LOCATION</div>
          <div className={styles.content}>
            <div>2620 Regatta Drive</div>
            <div>Las Vegas, NV</div>
            <div>89128</div>
          </div>
        </div>
        <div className={styles.box} style={{ gridRow: "span 2" }}>
          <div className={styles.title}>HOURS</div>
          <div className={styles.content}>
            <div>Lunch 11:30AM-3:00PM Tuesday-Saturday</div>
            <div>Brunch 11:00 AM- 3:00PM Sunday</div>
            <div>
              Dinner Tuesday, Wednesday, Thursday, Sunday, 3:00PM-9:00PM Dinner
            </div>
            <div>Friday & Saturday 3:00PM -9:30PM</div>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>FIND US ON...</div>
          <div className={styles.links}>
            {[
              ["https://www.instagram.com/americanalv", "instagram"],
              ["https://www.yelp.com/biz/americana-las-vegas-2", "yelp"],
            ].map(([href, icon], i) => (
              <a href={href} target="_blank" key={i}>
                <i class={`social-icon fa fa-${icon}`} />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.title}>CONTACT US</div>
          <a
            className={styles.content}
            href="tel:+17023315565"
            id="contact_us_v3_section_phone_link"
          >
            (702)-331-5565
          </a>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
