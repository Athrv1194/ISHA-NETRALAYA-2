import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Banner from "../components/banner";
import PunebranchTitle from "../components/punebranch-title";
import ParagraphMargin from "../components/paragraph-margin";
import BECOMEAMEMBER1 from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r1";
import Footer3 from "../components/footer3";
import styles from "./pediatric-ophthalmology.module.css";

const PediatricOphthalmology: NextPage = () => {
  const router = useRouter();

  const onPrimaryButtonColorClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <div className={styles.pediatricOphthalmology}>
      <div className={styles.atIshaNetralayaContainer}>
        <span className={styles.atIshaNetralaya}>
          At Isha Netralaya, known as 
        </span>
        <b>the best pediatric ophthalmology hospital in Maharashtra</b>
        <span className={styles.weFocusOn}>
          , we focus on the specialised eye care needs of children. Recognizing
          the unique characteristics of children’s eyes compared to adults, our
          dedicated team, featuring some of the 
        </span>
        <b>best pediatric ophthalmologists in Maharashtra</b>
        <span className={styles.offersComprehensiveServices}>
          , offers comprehensive services to diagnose, treat, and manage various
          eye conditions in infants, toddlers, children, and adolescents.
        </span>
      </div>
      <h1 className={styles.bestPediatricOphthalmologist}>
        Best Pediatric Ophthalmologist In Maharashtra
      </h1>
      <div className={styles.asALeadingPediatricContainer}>
        <p className={styles.asALeadingPediatric}>
          As a leading pediatric eye specialist in Maharashtra, our
          ophthalmologists are experts in treating a wide range of pediatric eye
          conditions. We offer:
        </p>
        <ul className={styles.glassesAndContactLensesFo}>
          <li className={styles.glassesAndContactLensesFo1}>
            <b className={styles.glassesAndContact}>
              Glasses and Contact Lenses:
            </b>
            <span className={styles.forCorrectingRefractive}>
               For correcting refractive errors.
            </span>
          </li>
          <li className={styles.amblyopiaTherapyIncludingP}>
            <b className={styles.amblyopiaTherapy}>Amblyopia Therapy:</b>
            <span className={styles.includingPatchingAnd}>
               Including patching and atropine drops.
            </span>
          </li>
          <li className={styles.strabismusSurgeryToCorrect}>
            <b className={styles.strabismusSurgery}>Strabismus Surgery: </b>
            <span className={styles.toCorrectMisaligned}>
              To correct misaligned eyes
            </span>
          </li>
          <li className={styles.medicalTreatmentsForCondit}>
            <b className={styles.medicalTreatments}>Medical Treatments:</b>
            <span className={styles.forConditionsLike}>
               For conditions like conjunctivitis or blocked tear ducts.
            </span>
          </li>
        </ul>
        <p className={styles.understandingTheApprehension}>
          Understanding the apprehensions children may have, Isha Netralaya
          provides a welcoming and child-friendly environment, making it
          the best eye hospital for a child in Maharashtra.
        </p>
      </div>
      <Banner />
      <section className={styles.ambernathbranchTitle}>
        <PunebranchTitle
          whatIsCataractCommonFAQs={`What is Cataract &  Common FAQ's) /मोतीबिंदू बद्दलचे प्रश्न  [ By Dr. Siddharth Seth ]`}
          onPrimaryButtonColorClick={onPrimaryButtonColorClick}
        />
        <ParagraphMargin />
        <div className={styles.image}>
          <div className={styles.maskGroupParent}>
            <div className={styles.maskGroup}>
              <div className={styles.link}>
                <h2 className={styles.advancedDiagnosticTools}>
                  Advanced Diagnostic Tools
                </h2>
                <div className={styles.phoneEmailMask}>
                  <div className={styles.anIntegralPart}>
                    An integral part of our service is educating parents and
                    caregivers about their child’s eye health. We provide
                    guidance on recognizing signs of eye problems, the
                    importance of regular eye exams, and ways to support their
                    child’s vision development.
                  </div>
                  <div className={styles.ourHospitalIs}>
                    Our hospital is equipped with the latest in diagnostic
                    technology, ensuring precise detection and monitoring of
                    pediatric eye conditions. This includes non-invasive imaging
                    and specialised tests tailored for children.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.paragraphStyle}>
              <div className={styles.alignment}>
                <h2 className={styles.commonPediatricEye}>
                  Common Pediatric Eye Conditions
                </h2>
              </div>
              <div className={styles.someOfTheContainer}>
                <ul className={styles.someOfTheCommonConditions}>
                  <li className={styles.someOfTheCommonConditions1}>
                    <span className={styles.someOfThe}>
                      Some of the common conditions we treat include:
                    </span>
                  </li>
                  <li className={styles.refractiveErrorsCorrecting}>
                    <span className={styles.refractiveErrorsCorrecting1}>
                      Refractive Errors: Correcting vision with glasses or
                      contacts.
                    </span>
                  </li>
                  <li className={styles.lazyEyeAmblyopiaImprovin}>
                    <span className={styles.lazyEyeAmblyopiaImprovin1}>
                      Lazy Eye (Amblyopia): Improving vision in the weaker eye.
                    </span>
                  </li>
                  <li className={styles.crossedEyesStrabismusAli}>
                    <span className={styles.crossedEyesStrabismusAli1}>
                      Crossed Eyes (Strabismus): Aligning the eyes properly
                      through surgery or other treatments.
                    </span>
                  </li>
                  <li className={styles.congenitalCataractsSurgery}>
                    <span className={styles.congenitalCataractsSurgery1}>
                      Congenital Cataracts: Surgery for infants born with
                      cataracts.
                    </span>
                  </li>
                  <li className={styles.tearDuctObstructionsProced}>
                    <span className={styles.tearDuctObstructionsProced1}>
                      Tear Duct Obstructions: Procedures to open blocked tear
                      ducts.
                    </span>
                  </li>
                  <li className={styles.whyChooseIshaNetralayaFor}>
                    <b className={styles.whyChooseIsha}>
                      Why Choose Isha Netralaya For Pediatric Ophthalmology?
                    </b>
                  </li>
                  <li className={styles.specializedPediatricOphthalm}>
                    <span className={styles.specializedPediatricOphthalm1}>
                      Specialized Pediatric Ophthalmologists: Our doctors are
                      specifically trained to work with children.
                    </span>
                  </li>
                  <li className={styles.comprehensiveCareFromRouti}>
                    <span className={styles.comprehensiveCareFromRouti1}>
                      Comprehensive Care: From routine exams to complex
                      surgeries.
                    </span>
                  </li>
                  <li className={styles.familyCenteredApproachWeI}>
                    <span className={styles.familyCenteredApproachWeI1}>
                      Family-Centered Approach: We involve the whole family in
                      the child’s eye care journey.
                    </span>
                  </li>
                  <li>
                    <span className={styles.ishaNetralayaIs}>
                      Isha Netralaya is committed to providing the 
                    </span>
                    <b className={styles.bestPediatricEye}>
                      best pediatric eye care in Maharashtra
                    </b>
                    <span className={styles.ourGoalIs}>
                      . Our goal is to ensure that every child has the
                      opportunity to develop optimal vision and eye health,
                      laying the foundation for a lifetime of clear sight. Trust
                      us to care for your child’s eyes with the same compassion
                      and dedication we would for our own.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BECOMEAMEMBER1 />
      <Footer3 />
    </div>
  );
};

export default PediatricOphthalmology;
