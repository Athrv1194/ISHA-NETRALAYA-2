import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./frame-wrapper.module.css";

const FrameWrapper: NextPage = () => {
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
    <section className={styles.frameWrapper}>
      <div className={styles.bgNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/diet chart.jpg"
        />
        <div className={styles.maskGroupWrapper}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group3@2x.png"
          />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.iconParent}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon5.svg"
                  onClick={onIconClick}
                />
                <div className={styles.frameDiv}>
                  <div className={styles.ishaWrapper}>
                    <h1 className={styles.isha} onClick={onISHATextClick}>
                      ISHA
                    </h1>
                  </div>
                  <h1
                    className={styles.netralaya}
                    onClick={onNetralayaTextClick}
                  >
                    Netralaya
                  </h1>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <div className={styles.fileNoteTextParent}>
                  <img
                    className={styles.fileNoteText}
                    loading="lazy"
                    alt=""
                    src="/24--file--notetext5@2x.png"
                  />
                  <div className={styles.selfRegistrationOnlineAppWrapper}>
                    <h3
                      className={styles.selfRegistration}
                    >{`Self Registration | Online Appointment `}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.dietChart}>Diet Chart</h1>
        </div>
        <div className={styles.bgNavChild} />
      </div>
    </section>
  );
};

export default FrameWrapper;
