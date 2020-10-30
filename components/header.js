import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <>
        <Link href="/about">
          <a>
            <h2>About</h2>
          </a>
        </Link>
      </>
      <>
        <Link href="/">
          <a>
            <h2>Home</h2>
          </a>
        </Link>
      </>
      <>
        <Link href="/gallery">
          <a>
            <h2>Gallery</h2>
          </a>
        </Link>
      </>
    </header>
  );
}
