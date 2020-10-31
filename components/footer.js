import styles from "../styles/Footer.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <footer className={styles.footer}>
      
      <a href="https://www.instagram.com/_alesphotos/">
        <Image className={styles.gImages} alt="" src="/instagram_Icon.png" width={24} height={24} quality={100}/>
      </a>
    
    </footer>
  );
}
