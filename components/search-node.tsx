import type { NextPage } from "next";
import styles from "./search-node.module.css";

const SearchNode: NextPage = () => {
  return (
    <div className={styles.searchNode}>
      <div className={styles.sortNode} />
      <h2 className={styles.whyChooseIsha}>
        Why Choose Isha Netralaya For LASIK?
      </h2>
      <div className={styles.aggregateNode}>
        <div className={styles.compositeNode}>
          <div className={styles.dataAggregator}>
            <div className={styles.lasikIsA}>
              LASIK is a widely acclaimed procedure for correcting refractive
              errors by reshaping the cornea using an excimer laser. It’s
              renowned for its quick visual recovery, minimal discomfort, and
              high satisfaction rates.
            </div>
            <h2 className={styles.suitableCandidatesFor}>
              Suitable Candidates For LASIK
            </h2>
          </div>
          <div className={styles.inputProcessors}>
            <div className={styles.outputDisplay}>
              <div className={styles.atLeast18Container}>
                <ul className={styles.atLeast18YearsOfAgeStabl}>
                  <li className={styles.atLeast18}>At least 18 years of age</li>
                  <li className={styles.stableSpectacleRefraction}>
                    Stable spectacle refraction for the last six months
                  </li>
                  <li className={styles.notPregnantOr}>
                    Not pregnant or breastfeeding
                  </li>
                  <li className={styles.freeFromCorneal}>
                    Free from corneal and retinal problems
                  </li>
                  <li>In good physical health</li>
                </ul>
              </div>
              <h2 className={styles.theLasikProcedure}>The LASIK Procedure</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNode;
