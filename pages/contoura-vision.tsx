import type { NextPage } from "next";
import LoopNode from "../components/loop-node";
import ImageNode from "../components/image-node";
import BECOMEAMEMBER9 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r9";
import Footer5 from "../components/footer5";
import styles from "./contoura-vision.module.css";

const ContouraVision: NextPage = () => {
  return (
    <div className={styles.contouraVision}>
      <div className={styles.contouraVisionAlsoContainer}>
        <span className={styles.contouraVisionAlso}>
          Contoura Vision, also known as 
        </span>
        <b>Topography-Guided LASIK</b>
        <span className={styles.marksAnImportant}>
          , marks an important step in refractive eye surgery. This Advanced
          Procedure offers an enhanced level of customization in vision
          correction, targeting myopia, hyperopia, and astigmatism, and is ideal
          for those seeking a life free from glasses or contact lenses. If you
          are looking for an expert guided procedure for 
        </span>
        <b>Contoura Surgery in Maharashtra</b>
        <span className={styles.weHaveOne}> we have one the</span>
        <b> best Countoura surgeons</b>
        <span className={styles.inTownFor}>
           in town for Pune, Kalyan, Thane and Ambernath. 
        </span>
      </div>
      <h1 className={styles.contouraVisionSurgery}>
        Contoura Vision Surgery In Maharashtra
      </h1>
      <h2 className={styles.benefitsOfContoura}>Benefits Of Contoura Vision</h2>
      <LoopNode />
      <ImageNode />
      <BECOMEAMEMBER9 />
      <Footer5 />
    </div>
  );
};

export default ContouraVision;
