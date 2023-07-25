// React and Styles
import React, { useState } from "react"
import * as styles from "./styles.module.css"
import { DatePicker, Modal, Select, TimePicker } from "antd"

// Plugins and Modules

// Components and Utils

const Booking = () => {
  const [modal, setModal] = useState(false)

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
          defaultValue="1"
          className={styles.choice}
          options={Array(10)
            .fill(" people")
            .map((e, i) => ({ label: i + e, value: i + 1 }))}
        />
        <DatePicker className={styles.choice} />
        <TimePicker className={styles.choice} />
        <button className={styles.button} onClick={() => setModal(true)}>
          Find a Table
        </button>
      </div>
      <Modal
        open={modal}
        title="Basic Modal"
        onOk={() => {}}
        onCancel={() => setModal(false)}
      >
        <p>Some contents...</p>
      </Modal>
    </section>
  )
}

export default Booking
