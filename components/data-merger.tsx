import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./data-merger.module.css";

const DataMerger: NextPage = () => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/best-eye-doctors-in-maharashtr");
  }, [router]);

  return (
    <section className={styles.dataMerger}>
      <div className={styles.dataSplitter}>
        <div className={styles.outputProcessor}>
          <div className={styles.valueReceiver}>
            <h1 className={styles.ourStarDoctors}>Our Star Doctors</h1>
          </div>
          <div className={styles.functionComposer}>
            <div className={styles.dataSink}>
              <div className={styles.valueComparer}>
                <img
                  className={styles.errorProcessorIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-5@2x.png"
                />
              </div>
              <div className={styles.sequenceFilter}>
                <div className={styles.dataFiltering}>
                  <div className={styles.outputModify}>
                    <div className={styles.drSmiteshShah}>Dr. Smitesh Shah</div>
                  </div>
                  <div
                    className={styles.eyeCataract}
                  >{`EYE CATARACT & RETINA SURGEON`}</div>
                </div>
              </div>
              <div className={styles.chiefMedicalDirector}>
                Chief Medical Director
              </div>
            </div>
            <div className={styles.conditionTree}>
              <div className={styles.outputBranch}>
                <img
                  className={styles.valueBranchingIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-7@2x.png"
                />
              </div>
              <div className={styles.functionSplitting}>
                <div className={styles.errorCatchAll}>
                  <div className={styles.flowMerger}>
                    <div className={styles.drAmitShriram}>
                      Dr. Amit Shriram Nene
                    </div>
                    <div className={styles.outputCombiner}>
                      <div
                        className={styles.vitreoRetinaCataract}
                      >{`Vitreo-Retina & Cataract Surgeon`}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.msDnbFico}>
                  M.S, D.N.B, F.I.C.O, F.V.R.S
                </div>
              </div>
            </div>
            <div className={styles.errorReporting}>
              <div className={styles.flowRouting}>
                <img
                  className={styles.conditionCombinerIcon}
                  loading="lazy"
                  alt=""
                  src="/ellipse-6@2x.png"
                />
              </div>
              <div className={styles.outputIterator}>
                <div className={styles.valueChainer}>
                  <div className={styles.functionChain}>
                    <div className={styles.drSonalShah}>Dr. Sonal Shah</div>
                  </div>
                  <div
                    className={styles.corneaCataract}
                  >{`CORNEA, CATARACT & LASIK SURGEON`}</div>
                </div>
                <div className={styles.sequenceProcessor}>
                  <div className={styles.medicalDirector}>Medical Director</div>
                </div>
              </div>
              <div className={styles.functionQueue}>
                <button className={styles.outputStack}>
                  <img
                    className={styles.outputStackChild}
                    alt=""
                    src="/rectangle-19.svg"
                    onClick={onRectangleClick}
                  />
                  <div className={styles.more}>MORE</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.outputAggregator}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group-7@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default DataMerger;
