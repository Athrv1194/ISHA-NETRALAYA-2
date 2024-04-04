import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./b-g-nav.module.css";

const BGNav: NextPage = () => {
  const router = useRouter();

  const onISHATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNetralayaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <section className={styles.bgnav}>
      <img className={styles.backgroundIcon} alt="" src="/Stress.jpg" />
      <div className={styles.mainContent}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group-12@2x.png"
        />
      </div>
      <div className={styles.iSHAParent}>
        <div className={styles.iSHA}>
          <div className={styles.netralaya}>
            <div className={styles.socialMediaIcons}>
              <div className={styles.appointmentInfo}>
                <div className={styles.diabetesAwareness}>
                  <h1 className={styles.isha} onClick={onISHATextClick}>
                    ISHA
                  </h1>
                </div>
                <h3
                  className={styles.netralaya1}
                  onClick={onNetralayaTextClick}
                >
                  Netralaya
                </h3>
              </div>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon2.svg"
                onClick={onIconClick}
              />
            </div>
            <div className={styles.twitterLink}>
              <div className={styles.noteText}>
                <img
                  className={styles.fileNoteText}
                  loading="lazy"
                  alt=""
                  src="/24--file--notetext@2x.png"
                />
                <div className={styles.onlineRegistration}>
                  <div
                    className={styles.selfRegistration}
                  >{`Self Registration | Online Appointment `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.whatIsDiabetic}>
          What Is Diabetic Eye Disease, And How Does It Affect Vision?
        </h1>
      </div>
      <div className={styles.bgnavChild} />
    </section>
  );
};

export default BGNav;
