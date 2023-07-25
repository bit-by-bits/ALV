// React and Styles
import React, { useEffect, useState } from "react"
import * as styles from "./styles.module.css"

// Plugins and Modules
import { Image } from "antd"
import { StaticImage } from "gatsby-plugin-image"

// Components and Utils

const Collage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={`${styles.flex} ${styles.rel}`}>
        <StaticImage
          className={`${styles.top} ${styles.abs}`}
          src="../../images/blue.svg"
          alt=""
        />
        <div className={styles.grid}>
          {[
            "2a/8d560097cd4c90bb1b995e2d429b0e",
            "ab/4ba1ff5e9d458b9762cfa4ce3fbe04",
            "4e/f39c300c84484d8e7f25cd80d48695",
            "29/1c1d93ba7d4010b0f7383901e265f9",
            "25/cd61d4b4ab4e60a789a64f4adfd585",
            "cb/c3952836834c1a911959ebb6fd2ed7",
            "ed/5902eb86de4da3bb42e5bcfb539122",
            "ee/8c16c32a9044e0b7b5a4f406476272",
            "3a/dd629f431048caa6f40f088373d266",
            "d2/d67f69beb74048a3d4f065068823ab",
            "89/7241c0e5fd458286e00ef12fa9e721",
            "2f/fe9d4f2c554f20893ab1116887caf7",
            "3a/dd629f431048caa6f40f088373d266",
            "f6/9a73a91e124755968e94d3692469c5",
          ]?.map((e, i) => {
            const check = i % 7 === 0

            return (
              <>
                <div
                  key={i}
                  className={`${styles.flex} ${styles.container} ${styles.mob}`}
                  style={{
                    gridColumn: `span ${check ? 2 : 1}`,
                    gridRow: `span 1`,
                  }}
                >
                  <Image
                    alt=""
                    className={styles.image}
                    src={`https://static.spotapps.co/spots/${e}/full`}
                    style={{
                      width: check ? "100vw" : "50vw",
                      height: check ? "66.67vh" : "33.33vh",
                    }}
                  />
                </div>
                <div
                  key={i}
                  className={`${styles.flex} ${styles.container} ${styles.pc}`}
                  style={{
                    gridColumn: `span ${check ? 3 : 2}`,
                    gridRow: `span ${check ? 2 : 1}`,
                  }}
                >
                  <Image
                    alt=""
                    className={styles.image}
                    src={`https://static.spotapps.co/spots/${e}/full`}
                    style={{
                      width: check ? "33.33vw" : "22.22vw",
                      height: check ? "80vh" : "40vh",
                    }}
                  />
                </div>
              </>
            )
          })}
        </div>
        <StaticImage
          className={`${styles.btm} ${styles.abs}`}
          src="../../images/white.svg"
          alt=""
        />
      </div>
    </section>
  )
}

export default Collage
