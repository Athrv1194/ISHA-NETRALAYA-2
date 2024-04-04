import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./doctors-list.module.css";

const DoctorsList: NextPage = () => {
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
    <section className={styles.doctorsList}>
      <div className={styles.bgnav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/corneal-treatment.jpg"
        />
        <div className={styles.copyrightInfo}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group3@2x.png"
          />
        </div>
        <div className={styles.navbar}>
          <div className={styles.headerFrame}>
            <div className={styles.cornealTreatmentCard}>
              <div className={styles.glaucomaCard}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon5.svg"
                  onClick={onIconClick}
                />
                <div className={styles.servicesList}>
                  <div className={styles.pediatricOphthalmology}>
                    <h1 className={styles.isha} onClick={onISHATextClick}>
                      ISHA
                    </h1>
                  </div>
                  <div
                    className={styles.netralaya}
                    onClick={onNetralayaTextClick}
                  >
                    Netralaya
                  </div>
                </div>
              </div>
              <div className={styles.footerBranches}>
                <div className={styles.homeLinks}>
                  <img
                    className={styles.fileNoteText}
                    loading="lazy"
                    alt=""
                    src="/24--file--notetext5@2x.png"
                  />
                  <div className={styles.titleContainer}>
                    <div
                      className={styles.selfRegistration}
                    >{`Self Registration | Online Appointment `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.buttonContainer}>
              <h1 className={styles.cornealTreatment}>Corneal Treatment</h1>
            </div>
            <div className={styles.atIshaNetralaya}>
              At Isha Netralaya, we provide comprehensive and advanced cornea
              treatments, addressing various conditions to ensure optimal eye
              health.
            </div>
          </div>
        </div>
        <div className={styles.bgnavChild} />
      </div>
    </section>
  );
};

export default DoctorsList;
