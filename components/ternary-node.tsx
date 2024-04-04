import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ternary-node.module.css";

const TernaryNode: NextPage = () => {

  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/about-you");
  }, [router]);

  return (
    <div className={styles.ternaryNode}>
      <img
        className={styles.containeraboutusIcon}
        alt=""
        src="/containeraboutus.svg"
      />
      <img
        className={styles.ternaryNodeChild}
        loading="lazy"
        alt=""
        src="/line.svg"
      />
      <div className={styles.hexTreeNode}>
        <h3 className={styles.trustedEyeHospital}>
          Trusted Eye Hospital in Maharashtra
        </h3>
        <div className={styles.bSPTreeNode}>
          <b className={styles.nestledInThe}>
            Nestled in the heart of Maharashtra, Isha Netralaya stands proudly
            as a premier, tertiary eye hospital, distinguished for its unrivaled
            proficiency in addressing a diverse spectrum of ocular issues,
            providing complete eye care under one roof. Our accomplished team of
            eye specialists in Maharashtra seamlessly integrates advanced
            expertise with compassionate care to provide unparalleled services.
            Whether undertaking routine check-ups or performing intricate
            surgeries, our team of 25 dedicated professionals are committed to
            accompanying you on the path to pristine vision. As the preferred
            NABH accredited eye hospital in Maharashtra, we redefine ocular
            healthcare by seamlessly blending cutting-edge technologies like
            Robotic Laser Cataract Surgery with personalized attention. Isha
            Netralaya stands as a premier teaching institute, offering advanced
            training opportunities for post-MS doctors, shaping the next
            generation of ophthalmic specialists. Experience a realm of visual
            excellence at Isha Netralaya, where precision converges with
            compassion, shaping a brighter and clearer tomorrow.
          </b>
          <div className={styles.readMore}>
            <h1 className={styles.aboutUs}>About us</h1>
            <div className={styles.trieNode}>
              <div className={styles.button} onClick={onButtonClick} />
              <h3 className={styles.readMore1} onClick={onButtonClick} >Read More</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TernaryNode;
