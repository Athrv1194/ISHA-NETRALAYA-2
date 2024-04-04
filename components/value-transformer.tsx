import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./value-transformer.module.css";

const ValueTransformer: NextPage = () => {
  const onREADOURSTORY1Click = useCallback(() => {
    // Please sync "About us" to the project
  }, []);

  return (
    <section className={styles.valueTransformer}>
      <div className={styles.inputAggregator}>
        <div className={styles.outputSelector} />
      </div>
      <div className={styles.errorHandler}>
        <h1 className={styles.ourVisionaryLeader}>OUR VISIONARY LEADER</h1>
        <img
          className={styles.sirImageIcon}
          loading="lazy"
          alt=""
          src="/sir-image@2x.png"
        />
        <div className={styles.valueMapper}>
          <div className={styles.container} />
          <div className={styles.guidingLightInContainer}>
            <p className={styles.guidingLightInEyeCare}>
              <b className={styles.guidingLightIn}>Guiding Light in Eye Care</b>
            </p>
            <p className={styles.blankLine}>
              <span className={styles.blankLine1}>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.drSmiteshShah}>
              <span className={styles.drSmiteshShah1}>
                <span>DR. SMITESH SHAH</span>
              </span>
            </p>
            <p className={styles.blankLine2}>
              <span className={styles.blankLine3}>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.mbbsDoDnbFcp}>
              <span className={styles.mbbsDoDnbFcp1}>
                <span>
                  M.B.B.S., D.O., D.N.B., F.C.P.S, F.R.S., F.I.C.O., (London)
                </span>
              </span>
            </p>
            <p className={styles.cataractRetinaSurgeon}>
              <span className={styles.cataractRetinaSurgeon1}>
                <span>{`CATARACT & RETINA SURGEON`}</span>
              </span>
            </p>
          </div>
          <div className={styles.outputFormatter}>
            <div className={styles.lineConnector}>
              <div className={styles.dataJoiner} />
            </div>
            <div className={styles.readOurStory} onClick={onREADOURSTORY1Click}>
              READ OUR STORY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueTransformer;
