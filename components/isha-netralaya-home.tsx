import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./isha-netralaya-home.module.css";

const IshaNetralayaHome: NextPage = () => {
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

  const onSelfRegistrationClick = useCallback(() => {
    router.push("/s-e-l-f-r-e-g-i-s-t-r-a-t-i-o-n");
  }, [router]);

  const onOnlineAppointmentTextClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.ishaNetralayaHome}>
      <div className={styles.backgroundImageNav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/CloseUpEye.jpeg"
        />
        <div className={styles.phoneEmailMask}>
          <img
            className={styles.hamburgerMenuIcon}
            loading="lazy"
            alt=""
            src="/mask-group-12@2x.png"
          />
        </div>
        <div className={styles.ourDoctorsArticles}>
          <div className={styles.blogsSection}>
            <div className={styles.thaneCorelSquareBranch}>
              <div className={styles.ambernathBranch}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/icon4.svg"
                  onClick={onIconClick}
                />
                <div className={styles.kalyaniBranch}>
                  <div className={styles.cataractLASIKSMILES}>
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
              <div className={styles.headerFrame}>
                <div className={styles.aboutUsInfo}>
                  <div className={styles.careerOpportunities}>
                    <img
                      className={styles.fileNoteText}
                      loading="lazy"
                      alt=""
                      src="/24--file--notetext2@2x.png"
                    />
                  </div>
                  <div className={styles.homeLatestUpdates}>
                    <div
                      className={styles.selfRegistration}
                      onClick={onSelfRegistrationClick}
                    >{`Self Registration | `}</div>
                  </div>
                  <div className={styles.homeLatestUpdates1}>
                    <div
                      className={styles.onlineAppointment}
                      onClick={onOnlineAppointmentTextClick}
                    >{`Online Appointment `}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.ishaNetralayaLogo}>
            <div className={styles.headerNavBar}>
              <h1 className={styles.smileSurgery}>SMILE Surgery</h1>
            </div>
            <div className={styles.atIshaNetralaya}>
              At Isha Netralaya, we provide comprehensive and advanced cornea
              treatments, addressing various conditions to ensure optimal eye
              health.
            </div>
          </div>
        </div>
        <div className={styles.backgroundImageNavChild} />
      </div>
    </section>
  );
};

export default IshaNetralayaHome;
