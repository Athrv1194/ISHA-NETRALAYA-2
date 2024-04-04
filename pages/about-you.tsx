import type { NextPage } from "next";
import Head from "next/head";
import Background from "../components/background";
import Affordability from "../components/affordability";
import IshaNetralayaFrame from "../components/isha-netralaya-frame";
import FrameComponent from "../components/frame-component";
import styles from "./about-you.module.css";

const AboutYou: NextPage = () => {
  return (
    <div className={styles.aboutYou}>
      <div className={styles.button}>
        <div className={styles.buttonChild} />
        <div className={styles.ourStory}>OUR STORY</div>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      </div>
      <div className={styles.leaf471} />
      <section className={styles.backgroundParent}>
        <Background />
        <Affordability />
      </section>
      <div className={styles.button1}>
        <div className={styles.buttonItem} />
        <div className={styles.readMore}>READ MORE</div>
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group@2x.png"
        />
      </div>
      <div className={styles.balanceHospitality}>Balance Hospitality</div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <IshaNetralayaFrame />
      <img
        className={styles.goldenRatioGridHome}
        alt=""
        src="/golden-ratio-grid--home.svg"
      />
      <FrameComponent />
    </div>
  );
};

export default AboutYou;
