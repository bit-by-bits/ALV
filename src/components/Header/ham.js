// React and Styles
import React, { useEffect, useState } from "react";
import * as styles from "./styles.module.css";

// Plugins and Modules
import { motion, useAnimation } from "framer-motion";
import { icons } from "./items";

// Components and Utils

const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" },
};

const Hamburger = () => {
  const { path: Mpath } = motion;

  const [active, setActive] = useState(0);

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useEffect(() => {
    const run = async () => {
      if (active) {
        await path02Controls.start(path02Variants.moving);
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      } else {
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      }
    };

    run();
  }, [active, path01Controls, path02Controls]);

  return (
    <div className={styles.ham}>
      {icons.map(([link, icon], i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <i className={`social-icon fa fa-${icon}`} />
        </a>
      ))}
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        onClick={() => setActive(!active)}
        style={{ filter: "drop-shadow(1px 1px 1px rgb(0 0 0 / 1))" }}
      >
        {[
          [path01Variants, path01Controls],
          [path02Variants, path02Controls],
        ]?.map(([vars, ctls], i) => (
          <Mpath
            key={i}
            animate={ctls}
            stroke="white"
            strokeWidth={2}
            d={vars.closed.d}
            transition={{ duration: 0.2 }}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>
    </div>
  );
};

export default Hamburger;
