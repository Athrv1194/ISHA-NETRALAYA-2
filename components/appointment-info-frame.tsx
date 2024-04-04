import type { NextPage } from "next";
import styles from "./appointment-info-frame.module.css";

const AppointmentInfoFrame: NextPage = () => {
  return (
    <div className={styles.appointmentInfoFrame}>
      <div className={styles.appointmentInfoFrameChild} />
      <div className={styles.whatIsSmileSurgeryWrapper}>
        <h2 className={styles.whatIsSmile}>What Is SMILE Surgery?</h2>
      </div>
      <div className={styles.assessmentAndDiagnosisParent}>
        <h2 className={styles.assessmentAndDiagnosis}>
          Assessment And Diagnosis
        </h2>
        <div className={styles.atIshaNetralayaTheJourneyParent}>
          <div className={styles.atIshaNetralaya}>
            At Isha Netralaya, the journey towards improved vision begins with a
            comprehensive eye examination. Our experienced ophthalmologists
            conduct detailed assessments to determine if SMILE surgery is the
            right choice for you, considering factors like corneal thickness and
            the degree of myopia or astigmatism.
          </div>
          <h2 className={styles.customisedTreatmentPlans}>
            Customised Treatment Plans
          </h2>
        </div>
        <div className={styles.recognizingThatEachPatientParent}>
          <div className={styles.recognizingThatEachContainer}>
            <span className={styles.recognizingThatEach}>
              Recognizing that each patient’s vision needs are unique, we offer
              tailored SMILE surgery plans at competitive 
            </span>
            <b>SMILE surgery costs in Maharashtra</b>
            <span className={styles.ourTeamEnsures}>
              . Our team ensures that the treatment aligns with your specific
              requirements, whether you have mild myopia or significant
              refractive errors.
            </span>
          </div>
          <h2 className={styles.theSmileProcedure}>The SMILE Procedure</h2>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfoFrame;
