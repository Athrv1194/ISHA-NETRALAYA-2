import type { NextPage } from "next";
import styles from "./condition-checker.module.css";

const ConditionChecker: NextPage = () => {
  return (
    <div className={styles.conditionChecker}>
      <div className={styles.outputSelector}>
        <img
          className={styles.inputProcessorIcon}
          loading="lazy"
          alt=""
          src="/vector-710.svg"
        />
        <div className={styles.thresholdManager}>
          <div className={styles.classifierBank}>
            <div className={styles.decisionTreeBank}>
              <div className={styles.ishaNetrayala}>Isha Netrayala</div>
            </div>
            <h1 className={styles.ambernath}>AMBERNATH</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConditionChecker;
