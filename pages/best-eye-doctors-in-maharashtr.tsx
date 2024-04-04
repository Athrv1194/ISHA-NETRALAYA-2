import type { NextPage } from "next";
import TextParser from "../components/text-parser";
import ContainerNode from "../components/container-node";
import BECOMEAMEMBER7 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r7";
import Footer8 from "../components/footer8";
import styles from "./best-eye-doctors-in-maharashtr.module.css";

const BestEyeDoctorsInMaharashtr: NextPage = () => {
  return (
    <div className={styles.bestEyeDoctorsInMaharashtr}>
      <TextParser />
      <ContainerNode />
      <BECOMEAMEMBER7 />
      <Footer8 />
    </div>
  );
};

export default BestEyeDoctorsInMaharashtr;
