import type { NextPage } from "next";
import IshaNetralayaHome from "../components/isha-netralaya-home";
import ServicesSection from "../components/services-section";
import AppointmentInfoFrame from "../components/appointment-info-frame";
import BECOMEAMEMBER from "../components/b-e-c-o-m-e-a-m-e-m-b-e-r";
import Footer2 from "../components/footer2";
import styles from "./s-m-i-l-e-surgery.module.css";

const SMILESurgery: NextPage = () => {
  return (
    <div className={styles.smileSurgery}>
      <div className={styles.smileSurgerySmallIncisionContainer}>
        <b>SMILE Surgery</b>
        <span className={styles.smallIncisionLenticule}>
           (Small Incision Lenticule Extraction), a leading-edge
        </span>
        <b> smile eye surgery in Maharashtra</b>
        <span className={styles.representsAnAdvancement}>
          , represents an advancement in refractive eye surgery. This minimally
          invasive alternative to LASIK, widely recognized as 
        </span>
        <b>the best smile eye surgery in Maharashtra</b>
        <span className={styles.correctsVisionImpairments}>
          , corrects vision impairments such as myopia and astigmatism,
          enhancing life quality by reducing dependency on glasses or contact
          lenses.
        </span>
      </div>
      <h1 className={styles.bestHospitalFor}>
        Best Hospital For SMILE Surgery In Maharashtra
      </h1>
      <div className={styles.smileIsAContainer}>
        <span
          className={styles.smileIsA}
        >{`SMILE is a laser eye surgery performed using a state-of-the-art femtosecond laser. This procedure involves creating a small, lens-shaped bit of tissue (lenticule) within the cornea, which is then removed through a tiny incision, reshaping the cornea and correcting vision. The key advantage of SMILE is its minimally invasive nature, making it the preferred choice for patients at Isha Netralaya, `}</span>
        <b>the best hospital for SMILE surgery in Maharashtra.</b>
      </div>
      <IshaNetralayaHome />
      <section className={styles.mainMenuBar}>
        <ServicesSection />
        <AppointmentInfoFrame />
        <div className={styles.mainMenuBarInner}>
          <div className={styles.smileSurgeryAtIshaNetralayParent}>
            <div className={styles.smileSurgeryAtContainer}>
              <p className={styles.smileSurgeryAt}>
                SMILE surgery at Isha Netralaya is a quick, approximately
                15-minute procedure. It involves:
              </p>
              <p className={styles.localAnaesthesiaEnsuringA}>
                Local Anaesthesia: Ensuring a pain-free experience.
              </p>
              <p className={styles.femtosecondLaserApplication}>
                Femtosecond Laser Application: To create a precise lenticule
                inside the cornea.
              </p>
              <p className={styles.lenticuleRemovalThroughA}>
                Lenticule Removal: Through a micro-incision of about 2-4 mm.
              </p>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.advantagesOfSmileSurgeryWrapper}>
                <h2 className={styles.advantagesOfSmile}>
                  Advantages Of SMILE Surgery
                </h2>
              </div>
              <div className={styles.minimallyInvasiveWithAContainer}>
                <ul className={styles.minimallyInvasiveWithASma}>
                  <li className={styles.minimallyInvasiveWithASma1}>
                    <b className={styles.minimallyInvasive}>
                      Minimally Invasive:
                    </b>
                    <span className={styles.withASmaller}>
                       With a smaller incision, the procedure is less disruptive
                      to the cornea.
                    </span>
                  </li>
                  <li className={styles.reducedDryEyeSymptomsIdea}>
                    <b className={styles.reducedDryEye}>
                      Reduced Dry Eye Symptoms:
                    </b>
                    <span className={styles.idealForPatients}>
                       Ideal for patients prone to dry eyes.
                    </span>
                  </li>
                  <li className={styles.rapidRecoveryMostPatients}>
                    <b className={styles.rapidRecovery}>Rapid Recovery:</b>
                    <span className={styles.mostPatientsReport}>
                       Most patients report significant vision improvement
                      within a day.
                    </span>
                  </li>
                  <li className={styles.highPrecisionTheFemtosecon}>
                    <b className={styles.highPrecision}>High Precision:</b>
                    <span className={styles.theFemtosecondLaser}>
                       The femtosecond laser ensures accuracy and consistency.
                    </span>
                  </li>
                  <li className={styles.postOperativeCarePostSurg}>
                    <b className={styles.postOperativeCare}>
                      Post-Operative Care:
                    </b>
                    <span className={styles.postSurgeryPatientsCan}>
                       Post-surgery, patients can expect a swift return to daily
                      activities. We provide clear guidelines on eye care,
                      including using prescribed eye drops and avoiding
                      strenuous activities for a short period.
                    </span>
                  </li>
                </ul>
                <p className={styles.p}> </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BECOMEAMEMBER />
      <Footer2 />
    </div>
  );
};

export default SMILESurgery;
