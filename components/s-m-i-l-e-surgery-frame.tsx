import type { NextPage } from "next";
import styles from "./s-m-i-l-e-surgery-frame.module.css";

const SMILESurgeryFrame: NextPage = () => {
  return (
    <section className={styles.sMILESurgeryFrame}>
      <div className={styles.contouraVisionFrame}>
        <div className={styles.retinaTreatmentFrame}>
          <h1 className={styles.bestHospitalFor}>
            Best Hospital For Glaucoma Surgery In Maharashtra
          </h1>
          <div className={styles.articlesBlogsFrame}>
            <div className={styles.glaucomaIsAContainer}>
              <p className={styles.glaucomaIsA}>
                Glaucoma is a serious condition of the eye where the optic nerve
                gets damaged primarily due to high intraocular pressure. In
                India, glaucoma significantly impacts the adult population.
                Estimates suggest that millions are affected, with primary open
                angle glaucoma and primary angle-closure glaucoma being the most
                prevalent.
              </p>
              <p className={styles.recognizedAsA}>
                Recognized as a leading cause of blindness globally, glaucoma
                requires comprehensive care and management. At Isha Netralaya,
                known as the best hospital for glaucoma treatment in
                Maharashtra, we specialise in the diagnosis and treatment of
                various types of glaucoma, offering hope and improved eye health
                to our patients.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contactUsFrame}>
          <div className={styles.aboutUsFrame}>
            <div className={styles.glaucomaInfo}>
              <h2 className={styles.understandingGlaucomaAnd}>
                Understanding Glaucoma And Its Impact On Vision
              </h2>
              <div className={styles.glaucomaOftenInvolvesTheLoWrapper}>
                <div className={styles.glaucomaOftenInvolves}>
                  Glaucoma often involves the loss of vision due to optic nerve
                  damage. This nerve is vital for carrying visual information
                  from the eye to the brain, and any damage can significantly
                  impair sight. Typically affecting both eyes, glaucoma’s
                  progression can lead to severe vision loss if untreated,
                  starting with peripheral vision diminishing towards central
                  vision loss.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.treatmentsForGlaucomaAtIshParent}>
            <h2 className={styles.treatmentsForGlaucoma}>
              Treatments For Glaucoma At Isha Netralaya
            </h2>
            <div className={styles.ourApproachToContainer}>
              <p className={styles.ourApproachTo}>
                Our approach to glaucoma treatment involves a combination of
                medications, surgery, and laser treatments, tailored to each
                patient’s specific needs.
              </p>
              <p className={styles.medicationsAsAPrimary}>
                Medications: As a primary treatment, various medications are
                prescribed to lower eye pressure, essential in preventing optic
                nerve damage. At Isha Netralaya, the glaucoma specialist in
                Maharashtra closely monitors and adjusts these medications to
                optimise treatment efficacy and minimise side effects.
              </p>
              <p className={styles.surgicalTreatmentsInCases}>
                Surgical Treatments: In cases where medication alone is
                insufficient, surgical options are considered. Depending on the
                type and severity of glaucoma, as well as the patient’s overall
                eye health, different surgical procedures may be recommended.
                These surgeries aim to reduce intraocular pressure but cannot
                reverse existing vision loss.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMILESurgeryFrame;
