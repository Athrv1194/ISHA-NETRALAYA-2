import type { NextPage } from "next";
import LeafNodes from "./leaf-nodes";
import styles from "./sequential-nodes.module.css";

const SequentialNodes: NextPage = () => {
  return (
    <div className={styles.sequentialNodes}>
      <LeafNodes
        femtosecondLASIKAtIshaNet="Femtosecond LASIK At Isha Netralaya"
        alsoKnownAsBladeFreeLASIK="Also known as Blade-free LASIK, this advanced procedure offers an elevated level of safety and precision. It’s particularly suitable for those who seek the Best LASIK eye surgery in Maharashtra."
      />
      <LeafNodes
        femtosecondLASIKAtIshaNet="Monovision And Presbyopia Treatment"
        alsoKnownAsBladeFreeLASIK="Although LASIK doesn’t directly treat presbyopia, monovision LASIK is an option where one eye is corrected for distance, and the other is under-corrected for reading."
        propPadding="0px var(--padding-7xs)"
        propGap="28.840000000000146px"
        propWidth="618px"
        propHeight="-0.9px"
        propHeight1="-1px"
      />
      <div className={styles.repeatNodes}>
        <h2 className={styles.advantagesOfLasik}>
          Advantages Of LASIK At Isha Netralaya
        </h2>
      </div>
      <div className={styles.quickRecoveryAndContainer}>
        <ul className={styles.quickRecoveryAndReturnToN}>
          <li className={styles.quickRecoveryAnd}>
            Quick recovery and return to normal activities.
          </li>
          <li className={styles.establishedProcedureWith}>
            Established procedure with proven effectiveness.
          </li>
          <li>Relatively painless with high patient satisfaction.</li>
        </ul>
      </div>
    </div>
  );
};

export default SequentialNodes;
