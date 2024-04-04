import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import DISCOUNT from "./d-i-s-c-o-u-n-t";
import styles from "./container-node.module.css";

const ContainerNode: NextPage = () => {
  const router = useRouter();

  const onMOREINFOContainerClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  const onMOREINFOContainer2Click = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  const onMOREINFOContainer3Click = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  const onMOREINFOContainer4Click = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  const onThaneKalyanPuneAtTimesTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onMOREINFOContainer5Click = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  const onTHANEPUNEClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onMOREINFOContainer6Click = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.containerNode}>
      <div className={styles.nestingNode}>
        <div className={styles.selectorNode}>
          <div className={styles.joinerNode}>
            <h1 className={styles.bestEyeDoctors}>Best Eye Doctors </h1>
          </div>
          <div className={styles.slicerNode}>
            <div className={styles.discount}>
              <div className={styles.discountChild} />
              <img
                className={styles.image22Icon}
                loading="lazy"
                alt=""
                src="/image-22@2x.png"
              />
              <div className={styles.filterSetNode}>
                <div className={styles.transformSetNode}>
                  <div className={styles.nestedMapNode}>
                    <div className={styles.conditionBuilderNode}>
                      <h3 className={styles.drSmiteshShah}>Dr. Smitesh Shah</h3>
                      <div className={styles.functionLibraryNode}>
                        <div className={styles.chiefMedicalDirectorContainer}>
                          <p className={styles.chiefMedicalDirector}>
                            Chief Medical Director
                          </p>
                          <p className={styles.mbbsDoDnb}>
                            M.B.B.S., D.O., D.N.B., F.C.P.S, F.R.S., F.I.C.O.,
                            (London)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.treeBuilderNode}>
                    <div className={styles.flowControlNode}>
                      <div className={styles.workflowNode} />
                    </div>
                    <div className={styles.pathFinderNode}>
                      <div className={styles.dataAggregator}>
                        <img
                          className={styles.maskGroupIcon}
                          loading="lazy"
                          alt=""
                          src="/mask-group-15@2x.png"
                        />
                      </div>
                      <div
                        className={styles.thanekalyanpuneAtTimes}
                        onClick={onThaneKalyanPuneAtTimesTextClick}
                      >
                        Thane,Kalyan,Pune-At Times
                      </div>
                    </div>
                  </div>
                  <div className={styles.inputSelector}>
                    <div
                      className={styles.moreInfo}
                      onClick={onMOREINFOContainer5Click}
                    >
                      <div className={styles.bookAnAppointment}>
                        BOOK An APPOINTMENT
                      </div>
                      <div className={styles.sequenceProcessor}>
                        <img
                          className={styles.sequenceProcessorChild}
                          loading="lazy"
                          alt=""
                          src="/line-46.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DISCOUNT
              image23="/image-23@2x.png"
              drSonalShah="Dr. Sonal Shah"
              medicalDirector="Medical Director"
              mBBSDOMSDNBFCPS="M.B.B.S., D.O.M.S, D.N.B., F.C.P.S, F.R.S., F.I.C.O., (London)"
              onMOREINFOContainer2Click={onMOREINFOContainerClick}
            />
            <DISCOUNT
              image23="/image-24@2x.png"
              drSonalShah="Dr. Amit Shriram Nene"
              medicalDirector={`Vitreo-Retina & Cataract Surgeon`}
              mBBSDOMSDNBFCPS="M.S, D.N.B, F.I.C.O, F.V.R.S"
              propPadding="0px var(--padding-sm)"
              onMOREINFOContainer2Click={onMOREINFOContainer2Click}
            />
            <DISCOUNT
              image23="/image-25@2x.png"
              drSonalShah="Dr. Lomesh Patil"
              medicalDirector="MS, DNB, FICO, FCRS"
              mBBSDOMSDNBFCPS="Cornea , Phaco, and Refractive Surgeon"
              propPadding="0px var(--padding-sm)"
              onMOREINFOContainer2Click={onMOREINFOContainer3Click}
            />
            <div className={styles.discount1}>
              <div className={styles.discountItem} />
              <img
                className={styles.image26Icon}
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
              <div className={styles.discountInner}>
                <div className={styles.frameParent}>
                  <div className={styles.drSiddharthShethParent}>
                    <h3 className={styles.drSiddharthSheth}>
                      Dr. Siddharth Sheth 
                    </h3>
                    <div className={styles.connectionNetworkNode}>
                      <div className={styles.pediatricSquintNeuroContainer}>
                        <p
                          className={styles.pediatricSquintNeuro}
                        >{`Pediatric, Squint, Neuro Opthal & Cataract Surgeon`}</p>
                        <p className={styles.dnbFicoFmrf}>
                          DNB, FICO, FMRF, MRCSEd, FRCS Glasgow
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                      <div className={styles.pipelineNodeWrapper}>
                        <div className={styles.pipelineNode}>
                          <div className={styles.queueNode}>
                            <div className={styles.stackNode} />
                          </div>
                          <div className={styles.priorityQueueNode}>
                            <div className={styles.heapNode}>
                              <img
                                className={styles.maskGroupIcon1}
                                loading="lazy"
                                alt=""
                                src="/mask-group-15@2x.png"
                              />
                            </div>
                            <div
                              className={styles.thanePune}
                              onClick={onTHANEPUNEClick}
                            >{`THANE & PUNE IF ANY PATIENTS`}</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={styles.moreInfo1}
                        onClick={onMOREINFOContainer6Click}
                      >
                        <div className={styles.bookAnAppointment1}>
                          BOOK An APPOINTMENT
                        </div>
                        <div className={styles.directedGraphNode}>
                          <img
                            className={styles.directedGraphNodeChild}
                            loading="lazy"
                            alt=""
                            src="/line-46.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DISCOUNT
              image23="/image-27@2x.png"
              drSonalShah="Dr. Pratik Shenoy"
              medicalDirector="M.B.B.S, D.N.B, F.V.R.S, F.I.C.O(U.K)"
              mBBSDOMSDNBFCPS={`Vitreo-Retina, Uvea & Cataract Surgeon`}
              propPadding="0px var(--padding-mini)"
              onMOREINFOContainer2Click={onMOREINFOContainer4Click}
            />
          </div>
        </div>
        <div className={styles.gradientCalculator}>

        </div>
      </div>
    </section>
  );
};

export default ContainerNode;
