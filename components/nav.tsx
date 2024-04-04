import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./nav.module.css";

const Nav: NextPage = () => {
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
    <section className={styles.nav}>
      <header className={styles.facebookLinkedInInstagram}>
        <div className={styles.isha}>
          <div className={styles.netralaya}>
            <div className={styles.ishaWrapper}>
              <h1 className={styles.isha1} onClick={onISHATextClick}>
                ISHA
              </h1>
            </div>
            <h3 className={styles.netralaya1} onClick={onNetralayaTextClick}>
              Netralaya
            </h3>
          </div>
          <div className={styles.choosingTheBestLASIK}>
            <div className={styles.facebookLinkedInInstagramL}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext7@2x.png"
              />
              <div className={styles.selfRegistrationOnlineAppoi}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.imageIconLogo}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/artur-tumasjan-qLzWvcQq-V8-unsplash.jpg"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group5@2x.png"
        />
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/icon8.svg"
          onClick={onIconClick}
        />
      </div>
      <h1 className={styles.choosingTheBest}>
        Choosing The Best LASIK Surgeon In Maharashtra: Key Factors To Consider
      </h1>
      <div className={styles.navChild} />
    </section>
  );
};

export default Nav;
