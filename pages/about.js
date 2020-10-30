import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/About.module.css";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>ABOUT</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
          <div className={styles.column}></div>
          <div className={styles.column}>
            <div>
              <img
                src="/ales_headshot.jpeg"
                className={`${styles.headerHomeImage} ${styles.borderCircle}`}
              />
            </div>
            <p>
              My name is Ale Balmaceda, and my passion is photography. I graduated in 2017 with a bachelors in Film and Television,
              where I further developed my skill set and portfolio. I love the freedom and adventure that comes with capturing moments
              within life. All photoshoots are conducted in a laid back and relaxed environment that creates ease for clients regardless
              of experience. Send me a message through my instagram for a free consultation!
            </p>
          </div>
          <div className={styles.column}></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
