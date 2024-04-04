import type { NextPage } from "next";
import RetinalTreatment1 from "../components/retinal-treatment1";
import BecomeAMember5 from "../components/become-a-member5";
import BECOMEAMEMBER4 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r4";
import Footer6 from "../components/footer6";
import styles from "./retinal-treatment.module.css";

const RetinalTreatment: NextPage = () => {
  return (
    <div className={styles.retinalTreatment}>
      <RetinalTreatment1 />
      <BecomeAMember5 />
      <BECOMEAMEMBER4 />
      <Footer6 />
    </div>
  );
};

export default RetinalTreatment;
