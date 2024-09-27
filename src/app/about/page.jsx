import React from 'react'
import styles from "./page.module.css"
import Image from "next/image";
import hero from "/public/hero.png"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
        src={hero}
         fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
    <div className={styles.textContainer}>
    <div className={styles.item}>
      <h1 className={styles.title}>Who Are We?</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
        beatae, a suscipit eos. Animi quibusdam cum omnis officiis
        <br />
        <br />
        voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
        esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
        officiis voluptatum quo ea eveniet?
      </p>
    </div>
    <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
        Creative Illustrations
        <br />
        <br /> - Dynamic Websites
        <br />
        <br /> - Fast and Handy
        <br />
        <br /> - Mobile Apps
      </p>
      <button className={styles.con}>contact</button>
    </div>
  </div>
</div>
  )
}

export default About
