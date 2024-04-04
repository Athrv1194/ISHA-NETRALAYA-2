import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./loop-node.module.css";

const LoopNode: NextPage = () => {
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
    <section className={styles.loopNode}>
      <div className={styles.bgNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/specs.jpeg"
        />
        <header className={styles.functionNode}>
          <div className={styles.groupNode}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group3@2x.png"
            />
          </div>
          <div className={styles.mergeNode}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon5.svg"
              onClick={onIconClick}
            />
            <div className={styles.rectangleNode}>
              <div className={styles.circleNode}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <div className={styles.netralaya} onClick={onNetralayaTextClick}>
                Netralaya
              </div>
            </div>
          </div>
          <div className={styles.arrowNode}>
            <div className={styles.ellipseNode}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext3@2x.png"
              />
              <div className={styles.starNode}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </header>
        <div className={styles.squareNode}>
          <div className={styles.diamondNode}>
            <div className={styles.pentagonNode}>
              <h1 className={styles.contouraVision}>Contoura Vision</h1>
            </div>
            <div className={styles.contouraVisionAlso}>
              Contoura Vision, also known as Topography-Guided LASIK, marks an
              important step in refractive eye surgery.
            </div>
          </div>
        </div>
        <div className={styles.bgNavChild} />
      </div>
    </section>
  );
};

export default LoopNode;
