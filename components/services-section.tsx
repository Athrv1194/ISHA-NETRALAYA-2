import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./services-section.module.css";

const ServicesSection: NextPage = () => {
  const router = useRouter();

  const onHowItWorksSectionClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <div className={styles.servicesSection}>
      <div className={styles.testimonialsInfo}>
        <div className={styles.onlineAppointmentCard}>
          <img
            className={styles.onlineAppointmentCardChild}
            alt=""
            src="/rectangle-715@2x.png"
          />
          <div className={styles.ourTeamInfo}>
            <div className={styles.ourTeamInfoChild} />
            <div className={styles.websiteLogo}>
              <div className={styles.newsLetterForm}>
                <div className={styles.ishaNetralaya}>Isha Netralaya</div>
              </div>
              <div className={styles.bannerSection}>
                <div className={styles.serviceCategoriesList}>
                  <div className={styles.ourServicesSection} />
                </div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
              </div>
            </div>
            <div className={styles.whyChooseUsSection}>
              <div className={styles.patientTestimonials}>
                <div
                  className={styles.howItWorksSection}
                  onClick={onHowItWorksSectionClick}
                />
                <div className={styles.ourValuesSection}>
                  <div className={styles.onlineAppointment}>
                    ONLINE APPOINTMENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yt}>
          <div className={styles.ytChild} />
          <div className={styles.youtubeAndVimeoVideo} >
          <iframe width="350" height="197" src="https://www.youtube.com/embed/1oJFShANMTc?si=tpJPFb-0MfwjHewI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.appointmentRequestForm}>
            <div className={styles.watchThisExclusive}>
              Watch this exclusive video to know the groundbreaking advantages
              of CLEAR eye surgery and why it's best suited for you
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
