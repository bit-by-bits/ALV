// React and Styles
import React, { useEffect, useRef } from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { motion, useInView } from "framer-motion";

// Components and Utils

const Hero = ({ setNav }) => {
  const { video: Mvid } = motion;

  const variants = {
    initial: { scale: 1.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    setNav(!isInView);
  }, [isInView, setNav]);

  return (
    <section className={styles.wrapper}>
      <Mvid
        loop
        muted
        autoPlay
        playsInline
        ref={ref}
        {...variants}
        className={styles.main}
        poster="https://static.spotapps.co/web/americanalasvegas--com/custom/video_poster.jpg"
      >
        <source
          type="video/mp4"
          src="https://static.spotapps.co/website_videos/Americana_Website_Intro_EditedVideo_01142022_Vimeo720p30.m4v"
        />
      </Mvid>
    </section>
  );
};

export default Hero;
