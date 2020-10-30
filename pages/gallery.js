import Head from "next/head";
import Header from "../components/header";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";


export default function Gallery() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>GALLERY</title>
          <script src="https://scripts.sirv.com/sirvjs/v3/sirv.js" data-components="image" data-options="threshold:100"></script>
        </Head>
        <Header />
        <div className={styles.main}>
          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_1.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_2.jpeg" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_3.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_4.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_5.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_6.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_7.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_8.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_9.JPG" width={800} height={530} quality={100}/> 
          </div>
          
          <div className={styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_10.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className= {styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_11.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className= {styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_12.JPG" width={800} height={530} quality={100}/>
          </div>

          <div className={styles.break}/>

          <div className= {styles.card}>
          <Image className={styles.gImages} alt="" src="/galleryPic_13.JPG" width={800} height={530} quality={100}/>
          </div>

        </div> 
      </div>
    </div>
  );
}
