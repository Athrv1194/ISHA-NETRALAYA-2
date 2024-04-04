import type { NextPage } from "next";
import styles from "./choose-u-s-container.module.css";

const ChooseUSContainer: NextPage = () => {
  return (
    <section className={styles.joinUsNow}>
      <div className={styles.frameParent}>
        <div className={styles.whyChooseIshaNetralayaForWrapper}>
          <h2 className={styles.whyChooseIsha}>
            Why Choose Isha Netralaya For Glaucoma Treatment?
          </h2>
        </div>
        <div className={styles.expertiseAndExperienceOurContainer}>
          <ul className={styles.expertiseAndExperienceOur}>
            <li className={styles.expertiseAndExperienceOur1}>
              Expertise and Experience: Our team of glaucoma specialists in
              Kalyan and Thane are highly trained in managing all types of
              glaucoma.
            </li>
            <li className={styles.advancedDiagnosticToolsWe}>
              Advanced Diagnostic Tools: We utilise state-of-the-art technology
              for accurate diagnosis and monitoring of glaucoma progression.
            </li>
            <li className={styles.patientCentricApproachEach}>
              Patient-Centric Approach: Each treatment plan is personalised,
              considering the patient’s unique condition and lifestyle needs.
            </li>
            <li className={styles.servingTheCommunityIsha}>
              Serving the Community: Isha Netralaya is committed to providing
              exceptional glaucoma care by being the best hospital for glaucoma
              treatment in Maharashtra. We strive to extend our high-quality eye
              care services to a broader community, ensuring accessible and
              effective treatment for all.
            </li>
            <li>
              In conclusion, glaucoma is a condition that demands attention and
              expertise. At Isha Netralaya, we combine advanced medical
              practices, compassionate care, and a commitment to patient
              education to combat this eye disease effectively. Trust us to be
              your partner in maintaining eye health and preventing the risks
              associated with glaucoma.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChooseUSContainer;
