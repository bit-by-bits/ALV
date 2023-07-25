// React and Styles
import React, { useState } from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { Carousel } from "antd"

// Components and Utils

const Reviews = () => {
  return (
    <section className={`${styles.flex} ${styles.wrapper}`}>
      <h1 className={styles.heading}>REVIEWS</h1>
      <Carousel autoplaySpeed={8000} autoplay>
        {[
          [
            "Nikole T:",
            "Absolutely delicious food! Great service! Great atmosphere. Sat inside with a beautiful water view! I recommend going first thing when they open. It wasn't too crowded despite the lunchtime busyness. A great way to celebrate my birthday early! I WILL BE COMING BACK!",
          ],
          [
            "Jane C:",
            "If you're looking for a fine dining with superb customer service... this place is the gem! Been here last night, and everything is absolutely amazing. Our server is the utmost attentive and accommodating waiter I have encountered for the longest time...",
          ],
          [
            "Karina K:",
            "Wow this is a restaurant I plan on going to a thousand times over. Located in the beautiful desire shores, this was a fabulous dining experience. The seating was better than I expected, and out of all the restaurants in desert shores, this indoor dining seating gives you the best view of the lake.",
          ],
          [
            "Karen S:",
            "Went for their Sunday brunch and my party and I could not have been happier . They offer bottomless mimosas , bloody Mary's , and palomas ( tequila and grapefruit juice ) , which was nice because they allowed us to switch drinks up when ordering more rounds...",
          ],
          [
            "Jenny L:",
            "Wonderful and beautiful to have Sunday brunch here! It is by the lake and the ambient is just so relaxing! Food was excellent! The salad was so fresh and crispy. The dressing was just mixed to perfect. And the main dish of pasta and salmon was so tender and juicy.",
          ],
        ].map(([name, review], idx) => (
          <div className={`${styles.box} ${styles.flex}`} key={idx}>
            <h2 className={styles.subheading}>Review by - Yelp</h2>
            <div className={styles.stars}>
              {name}
              {Array.from({ length: Math.floor(Math.random() * 3) + 3 })
                ?.fill(0)
                ?.map((_, i) => (
                  <i key={i} aria-hidden="true" class="fa fa-star" />
                ))}
            </div>
            <div className={styles.review}>
              <i aria-hidden="true" class="fa fa-quote-left" />
              <div className={styles.body}>{review}</div>
              <i aria-hidden="true" class="fa fa-quote-right" />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Reviews
