import type { NextPage } from "next";
import TextFormatter1 from "./text-formatter1";
import styles from "./data-aggregator.module.css";

const DataAggregator: NextPage = () => {
  return (
    <section className={styles.dataAggregator}>
      <div className={styles.featureSelector}>
        <div className={styles.valueProcessor}>
          <img
            className={styles.decisionMakerIcon}
            loading="lazy"
            alt=""
            src="/vector-710.svg"
          />
        </div>
        <div className={styles.outputPresenter}>
          <div className={styles.inputCollector}>
            <div className={styles.ishaNetrayala}>Isha Netrayala</div>
            <div className={styles.errorHandler}>
              <h1 className={styles.pune}>PUNE</h1>
            </div>
          </div>
        </div>
        <div className={styles.dataSplitter}>
          <div className={styles.linkCollector}>
            <div className={styles.textParser}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group-16@2x.png"
              />
            </div>
            <div className={styles.scoreCalculator}>
              <div className={styles.frameContainer}>
                <div className={styles.giveUsA}>Give us a call</div>
              </div>
              <div className={styles.stateManager}>091727 25903</div>
            </div>
          </div>
          <TextFormatter1 />
          <div className={styles.weightCalculator}>
            <div className={styles.dataCombiner}>
              <div className={styles.featureExtractor}>
                <div className={styles.ruleApplier}>
                  <div className={styles.sequenceValidator} />
                </div>
                <div className={styles.valueComparer}>
                  <img
                    className={styles.maskGroupIcon1}
                    loading="lazy"
                    alt=""
                    src="/mask-group-61@2x.png"
                  />
                </div>
                <div className={styles.relationalComparator}>
                  <div className={styles.shopNo7PremierContainer}>
                    <p className={styles.shopNo7Premier}>
                      Shop No.7, Premier Plaza,
                    </p>
                    <p className={styles.oldBigBazar}>
                      Old Big Bazar (Above Mc Donald), Anand Nagar, Chinchwad,
                      Pune, Pimpri-Chinchwad, Maharashtra - 411 019
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <b className={styles.doctorAvailability}>DOCTOR AVAILABILITY</b>
          </div>
        </div>
        <div className={styles.graphicDesigner}>
          <div className={styles.layoutEngine}>
            <div className={styles.mon1000AmContainer}>
              <ul className={styles.mon1000Am700PmTues9}>
                <li className={styles.mon1000Am}>Mon 10:00 AM - 7:00 PM</li>
                <li className={styles.tues900Am}>Tues 9:00 AM - 3:00 PM</li>
                <li className={styles.wed1000Am}>Wed 10:00 AM - 7:00 PM</li>
                <li className={styles.thur1000Am}>Thur 10:00 AM - 7:00 PM</li>
                <li className={styles.fri1000Am}>Fri 10:00 AM - 7:00 PM</li>
                <li className={styles.sat1000Am}>Sat 10:00 AM - 7:00 PM</li>
                <li>Sun 10:00 AM - 3:00 PM</li>
              </ul>
            </div>
            <div className={styles.mon1000AmContainer1}>
              <ul className={styles.mon1000Am700PmTues91}>
                <li className={styles.mon1000Am1}>Mon 10:00 AM - 7:00 PM</li>
                <li className={styles.tues900Am1}>Tues 9:00 AM - 3:00 PM</li>
                <li className={styles.wed1000Am1}>Wed 10:00 AM - 7:00 PM</li>
                <li className={styles.thur1000Am1}>Thur 10:00 AM - 7:00 PM</li>
                <li className={styles.fri1000Am1}>Fri 10:00 AM - 7:00 PM</li>
                <li className={styles.sat1000Am1}>Sat 10:00 AM - 7:00 PM</li>
                <li>Sun 10:00 AM - 3:00 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAggregator;
