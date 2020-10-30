import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>ALEJANDRO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.main}>
        <h1>ALEJANDRO BALMACEDA</h1>
          <h3>photographer</h3>
        </main>
        <Footer />
      </div>
  );
}
