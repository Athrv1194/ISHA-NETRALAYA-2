import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bg-n-av3.module.css";

const BgNAv3: NextPage = () => {
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
      <img
        className={styles.backgroundIcon}
        alt=""
        src="/older blindness.jpeg"
      />
      <div className={styles.maskGroupFrame}>
        <div className={styles.iSHAFrame}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-12@2x.png"
          />
        </div>
        <div className={styles.socialMediaIconFrame}>
          <div className={styles.appointmentText}>
            <div className={styles.notesFrame}>
              <div className={styles.iSHAFrame1}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <h3 className={styles.netralaya} onClick={onNetralayaTextClick}>
                Netralaya
              </h3>
            </div>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon9.svg"
              onClick={onIconClick}
            />
          </div>
          <div className={styles.footerFrame}>
            <div className={styles.branchFrames}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext@2x.png"
              />
              <div className={styles.ambernathFrame}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.leadingCauseOf}>
        Leading Cause Of Blindness In Older People
      </h1>
      <div className={styles.bgnavChild} />
    </section>
  );
};

export default BgNAv3;
