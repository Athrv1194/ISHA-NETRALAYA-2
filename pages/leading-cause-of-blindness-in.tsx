import type { NextPage } from "next";
import BgNAv3 from "../components/bg-n-av3";
import HomeUpdateFrame from "../components/home-update-frame";
import Footer12 from "../components/footer12";
import styles from "./leading-cause-of-blindness-in.module.css";

const LeadingCauseOfBlindnessIn: NextPage = () => {
  return (
    <div className={styles.leadingCauseOfBlindnessIn}>
      <BgNAv3 />
      <HomeUpdateFrame />
      <Footer12 />
    </div>
  );
};

export default LeadingCauseOfBlindnessIn;
