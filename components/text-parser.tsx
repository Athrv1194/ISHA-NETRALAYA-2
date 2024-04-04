import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./text-parser.module.css";

const TextParser: NextPage = () => {
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
    <section className={styles.textParser}>
      <div className={styles.navbg}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/doctors.jpg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group3@2x.png"
        />
        <div className={styles.conditionalNode}>
          <div className={styles.iterationNode}>
            <div className={styles.functionNode}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon6.svg"
                onClick={onIconClick}
              />
              <div className={styles.connectionNode}>
                <div className={styles.constantNode}>
                  <h1 className={styles.isha} onClick={onISHATextClick}>
                    ISHA
                  </h1>
                </div>
                <h2 className={styles.netralaya} onClick={onNetralayaTextClick}>
                  Netralaya
                </h2>
              </div>
            </div>
          </div>
          <h1 className={styles.bestEyeDoctors}>
            Best Eye Doctors In Maharashtra
          </h1>
        </div>
        <div className={styles.splitterNode}>
          <div className={styles.mergerNode}>
            <img
              className={styles.fileNoteText}
              loading="lazy"
              alt=""
              src="/24--file--notetext5@2x.png"
            />
            <div className={styles.mapperNode}>
              <div
                className={styles.selfRegistration}
              >{`Self Registration | Online Appointment `}</div>
            </div>
          </div>
        </div>
        <div className={styles.navbgChild} />
      </div>
    </section>
  );
};

export default TextParser;
