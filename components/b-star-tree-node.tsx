import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./b-star-tree-node.module.css";

const BStarTreeNode: NextPage = () => {
  const router = useRouter();

  const onREADMOREText1Click = useCallback(() => {
    router.push("/glaucoma-treatment");
  }, [router]);

  const onREADMOREText2Click = useCallback(() => {
    router.push("/l-a-s-i-k-surgery");
  }, [router]);

  const onREADMOREText4Click = useCallback(() => {
    router.push("/s-m-i-l-e-surgery");
  }, [router]);

  const onREADMOREText3Click = useCallback(() => {
    router.push("/retinal-treatment");
  }, [router]);
  
  const onREADMOREText6Click = useCallback(() => {
    router.push("/contoura-vision");
  }, [router]);

  const onREADMOREText5Click = useCallback(() => {
    router.push("/pediatric-ophthalmology");
  }, [router]);

  return (
    <section className={styles.bStarTreeNode}>
      <div className={styles.rTreeNode}>
        <div className={styles.quadrupleTreeNode}>
          <h1 className={styles.coreSpecialities}>CORE SPECIALITIES</h1>
        </div>
        <div className={styles.hexaTreeNode}>
          <div className={styles.rStarTreeNode}>
            <div className={styles.navigableMapNode}>
              <h3 className={styles.experienceThePinnacle}>
                Experience the Pinnacle of Visionary Excellence
              </h3>
              <div className={styles.hashTableNode}>
                <div className={styles.heapNode}>
                  <div className={styles.priorityQueueNode}>
                    <div className={styles.dataHub}>
                      <h2 className={styles.contura}>CONTOURA Vision</h2>
                    </div>
                    <div className={styles.precisionMeetsPerfection}>
                      Precision meets perfection with CONTOURA Vision, tailored
                      to your unique eye characteristics for optimal visual
                      clarity.
                    </div>
                  </div>
                </div>
                <div className={styles.decisionNode}>
                  <div className={styles.inputArray}>
                    <div className={styles.outputList}>
                      <img
                        className={styles.maskGroupIcon}
                        alt=""
                        src="/mask-group-13@2x.png"
                      />
                      <div className={styles.rectangleParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.mergeNode}>
                          <h2 className={styles.lasikSurgery}>LASIK Surgery</h2>
                          <div className={styles.queueNode}>
                            <div className={styles.experienceASwift}>
                              Experience a swift, painless transformation with
                              our modern LASIK surgery to get freedom from
                              glasses and contact lenses
                            </div>
                          </div>
                        </div>
                        <div className={styles.customShapeNodeWrapper}>
                          <div className={styles.customShapeNode}>
                            <div className={styles.customPathNode}>
                              <div className={styles.matrixNode} />
                            </div>
                            <div
                              className={styles.readMore}
                              onClick={onREADMOREText2Click}
                            >
                              READ MORE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.outputList1}>
                      <img
                        className={styles.maskGroupIcon1}
                        alt=""
                        src="/mask-group-21@2x.png"
                      />
                      <div className={styles.rectangleGroup}>
                        <div className={styles.frameItem} />
                        <div className={styles.smileSurgeryParent}>
                          <h3 className={styles.smileSurgery}>SMILE Surgery</h3>
                          <div
                            className={styles.experienceTheFutureOfVisioWrapper}
                          >
                            <div className={styles.experienceTheFuture}>
                              Experience the future of vision correction with
                              SMILE surgery - a minimally invasive procedure for
                              sharper, glasses-free eyesight.
                            </div>
                          </div>
                        </div>
                        <div className={styles.customShapeNodeContainer}>
                          <div className={styles.customShapeNode1}>
                            <div className={styles.customPathNode1}>
                              <div className={styles.customPathNodeChild} />
                            </div>
                            <div
                              className={styles.readMore1}
                              onClick={onREADMOREText4Click}
                            >
                              READ MORE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.queueNode1}>
                    <div className={styles.functionNode}>
                      <img
                        className={styles.maskGroupIcon2}
                        alt=""
                        src="/mask-group-32@2x.png"
                      />
                      <div className={styles.tableNode}>
                        <div className={styles.tableNodeChild} />
                        <h2 className={styles.retinaTreatment}>
                          Retina Treatment
                        </h2>
                        <div className={styles.returnNode}>
                          <div className={styles.constantNode}>
                            <div className={styles.trustOurSpecialized}>
                              Trust our specialized retina treatments for
                              comprehensive care, preserving the health and
                              function of your vital visual center.
                            </div>
                            <div className={styles.customShapeNode2}>
                              <div className={styles.customPathNode2}>
                                <div className={styles.ifElseNode} />
                              </div>
                              <div
                                className={styles.readMore2}
                                onClick={onREADMOREText3Click}
                              >
                                READ MORE
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.forLoopNode}>
                      <div className={styles.switchCaseNode}>
                        <img
                          className={styles.maskGroupIcon3}
                          alt=""
                          src="/mask-group-41@2x.png"
                        />
                        <div className={styles.breakNode}>
                          <div className={styles.breakNodeChild} />
                          <h3 className={styles.pediatricOphthalmology}>
                            Pediatric Ophthalmology
                          </h3>
                          <div className={styles.returnNode1}>
                            <div className={styles.subroutineNode}>
                              <div className={styles.nurturingYoungEyes}>
                                Nurturing young eyes with expertise and
                                compassion, our pediatric ophthalmology ensures
                                a bright and clear future for your child's
                                vision.
                              </div>
                              <div className={styles.customShapeNode3}>
                                <div className={styles.customPathNode3}>
                                  <div className={styles.classNode} />
                                </div>
                                <div
                                  className={styles.readMore3}
                                  onClick={onREADMOREText5Click}
                                >
                                  READ MORE
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.variableDefNode}>
            <div className={styles.constantDefNode}>
              <img
                className={styles.maskGroupIcon4}
                alt=""
                src="/mask-group-5@2x.png"
              />
              <div className={styles.interfaceNode} style={{paddingBottom:"60px"}}>
                <div className={styles.interfaceNodeChild} />
                <div className={styles.namespaceImportNode}>
                  <h2 className={styles.cataractTreatment}>
                    Glaucoma Treatment
                  </h2>
                </div>
                <div className={styles.exportNode}>
                  <div className={styles.seeLifeAnew}>
                    Glaucoma is a serious condition of the eye where the optic nerve gets damaged
                    primarily due to high intraocular pressure. In India, glaucoma significantly
                    impacts the adult population.
                  </div>
                </div>
                <div className={styles.libraryNode}>
                  <div className={styles.packageNode}>
                    <div className={styles.dataCollector} />
                  </div>
                  <div className={styles.readMore1} onClick={onREADMOREText1Click} >READ MORE</div>
                </div>
              </div>
            </div>
            <div className={styles.constantDefNode1}>
              <img
                className={styles.maskGroupIcon5}
                alt=""
                src="/mask-group-6@2x.png"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.frame} />
                <div className={styles.lineWrapper}>
                  <img className={styles.lineIcon} loading="lazy" alt="" />
                </div>
                <div className={styles.readMore6} onClick={onREADMOREText6Click} >READ MORE</div>
                <div className={styles.frame1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BStarTreeNode;
