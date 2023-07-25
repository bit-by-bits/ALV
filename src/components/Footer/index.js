// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { StaticImage } from "gatsby-plugin-image"

// Components and Utils

const Footer = () => {
  return (
    <section className={`${styles.flex} ${styles.column} ${styles.wrapper}`}>
      <div className={`${styles.flex} ${styles.column} ${styles.top}`}>
        <div className={`${styles.flex} ${styles.text}`}>
          <span>Powered by: </span>
          <a href="https://www.spothopperapp.com/" target="_blank">
            <StaticImage
              height={25}
              alt="SpotHopper"
              src="https://static.spotapps.co/web/americanalasvegas--com/images/spothopper-logo-new.png"
            />
          </a>
        </div>
        <div className={`${styles.flex} ${styles.text}`}>
          <a
            href="https://www.spothopperapp.com/contact-us?contact_reason=demo"
            target="_blank"
          >
            Website design, Social Media marketing and Email marketing provided
            by SpotHopper.
          </a>
        </div>
      </div>
      <div className={`${styles.flex} ${styles.column} ${styles.btm}`}>
        <div className={`${styles.flex} ${styles.text}`}>
          <span>We strive to make our website accessible to everybody.</span>
          <a
            href="https://americanalasvegas.com/accessibility-page-01"
            target="_blank"
          >
            Learn More.
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer
