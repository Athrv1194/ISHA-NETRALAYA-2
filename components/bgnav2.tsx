import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./bgnav2.module.css";

const Bgnav2: NextPage = () => {
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
        src="/glacouma vision.jpg"
      />
      <header className={styles.maskGroupParent}>
        <div className={styles.maskGroup}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-12@2x.png"
          />
        </div>
        <div className={styles.iSHA}>
          <div className={styles.netralaya}>
            <div className={styles.icon}>
              <div className={styles.notes}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <h3 className={styles.netralaya1} onClick={onNetralayaTextClick}>
                Netralaya
              </h3>
            </div>
            <img
              className={styles.icon1}
              loading="lazy"
              alt=""
              src="/icon2.svg"
              onClick={onIconClick}
            />
          </div>
          <div className={styles.footerFrame}>
            <div className={styles.branchesText}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext@2x.png"
              />
              <div className={styles.chineseJapaneseText}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.microsoftPatchManaChineseJ}>
        <h1
          className={styles.whatIsGlaucoma}
        >{`What Is Glaucoma & Who Should Be Aware Of It?`}</h1>
      </div>
      <div className={styles.bgnavChild} />
    </section>
  );
};

export default Bgnav2;
