import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PunebranchTitle from "./punebranch-title";
import styles from "./image-node.module.css";

const ImageNode: NextPage = () => {
  const router = useRouter();

  const onShapeCombineNodeClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.imageNode}>
      <PunebranchTitle
        whatIsCataractCommonFAQs="Discover how it's done, why it's transforming lives, and witness real results that redefine the way you see the world."
        punebranchTitlePadding="unset"
        yTPadding="0px 0px var(--padding-155xl)"
        yTGap="26px"
        onPrimaryButtonColorClick={onShapeCombineNodeClick}
      />
      <div className={styles.shapeRoundNode}>
        <div className={styles.shapeTrimNode}>
          <div className={styles.shapeStarNode}>
            <div className={styles.shapeCombineMorphNode} />
            <div className={styles.understandingContouraVisionWrapper}>
              <h2 className={styles.understandingContouraVisionContainer}>
                <p className={styles.understandingContouraVision}>
                  Understanding Contoura Vision
                </p>
              </h2>
            </div>
            <div className={styles.functionTree}>
              <div className={styles.contouraVisionSurgery}>
                Contoura Vision surgery utilises a topography-guided LASIK
                technique. It involves mapping 22,000 unique points on the
                cornea to create a highly detailed and personalised treatment
                plan. This precision allows for the correction of subtle corneal
                irregularities along with standard refractive errors, resulting
                in potentially sharper and better-quality vision.
              </div>
              <h2 className={styles.assessmentAndDiagnosis}>
                Assessment And Diagnosis
              </h2>
            </div>
          </div>
          <div className={styles.controlCenter}>
            <div className={styles.conditionNode}>
              <div className={styles.loopNode}>
                <div className={styles.atIshaNetralaya}>
                  At Isha Netralaya, we begin with a thorough eye examination to
                  evaluate your suitability for Contoura Vision. Our expert
                  ophthalmologists use cutting-edge diagnostic tools to assess
                  your eye health, corneal thickness, and the specific
                  refractive errors to be corrected.
                </div>
                <div className={styles.undergoingContouraVisionContainer}>
                  <p className={styles.undergoingContouraVision}>
                    Undergoing Contoura Vision at Isha Netralaya typically
                    involves the following steps:
                  </p>
                  <ul className={styles.detailedCornealMappingUsin}>
                    <li className={styles.detailedCornealMappingUsin1}>
                      Detailed Corneal Mapping: Using advanced technology to
                      create a precise corneal topography.
                    </li>
                    <li className={styles.laserVisionCorrectionEmplo}>
                      Laser Vision Correction: Employing a femtosecond laser to
                      reshape the cornea based on the unique map.
                    </li>
                    <li>
                      Quick and Comfortable: The procedure is performed under
                      local anaesthesia and takes about 20 minutes for both
                      eyes.
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className={styles.theContouraVision}>
                The Contoura Vision Procedure
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.ifNode}>
          <div className={styles.highlyCustomisedTailoredToContainer}>
            <ul className={styles.highlyCustomisedTailoredTo}>
              <li className={styles.highlyCustomisedTailoredTo1}>
                Highly Customised: Tailored to the individual’s corneal
                topography.
              </li>
              <li className={styles.enhancedVisualAcuityPotent}>
                Enhanced Visual Acuity: Potential for sharper and clearer
                vision.
              </li>
              <li className={styles.minimallyInvasiveLessTissu}>
                Minimally Invasive: Less tissue removal than traditional LASIK.
              </li>
              <li className={styles.rapidRecoveryMostPatients}>
                Rapid Recovery: Most patients experience a quick return to
                normal activities.
              </li>
              <li>
                Post-Operative Care: Following the surgery, patients are
                provided with detailed aftercare instructions. This includes the
                use of prescribed eye drops and temporary restrictions on
                activities like swimming or exposure to dusty environments.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.comparisonNode}>
        <div className={styles.booleanOperator}>
          <div className={styles.nestedNode}>
            <h2 className={styles.whyChooseIsha}>
              Why Choose Isha Netralaya For Contoura Vision?
            </h2>
          </div>
          <div className={styles.optingForIshaContainer}>
            <ul className={styles.optingForIshaNetralayaMean}>
              <li className={styles.optingForIsha}>
                Opting for Isha Netralaya means:
              </li>
              <li className={styles.expertTeamOurTeam}>
                Expert Team: Our Team comprises one of the Best Contoura
                specialists in Maharashtra,  who are experienced and specialised
                in advanced refractive procedures.
              </li>
              <li className={styles.stateOfTheArtTechnologyE}>
                State-of-the-Art Technology: Ensuring precision and safety in
                every procedure.
              </li>
              <li className={styles.comprehensiveCareFocusedOn}>
                Comprehensive Care: Focused on achieving the best visual
                outcomes for each patient.
              </li>
              <li>
                At Isha Netralaya, we are dedicated to providing exceptional eye
                care services. Our commitment extends beyond Thane to Kalyan and
                Ambernath, offering a transformative Contoura Vision experience.
                Embrace a future of enhanced clarity and precision, where
                innovative technology meets compassionate care.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageNode;
