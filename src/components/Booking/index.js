// React and Styles
import React from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { motion } from "framer-motion";
import { DatePicker, Select, TimePicker, message } from "antd";

// Components and Utils

const Booking = () => {
  const { h1: Mone, div: Mdiv } = motion;

  const variants = prevY => ({
    initial: { opacity: 0, y: prevY },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  });

  const OPTIONS = Array(10)
    ?.fill(" people")
    ?.map((e, i) => ({ label: i + e, value: i + 1 }));

  return (
    <section className={`${styles.flex} ${styles.column} ${styles.wrapper}`}>
      <Mone {...variants(-100)} className={styles.heading}>
        RESERVATIONS
      </Mone>
      <Mone
        {...variants(-100)}
        className={`${styles.flex} ${styles.subheading}`}
      >
        <span>Call us at</span>
        <a href="tel:7023315565">(702)-331-5565</a>
        <span>or book a table through Open Table reservations:</span>
      </Mone>
      <Mdiv {...variants(40)} className={`${styles.choices} ${styles.flex}`}>
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
      </Mdiv>
    </section>
  );
};

export default Booking;
