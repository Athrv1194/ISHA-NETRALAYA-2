import type { NextPage } from "next";
import Bgnav2 from "../components/bgnav2";
import HomeLatestUpdates from "../components/home-latest-updates";
import Footer11 from "../components/footer11";
import styles from "./what-is-glaucoma-who-should.module.css";

const WhatIsGlaucomaWhoShould: NextPage = () => {
  return (
    <div className={styles.whatIsGlaucomaWhoShould}>
      <img
        className={styles.goldenRatioGridHome}
        alt=""
        src="/golden-ratio-grid--home1.svg"
      />
      <main className={styles.bgnavParent}>
        <Bgnav2 />
        <HomeLatestUpdates />
      </main>
      <Footer11 />
    </div>
  );
};

export default WhatIsGlaucomaWhoShould;
