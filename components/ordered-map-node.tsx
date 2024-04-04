import type { NextPage } from "next";
import styles from "./ordered-map-node.module.css";

const OrderedMapNode: NextPage = () => {
  return (
    <div className={styles.orderedMapNode}>
      <div className={styles.unorderedMapNode}>
        <div className={styles.treeNode}>
          <h1 className={styles.ourSuccessRate}>Our Success Rate</h1>
        </div>
        <div className={styles.cyclicGroupNode}>
          <b className={styles.surgeries}>
            <p className={styles.p}>200,000+</p>
            <p className={styles.surgeries1}>Surgeries</p>
          </b>
          <div className={styles.subgraphNode}>
            <h3 className={styles.yearsOfExperienceContainer}>
              <p className={styles.p1}>25+</p>
              <p className={styles.yearsOfExperience}>Years Of Experience</p>
            </h3>
            <b className={styles.happyPatients}>
              <p className={styles.p2}>1,500,000+</p>
              <p className={styles.happyPatients1}>Happy Patients</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderedMapNode;
