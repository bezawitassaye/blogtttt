
import React from 'react'
import styles from "./page.module.css"
import contactt from "/public/contact.png"
import Image from 'next/image'
const contact = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Let's Keep in Touch</h1>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder="name" className={styles.input} />
        <input type="text" placeholder="email" className={styles.input} />
        <textarea
          className={styles.textArea}
          placeholder="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.con}>Send</button>
      </form>
    </div>
  </div>
  )
}

export default contact
