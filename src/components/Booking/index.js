// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules

// Components and Utils

const Booking = () => {
  return (
    <div className={`${styles.flex} ${styles.column}`}>
      <h1 className={styles.heading}>{item[1]}</h1>
      <a href={item[2]} target="_blank">
        <button className={styles.button}>{item[3]}</button>
      </a>
    </div>
  )
}

export default Booking
