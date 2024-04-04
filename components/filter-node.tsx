import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./filter-node.module.css";

const FilterNode: NextPage = () => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.filterNode}>
      <div className={styles.logicOperator}>
        <div className={styles.valueTransformer}>
          <div className={styles.dataMerger}>
            <img
              className={styles.sortingNodeIcon}
              loading="lazy"
              alt=""
              src="/frame@2x.png"
            />
          </div>
          <div className={styles.searchNode}>
            <div className={styles.patternMatcher}>
              <div className={styles.textParser}>
                <div className={styles.numberCruncher}>
                  <h1 className={styles.centersOfExcellence}>
                    CENTERS OF EXCELLENCE
                  </h1>
                  <div className={styles.matrixOperations}>
                    <h3 className={styles.eyeCareServices}>
                      Eye care services, everywhere you need!
                    </h3>
                  </div>
                </div>
                <div className={styles.treeBuilder}>
                  <div className={styles.brighteningSightsIn}>
                    Brightening sights in every locale, our eye hospitals bring
                    clarity closer to you, ensuring visionary excellence at
                    every horizon.
                  </div>
                </div>
                <div className={styles.stackProcessor}>
                  <button className={styles.button}>
                    <div className={styles.button1} onClick={onButtonClick} />
                    <div className={styles.onlineAppointment}>
                      ONLINE APPOINTMENT
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.graphNode}>
              <img
                className={styles.thaneCityIcon}
                loading="lazy"
                alt=""
                src="/thane-city@2x.png"
              />
              <b className={styles.thaneCity}>Thane City</b>
              <div className={styles.clickHere}>Click Here</div>
            </div>
          </div>
        </div>
        <div className={styles.floydWarshallAlgorithm}>
          <img className={styles.dFSAlgorithm} alt="" src="/frame-1@2x.png" />
          <img
            className={styles.kalyanCityIcon}
            alt=""
            src="/kalyan-city.svg"
          />
          <img
            className={styles.bellmanFordAlgorithm}
            alt=""
            src="/frame-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FilterNode;
