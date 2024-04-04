import type { NextPage } from "next";
import styles from "./paragraph-margin.module.css";

const ParagraphMargin: NextPage = () => {
  return (
    <div className={styles.paragraphMargin}>
      <div className={styles.horizontalPadding} />
      <div className={styles.verticalPadding}>
        <div className={styles.earlyDetectionAndContainer}>
          <span className={styles.earlyDetectionAnd}>
            Early detection and treatment of eye issues in children are crucial
            for ensuring proper vision development. Regular eye exams at our
            premier 
          </span>
          <b>pediatric eye clinic in Maharashtra</b>
          <span className={styles.areVitalAs}>
             are vital, as many childhood eye conditions, if untreated, can lead
            to permanent vision loss. Our services are designed to detect and
            address issues like strabismus (crossed eyes), amblyopia (lazy eye),
            refractive errors (nearsightedness, farsightedness, astigmatism),
            and more.
          </span>
        </div>
        <div className={styles.containerHeight}>
          <div className={styles.treatmentTypes}>
            <h2 className={styles.theImportanceOf}>
              The Importance Of Pediatric Eye Care
            </h2>
          </div>
          <h2 className={styles.treatmentAndManagement}>
            Treatment And Management
          </h2>
        </div>
      </div>
      <h2 className={styles.educatingParentsAnd}>
        Educating Parents And Caregivers
      </h2>
    </div>
  );
};

export default ParagraphMargin;
