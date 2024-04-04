import type { NextPage } from "next";
import TextFormatter1 from "./text-formatter1";
import styles from "./matrix-node.module.css";

const MatrixNode: NextPage = () => {
  return (
    <section className={styles.matrixNode}>
      <div className={styles.stackNode}>
        <div className={styles.queueNode}>
          <div className={styles.mapNode}>
            <div className={styles.filterNode}>
              <div className={styles.ishaNetrayala}>Isha Netrayala</div>
              <div className={styles.transformNode}>
                <h1 className={styles.kalyan}>KALYAN</h1>
              </div>
            </div>
          </div>
          <div className={styles.analyzerNode}>
            <div className={styles.linkCollector}>
              <div className={styles.textParser}>
                <img
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  alt=""
                  src="/mask-group-16@2x.png"
                />
              </div>
              <div className={styles.triggerNode}>
                <div className={styles.frameContainer}>
                  <div className={styles.giveUsA}>Give us a call</div>
                </div>
                <div className={styles.memoryNode}>
                  <a
                    className={styles.a}
                    href="tel: +02516760600"
                    target="_blank"
                  >
                    <span className={styles.span}>0251-6760600</span>
                  </a>
                   / 
                  <a
                    className={styles.a1}
                    href="tel: +91 9321013241"
                    target="_blank"
                  >
                    <span className={styles.span1}>9321013241</span>
                  </a>
                </div>
              </div>
            </div>
            <TextFormatter1 />
            <div className={styles.algorithmNode}>
              <div className={styles.procedureNode}>
                <div className={styles.functionalityNode}>
                  <div className={styles.capabilityNode}>
                    <div className={styles.dataAggregator} />
                  </div>
                  <div className={styles.conditionSplitter}>
                    <img
                      className={styles.maskGroupIcon1}
                      loading="lazy"
                      alt=""
                      src="/mask-group-22@2x.png"
                    />
                  </div>
                  <div className={styles.outputMerger}>
                    <div className={styles.radhaKrishnaSankulContainer}>
                      <p className={styles.radhaKrishnaSankul}>
                        Radha Krishna Sankul, Opp. Holly Cross Hospital,
                      </p>
                      <p className={styles.karnikRoadNear}>
                        Karnik Road, Near Nutan Vidyalaya,
                      </p>
                      <p className={styles.kalyanWestThane}>
                        Kalyan West, Thane – 421 301
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <b className={styles.doctorAvailability}>DOCTOR AVAILABILITY</b>
            </div>
          </div>
        </div>
        <div className={styles.graphicDesigner}>
          <div className={styles.layoutEngine}>
            <div className={styles.mon800AmContainer}>
              <ul className={styles.mon800Am830PmTues80}>
                <li className={styles.mon800Am}>Mon 8:00 AM - 8:30 PM</li>
                <li className={styles.tues800Am}>Tues 8:00 AM - 8:30 PM</li>
                <li className={styles.wed800Am}>Wed 8:00 AM - 8:30 PM</li>
                <li className={styles.thur800Am}>Thur 8:00 AM - 3:00 PM</li>
                <li className={styles.fri800Am}>Fri 8:00 AM - 8:30 PM</li>
                <li className={styles.sat800Am}>Sat 8:00 AM - 8:30 PM</li>
                <li>Sun 8:00 AM - 1:00 PM</li>
              </ul>
            </div>
            <div className={styles.mon800AmContainer1}>
              <ul className={styles.mon800Am830PmTues801}>
                <li className={styles.mon800Am1}>Mon 8:00 AM - 8:30 PM</li>
                <li className={styles.tues800Am1}>Tues 8:00 AM - 8:30 PM</li>
                <li className={styles.wed800Am1}>Wed 8:00 AM - 8:30 PM</li>
                <li className={styles.thur800Am1}>Thur 8:00 AM - 3:00 PM</li>
                <li className={styles.fri800Am1}>Fri 8:00 AM - 8:30 PM</li>
                <li className={styles.sat800Am1}>Sat 8:00 AM - 8:30 PM</li>
                <li>Sun 8:00 AM - 1:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatrixNode;
