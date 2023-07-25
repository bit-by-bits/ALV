// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { DatePicker, Select, TimePicker, message } from "antd"

// Components and Utils

const Booking = () => {
  const OPTIONS = Array(10)
    ?.fill(" people")
    ?.map((e, i) => ({ label: i + e, value: i + 1 }))

  return (
    <section className={`${styles.flex} ${styles.column} ${styles.wrapper}`}>
      <h1 className={styles.heading}>RESERVATIONS</h1>
      <h1 className={`${styles.flex} ${styles.subheading}`}>
        <span>Call us at</span>
        <a href="tel:7023315565">(702)-331-5565</a>
        <span>or book a table through Open Table reservations:</span>
      </h1>
      <div className={`${styles.choices} ${styles.flex}`}>
        <Select
          className={styles.choice}
          options={OPTIONS}
          placeholder="People"
        />
        <DatePicker className={styles.choice} />
        <TimePicker className={styles.choice} />
        <button
          className={styles.button}
          onClick={() => message.success("Thank you for booking a table!")}
        >
          Find a Table
        </button>
      </div>
    </section>
  )
}

export default Booking
