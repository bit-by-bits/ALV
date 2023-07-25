// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

// Components and Utils

const Header = () => {
  return (
    <section className={`${styles.flex} ${styles.wrapper}`}>
      <Link href="/">
        <StaticImage
          alt="Americana"
          className={styles.left}
          src="https://static.spotapps.co/web/americanalasvegas--com/custom/logo.png"
        />
      </Link>
      <div className={`${styles.flex} ${styles.right}`}>
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
          <a
            key={i}
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {text}
          </a>
        ))}
        {[
          ["https://www.instagram.com/americanalv", "instagram"],
          ["https://www.yelp.com/biz/americana-las-vegas-2", "yelp"],
        ].map(([href, icon], i) => (
          <a
            href={href}
            target="_blank"
            key={i}
            className={styles.link}
            style={{
              borderLeft: i ? 0 : "1px solid #a31521",
              paddingLeft: i ? 0 : "1rem",
            }}
          >
            <i class={`social-icon fa fa-${icon}`} />
          </a>
        ))}
      </div>
    </section>
  )
}

export default Header
