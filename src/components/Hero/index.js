// React and Styles
import React from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules

// Components and Utils

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <video
        loop
        muted
        autoPlay
        playsInline
        className={styles.main}
        poster="https://static.spotapps.co/web/americanalasvegas--com/custom/video_poster.jpg"
      >
        <source
          type="video/mp4"
          src="https://static.spotapps.co/website_videos/Americana_Website_Intro_EditedVideo_01142022_Vimeo720p30.m4v"
        />
      </video>
    </section>
  )
}

export default Hero
