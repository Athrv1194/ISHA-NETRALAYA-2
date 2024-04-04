import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./backdrop-img.module.css";

const BackdropImg: NextPage = () => {
  const router = useRouter();

  const onSubtitleTextClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.backdropImg}>
      <div className={styles.mainTitle}>
        <div className={styles.onlineAppointmentCard}>
          <img
            className={styles.onlineAppointmentCardChild}
            alt=""
            src="/rectangle-715@2x.png"
          />
          <div className={styles.headerIcon}>
            <div className={styles.headerIconChild} />
            <div className={styles.footerLogo}>
              <div className={styles.socialMediaLinks}>
                <div className={styles.ishaNetralaya}>Isha Netralaya</div>
              </div>
              <div className={styles.phoneEmailContainer}>
                <div className={styles.copyrightSymbol}>
                  <div className={styles.navigationLinkSet} />
                </div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
              </div>
            </div>
            <div className={styles.homeLinkSet}>
              <div className={styles.logo}>
                <div
                  className={styles.subtitleText}
                  onClick={onSubtitleTextClick}
                />
                <div className={styles.onlineAppointment}>
                  ONLINE APPOINTMENT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yt}>
          <div className={styles.ytChild} />
          <div className={styles.youtubeAndVimeoVideo} >
          <iframe width="350" height="197" src="https://www.youtube.com/embed/pumJpD7vPN0?si=njej3Ud7HuCGBh-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.backdropImageLink}>
            <div className={styles.eye7ChaudharyEyeContainer}>
              <p className={styles.eye7ChaudharyEyeCentre}>
                <a
                  className={styles.eye7ChaudharyEyeCentre1}
                  href="https://www.youtube.com/@Eye7ChaudharyEyeCentre-Delhi"
                  target="_blank"
                >
                  <span className={styles.eye7ChaudharyEye}>
                    Eye7 Chaudhary Eye Centre
                  </span>
                </a>
              </p>
              <p className={styles.inThisVideo}>
                in this video, Dr Rahil Chaudhary explains keratoconus, how the
                problem is diagnosed and what is the latest treatment for ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackdropImg;
