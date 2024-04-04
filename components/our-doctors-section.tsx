import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./our-doctors-section.module.css";

const OurDoctorsSection: NextPage = () => {
  const router = useRouter();

  const onPuneBranchFrameClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.ourDoctorsSection}>
      <div className={styles.articlesBlogsContainer}>
        <div className={styles.onlineAppointmentCard}>
          <img
            className={styles.onlineAppointmentCardChild}
            alt=""
            src="/rectangle-715@2x.png"
          />
          <div className={styles.contactUsSection}>
            <div className={styles.contactUsSectionChild} />
            <div className={styles.aboutUsSection}>
              <div className={styles.pediatricOphthalmologyContai}>
                <div className={styles.ishaNetralaya}>Isha Netralaya</div>
              </div>
              <div className={styles.parentNode}>
                <div className={styles.phoneEmailMaskGroup}>
                  <div className={styles.footerSection} />
                </div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
              </div>
            </div>
            <div className={styles.kalyaniBranchFrame}>
              <div className={styles.ambernathBranchFrame}>
                <div
                  className={styles.puneBranchFrame}
                  onClick={onPuneBranchFrameClick}
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
          <iframe width="350" height="197" src="https://www.youtube.com/embed/XlI_JXYMzbs?si=yeJ4Cp0sG3Ur3qFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.cataractSurgeryFrame}>
            <div className={styles.nationalEyeInstituteContainer}>
              <p className={styles.nationalEyeInstituteNih}>
                <a
                  className={styles.nationalEyeInstituteNih1}
                  href="https://www.youtube.com/@neinih"
                  target="_blank"
                >
                  <span className={styles.nationalEyeInstitute}>
                    National Eye Institute, NIH
                  </span>
                </a>
              </p>
              <p className={styles.learnAboutGlaucomaA}>
                Learn about glaucoma, a condition that affects the optic nerve
                and can cause blindness. Version of this video with audio ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDoctorsSection;
