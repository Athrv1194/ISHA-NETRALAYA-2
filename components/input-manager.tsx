import type { NextPage } from "next";
import DataProcessor from "./data-processor";
import TextFormatter from "./text-formatter";
import styles from "./input-manager.module.css";

const InputManager: NextPage = () => {
  return (
    <div className={styles.inputManager}>
      <DataProcessor
        timerNode="8976746053 / 7972502449 / 8976746051"
        propMinWidth="unset"
      />
      <div className={styles.positionCalculator}>
        <TextFormatter />
        <div className={styles.arcsCreator}>
          <div className={styles.textFlowManager}>
            <div className={styles.lineAlignment}>
              <div className={styles.fontPicker}>
                <div className={styles.textColorModifier} />
              </div>
              <div className={styles.textSizeModifier}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-81@2x.png"
                />
              </div>
              <div className={styles.textTransformer}>
                <div className={styles.prabatPlaza2ndContainer}>
                  <p className={styles.prabatPlaza2nd}>
                    Prabat Plaza (2nd Floor),
                  </p>
                  <p className={styles.nearWelfareCentre}>
                    Near Welfare Centre (Opp Navare Arcade),
                  </p>
                  <p className={styles.shivMandirRoad}>
                    Shiv Mandir Road Ambernath (E)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <b className={styles.doctorAvailability}>DOCTOR AVAILABILITY</b>
        </div>
      </div>
    </div>
  );
};

export default InputManager;
