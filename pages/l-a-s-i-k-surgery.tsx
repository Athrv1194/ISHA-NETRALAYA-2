import type { NextPage } from "next";
import DecisionTree from "../components/decision-tree";
import Heap from "../components/heap";
import SearchNode from "../components/search-node";
import SequentialNodes from "../components/sequential-nodes";
import BECOMEAMEMBER2 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r2";
import Footer4 from "../components/footer4";
import styles from "./l-a-s-i-k-surgery.module.css";

const LASIKSurgery: NextPage = () => {
  return (
    <div className={styles.lasikSurgery}>
      <div className={styles.lasikOrLaserAssistedContainer}>
        <span className={styles.lasikOrLaserAssisted}>
          LASIK, or Laser-Assisted In Situ Keratomileusis, is a transformative
          eye surgery offered at Isha Netralaya, 
        </span>
        <b>the best hospital for LASIK treatment in Maharashtra</b>
        <span className={styles.ourExceptionalTeam}>
          . Our exceptional team, with over 20 years of experience and more than
          5000 successful procedures, makes us a top choice for those seeking
          LASIK surgery in Thane and surrounding areas.
        </span>
      </div>
      <h1 className={styles.bestLasikSurgery}>
        Best LASIK Surgery In Maharashtra
      </h1>
      <div className={styles.expertiseOurDoctorsAreContainer}>
        <ul className={styles.expertiseOurDoctorsAreSom}>
          <li className={styles.expertiseOurDoctorsAre}>
            Expertise: Our doctors are some of the best LASIK surgeons in
            Maharashtra, with a track record of over 99% success rate, matching
            world standards.
          </li>
          <li className={styles.advancedTechnologyEquipped}>
            Advanced Technology: Equipped with the latest FDA-approved
            machinery, we ensure safe and precise LASIK procedures.
          </li>
          <li>
            Proven Satisfaction: High patient satisfaction and low complication
            rates underline our commitment to excellence in vision correction.
          </li>
        </ul>
      </div>
      <h2 className={styles.understandingLasikAt}>
        Understanding LASIK At Isha Netralaya
      </h2>
      <div className={styles.preLasikEvaluationUsingHiContainer}>
        <ul className={styles.preLasikEvaluationUsingHi}>
          <li className={styles.preLasikEvaluationUsingHi1}>
            Pre-LASIK Evaluation: Using high-precision Sirius technology for 3D
            corneal analysis.
          </li>
          <li className={styles.flapCreationUsingA}>
            Flap Creation: Using a microkeratome or a femtosecond laser for a
            blade-free approach.
          </li>
          <li className={styles.cornealReshapingComputerCo}>
            Corneal Reshaping: Computer-controlled laser vaporises a portion of
            the cornea, correcting vision.
          </li>
        </ul>
      </div>
      <DecisionTree />
      <Heap />
      <SearchNode />
      <section className={styles.iterationNodes}>
        <SequentialNodes />
      </section>
      <BECOMEAMEMBER2 />
      <Footer4 />
    </div>
  );
};

export default LASIKSurgery;
