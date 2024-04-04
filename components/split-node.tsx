import type { NextPage } from "next";
import DataProcessor from "./data-processor";
import TextFormatter from "./text-formatter";
import styles from "./split-node.module.css";

const SplitNode: NextPage = () => {
  return (
    <section className={styles.splitNode}>
      <div className={styles.inputSelector}>
        <div className={styles.outputSelector}>
          <div className={styles.delayNode}>
            <img
              className={styles.endNodeIcon}
              loading="lazy"
              alt=""
              src="/vector-710.svg"
            />
          </div>
          <div className={styles.startNode}>
            <div className={styles.parallelNode}>
              <div className={styles.sequenceNode}>
                <div className={styles.ishaNetrayala}>Isha Netrayala</div>
              </div>
              <h1 className={styles.thaneDevCorpora}>THANE (DEV CORPORA)</h1>
            </div>
          </div>
          <div className={styles.arrayNode}>
            <DataProcessor timerNode="022-49746854 / 7304610128 / 129 / 7738055143" />
            <div className={styles.counterNode}>
              <TextFormatter />
              <div className={styles.continueNode}>
                <div className={styles.returnNode}>
                  <div className={styles.callNode}>
                    <div className={styles.assignNode} />
                    <div className={styles.addNode}>
                      <div className={styles.subtractNode}>
                        <div className={styles.devCorporaGroundContainer}>
                          <p className={styles.devCorporaGround}>
                            Dev Corpora (Ground Floor), B-WING,
                          </p>
                          <p className={styles.easternExpressHighway}>
                            Eastern Express Highway (Opp. Cadbury Junction),
                            Khopat,
                          </p>
                          <p className={styles.thaneMaharashtra}>
                            Thane, Maharashtra - 400 601
                          </p>
                        </div>
                        <img
                          className={styles.maskGroupIcon}
                          loading="lazy"
                          alt=""
                          src="/mask-group-42@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <b className={styles.doctorAvailability}>DOCTOR AVAILABILITY</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graphicDesigner}>
          <div className={styles.layoutEngine}>
            <div className={styles.mon745AmContainer}>
              <ul className={styles.mon745Am830PmTues74}>
                <li className={styles.mon745Am}>Mon 7:45 AM - 8:30 PM</li>
                <li className={styles.tues745Am}>Tues 7:45 AM - 8:30 PM</li>
                <li className={styles.wed745Am}>Wed 7:45 AM - 8:30 PM</li>
                <li className={styles.thur830Am}>Thur 8:30 AM - 4:30 PM</li>
                <li className={styles.fri745Am}>Fri 7:45 AM - 8:30 PM</li>
                <li className={styles.sat745Am}>Sat 7:45 AM - 8:30 PM</li>
                <li>Sun 8:30 AM - 3:00 PM</li>
              </ul>
            </div>
            <div className={styles.mon745AmContainer1}>
              <ul className={styles.mon745Am830PmTues741}>
                <li className={styles.mon745Am1}>Mon 7:45 AM - 8:30 PM</li>
                <li className={styles.tues745Am1}>Tues 7:45 AM - 8:30 PM</li>
                <li className={styles.wed745Am1}>Wed 7:45 AM - 8:30 PM</li>
                <li className={styles.thur830Am1}>Thur 8:30 AM - 4:30 PM</li>
                <li className={styles.fri745Am1}>Fri 7:45 AM - 8:30 PM</li>
                <li className={styles.sat745Am1}>Sat 7:45 AM - 8:30 PM</li>
                <li>Sun 8:30 AM - 3:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitNode;
