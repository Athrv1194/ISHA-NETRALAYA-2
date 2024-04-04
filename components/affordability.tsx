import type { NextPage } from "next";
import styles from "./affordability.module.css";

const Affordability: NextPage = () => {
  return (
    <div className={styles.affordability}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.image18Icon}
          loading="lazy"
          alt=""
          src="/image-18@2x.png"
        />
      </div>
      <div className={styles.storyFrame}>
        <div className={styles.ourStoryFrame}>
          <div className={styles.ellipseGroup}>
            <div className={styles.cuttingedgeFrames}>
              <h1 className={styles.ourStory}>Our story</h1>
              <div className={styles.affordableCareFrame} />
            </div>
            <div className={styles.establishedIn2001}>
              Established in 2001, Isha Netralaya stands as the largest eye care
              hospital chain in Thane and Kalyan. With a commitment to
              delivering top-notch eye care services, our state-of-the-art
              facilities are equipped to provide a comprehensive range of
              services under one roof. Our state-of-the-art hospitals,
              strategically located in Kalyan, Thane (Ghodbunder Road), Thane
              (Dev Corpora, Cadbury Junction), and Ambernath, provide
              comprehensive eye care services under one roof. At Isha Netralaya,
              we boast a team of 20 highly experienced super specialist doctors,
              each trained at reputed institutions. This advantage allows us to
              offer sub-specialty clinics for various eye-related services.
              Being among the top 3 eye hospitals in Thane and Kalyan, we hold
              accreditation from NABH and QCI, reflecting our commitment to
              delivering services of the highest quality.
            </div>
          </div>
          <b className={styles.ishaNetralayaAspiresContainer}>
            <p className={styles.ishaNetralayaAspires}>
              Isha Netralaya aspires to be a center of excellence in eye-care
              services, clinical research, and education. We envision a future
              where our expertise and innovation contribute to advancements in
              the field of eye care. Our commitment extends beyond treatments,
              encompassing a holistic approach that aligns with our vision for
              the future.
            </p>
            <p className={styles.experienceThePinnacle}>
              Experience the pinnacle of eye care at Isha Netralaya, where our
              mission and vision guide us towards delivering exceptional
              services to our community.
            </p>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Affordability;
