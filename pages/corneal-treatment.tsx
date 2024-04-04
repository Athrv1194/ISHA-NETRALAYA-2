import type { NextPage } from "next";
import DoctorsList from "../components/doctors-list";
import BackdropImg from "../components/backdrop-img";
import SubtitleText from "../components/subtitle-text";
import ChooseUSContainer from "../components/choose-u-s-container";
import BECOMEAMEMBER6 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r6";
import Footer7 from "../components/footer7";
import styles from "./corneal-treatment.module.css";

const CornealTreatment: NextPage = () => {
  return (
    <div className={styles.cornealTreatment}>
      <div className={styles.homeInfo} />
      <DoctorsList />
      <BackdropImg />
      <SubtitleText />
      <ChooseUSContainer />
      <BECOMEAMEMBER6 />
      <Footer7 />
    </div>
  );
};

export default CornealTreatment;
