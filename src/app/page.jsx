import Image from "next/image";
import styles from "./page.module.css";
import hero from "/public/hero.png"
 
export default function Home() {
  return (
    <div className={styles.container}>

   
    <div className={styles.item}>
      <h1 className={styles.title}>Better design for your digital products</h1>
      <p className={styles.dec}>
        Turning your Idea into REality. we bring togther the teams from the global tech industry
      </p>
       <button className={styles.button}>See Our Works</button>
    </div>
       <div className={styles.item}>
       <Image 
        width={413} 
        height={413} 
        src={hero} // Correct path
        alt="Hero Image" 
        className={styles.logo}// Always provide an alt attribute
      />
     </div>
    
    </div>
    
  );
}
