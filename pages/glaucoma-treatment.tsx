import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import OurDoctorsSection from "../components/our-doctors-section";
import SMILESurgeryFrame from "../components/s-m-i-l-e-surgery-frame";
import ChooseUSContainer from "../components/choose-u-s-container";
import BECOMEAMEMBER9 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r9";
import Footer13 from "../components/footer13";
import styles from "./glaucoma-treatment.module.css";

const GlaucomaTreatment: NextPage = () => {
  return (
    <div className={styles.glaucomaTreatment}>
      <div className={styles.rectangleContainer} />
      <NavBar1 />
      <OurDoctorsSection />
      <SMILESurgeryFrame />
      <ChooseUSContainer />
      <BECOMEAMEMBER9 />
      <Footer13 />
    </div>
  );
};

export default GlaucomaTreatment;
