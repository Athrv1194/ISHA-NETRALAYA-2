import type { NextPage } from "next";
import FrameWrapper from "../components/frame-wrapper";
import HeaderSection from "../components/header-section";
import BECOMEAMEMBER8 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r8";
import Footer9 from "../components/footer9";
import styles from "./diet-chart.module.css";

const DietChart: NextPage = () => {
  return (
    <div className={styles.dietChart}>
      <FrameWrapper />
      <HeaderSection />
      <BECOMEAMEMBER8 />
      <Footer9 />
    </div>
  );
};

export default DietChart;
