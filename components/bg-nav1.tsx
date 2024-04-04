import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bg-nav1.module.css";

const BgNav1: NextPage = () => {
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
    <section className={styles.bgnav}>
      <img
        className={styles.backgroundIcon}
        alt=""
        src="/contactUs.jpg"
      />
      <div className={styles.loopNode}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group4@2x.png"
        />
      </div>
      <div className={styles.bgnavChild} />
      <div className={styles.parentNode}>
        <div className={styles.siblingNodes}>
          <div className={styles.childNodes}>
            <div className={styles.rootNode}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon7.svg"
                onClick={onIconClick}
              />
              <div className={styles.terminalNode}>
                <div className={styles.mergerNode}>
                  <h2 className={styles.isha} onClick={onISHATextClick}>
                    ISHA
                  </h2>
                </div>
                <div
                  className={styles.netralaya}
                  onClick={onNetralayaTextClick}
                >
                  Netralaya
                </div>
              </div>
            </div>
            <div className={styles.functionNode}>
              <div className={styles.constantNode}>
                <div className={styles.variableNode}>
                  <img
                    className={styles.fileNoteText}
                    loading="lazy"
                    alt=""
                    src="/24--file--notetext6@2x.png"
                  />
                </div>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.wedLoveTo}>We’d love to hear from you!</h1>
      </div>
    </section>
  );
};

export default BgNav1;
