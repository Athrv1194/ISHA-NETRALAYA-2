import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./retinal-treatment1.module.css";

const RetinalTreatment1: NextPage = () => {
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
    <section className={styles.retinalTreatment}>
      <div className={styles.bgNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/CloseEye2.jpeg"
        />
        <div className={styles.maskGroup}>
          <div className={styles.maskGroupWrapper}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group-12@2x.png"
            />
          </div>
          <div className={styles.ishaNetralaya}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon4.svg"
              onClick={onIconClick}
            />
            <div className={styles.onlineAppointmentCard}>
              <div className={styles.retinaTreatmentServices}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <h1 className={styles.netralaya} onClick={onNetralayaTextClick}>
                Netralaya
              </h1>
            </div>
          </div>
          <div className={styles.videoFrame}>
            <div className={styles.hospitalDetails}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext4@2x.png"
              />
              <div className={styles.onlineAppointment}>
                <h3
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.retinaTreatmentDescription}>
          <div className={styles.onlineAppointmentCardLabel}>
            <div className={styles.ourRetinaServices}>
              <h1 className={styles.retinalTreatment1}>Retinal Treatment</h1>
            </div>
            <h2 className={styles.ourRetinaTreatment}>
              Our retina treatment services are designed to address a range of
              conditions affecting the delicate and vital retina.
            </h2>
          </div>
        </div>
        <div className={styles.bgNavChild} />
      </div>
    </section>
  );
};

export default RetinalTreatment1;
