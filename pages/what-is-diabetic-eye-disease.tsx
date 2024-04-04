import type { NextPage } from "next";
import BGNav from "../components/b-g-nav";
import SocialMediaLinks from "../components/social-media-links";
import Footer from "../components/footer";
import styles from "./what-is-diabetic-eye-disease.module.css";

const WhatIsDiabeticEyeDisease: NextPage = () => {
  return (
    <div className={styles.whatIsDiabeticEyeDisease}>
      <main className={styles.frameContainer}>
        <BGNav />
        <SocialMediaLinks />
      </main>
      <Footer />
    </div>
  );
};

export default WhatIsDiabeticEyeDisease;
