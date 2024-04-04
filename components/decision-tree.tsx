import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./decision-tree.module.css";

const DecisionTree: NextPage = () => {
  const router = useRouter();

  const onIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onISHATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNetralayaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={styles.decisionTree}>
      <div className={styles.backgroundNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/BlueEye.jpeg"
        />
        <div className={styles.siblingNodes}>
          <div className={styles.rootNode}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-12@2x.png"
            />
          </div>
          <div className={styles.parentNode}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon4.svg"
              onClick={onIconClick}
            />
            <div className={styles.mergingNode}>
              <div className={styles.splittingNode}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <div className={styles.netralaya} onClick={onNetralayaTextClick}>
                Netralaya
              </div>
            </div>
          </div>
          <div className={styles.graphEdge}>
            <div className={styles.graphVertex}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext4@2x.png"
              />
              <div className={styles.networkSwitch}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dataFlow}>
          <div className={styles.bottleneck}>
            <div className={styles.queue}>
              <h1 className={styles.lasikSurgery}>LASIK Surgery</h1>
            </div>
            <div className={styles.lasikOrLaserAssisted}>
              LASIK, or Laser-Assisted In Situ Keratomileusis, is a
              transformative eye surgery offered at Isha Netralaya, the best
              hospital for LASIK treatment in Maharashtra.
            </div>
          </div>
        </div>
        <div className={styles.backgroundNavChild} />
      </div>
    </section>
  );
};

export default DecisionTree;
