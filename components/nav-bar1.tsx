import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./nav-bar1.module.css";

const NavBar1: NextPage = () => {
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
    <section className={styles.navBar}>
      <div className={styles.bgNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background@2x.png"
        />
        <div className={styles.iconFrame}>
          <div className={styles.iSHAText}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group6@2x.png"
            />
          </div>
          <div className={styles.noteTextInstance}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon5.svg"
              onClick={onIconClick}
            />
            <div className={styles.ishaNetralya}>
              <div className={styles.phoneEmailContainer}>
                <h1 className={styles.isha} onClick={onISHATextClick}>
                  ISHA
                </h1>
              </div>
              <div className={styles.netralaya} onClick={onNetralayaTextClick}>
                Netralaya
              </div>
            </div>
          </div>
          <div className={styles.kalyaniBranch}>
            <div className={styles.ambernathBranch}>
              <img
                className={styles.fileNoteText}
                loading="lazy"
                alt=""
                src="/24--file--notetext3@2x.png"
              />
              <div className={styles.thaneCoralSquareBranch}>
                <div
                  className={styles.selfRegistration}
                >{`Self Registration | Online Appointment `}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesContainer}>
          <div className={styles.cataractLASIK}>
            <div className={styles.smileSurgery}>
              <h1 className={styles.glaucomaTreatment}>Glaucoma Treatment</h1>
            </div>
            <div className={styles.glaucomaIsA}>
              Glaucoma is a serious condition of the eye where the optic nerve
              gets damaged primarily due to high intraocular pressure. In India,
              glaucoma significantly impacts the adult population.
            </div>
          </div>
        </div>
        <div className={styles.bgNavChild} />
      </div>
    </section>
  );
};

export default NavBar1;
