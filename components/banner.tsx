import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./banner.module.css";

const Banner: NextPage = () => {
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
    <section className={styles.banner}>
      <div className={styles.backgroundnav}>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/Pediatric Ophthalmology.jpeg"
        />
        <div className={styles.callToAction}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group3@2x.png"
          />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.homePage}>
            <div className={styles.cataractIcon}>
              <div className={styles.lASIKIcon}>
                <div className={styles.sMILEIcon}>
                  <div className={styles.contouraIcon}>
                    <img
                      className={styles.icon}
                      loading="lazy"
                      alt=""
                      src="/icon5.svg"
                      onClick={onIconClick}
                    />
                    <div className={styles.contactUs}>
                      <div className={styles.appointmentBtn}>
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
                  <div className={styles.fAQsLink}>
                    <div className={styles.latestUpdatesTitle}>
                      <img
                        className={styles.fileNoteText}
                        loading="lazy"
                        alt=""
                        src="/24--file--notetext3@2x.png"
                      />
                      <div className={styles.blogsTitle}>
                        <div
                          className={styles.selfRegistration}
                        >{`Self Registration | Online Appointment `}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className={styles.pediatricOphthalmology}>
                Pediatric Ophthalmology
              </h1>
            </div>
          </div>
          <div className={styles.atIshaNetralaya}>
            At Isha Netralaya, known as the best
            pediatric ophthalmology hospital in Maharashtra, we focus on the
            specialised eye care needs of children.
          </div>
        </div>
        <div className={styles.backgroundnavChild} />
      </div>
    </section>
  );
};

export default Banner;
