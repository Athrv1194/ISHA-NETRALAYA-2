import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./become-a-member5.module.css";

const BecomeAMember5: NextPage = () => {
  const router = useRouter();

  const onCONTOURAVisionClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.becomeAMember}>
      <div className={styles.footerFrame}>
        <div className={styles.homeAndLatestUpdates}>
          <div className={styles.onlineAppointmentCard}>
            <img
              className={styles.onlineAppointmentCardChild}
              alt=""
              src="/rectangle-715@2x.png"
            />
            <div className={styles.contactUsSection}>
              <div className={styles.contactUsSectionChild} />
              <div className={styles.aboutUs}>
                <div className={styles.pediatricOphthalmology}>
                  <h2 className={styles.ishaNetralaya}>Isha Netralaya</h2>
                </div>
                <div className={styles.phoneEmailFrame}>
                  <div className={styles.copyrightNoticeFrame}>
                    <div className={styles.ourServicesFrame} />
                  </div>
                  <div className={styles.asOneOf}>
                    As one of the leading eye hospitals in the heart of Thane,
                    we take pride in our expertise in treating a varied range of
                    eye problems.
                  </div>
                </div>
              </div>
              <div className={styles.lASISurgery}>
                <div className={styles.sMILESurgery}>
                  <div
                    className={styles.cONTOURAVision}
                    onClick={onCONTOURAVisionClick}
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
            <div className={styles.youtubeAndVimeoVideo}>
            <iframe width="350" height="197" src="https://www.youtube.com/embed/DSVElDQBi04?si=LZEFvVRdpDRaCMFe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className={styles.sMILESurgerySection}>
              <h2 className={styles.inThisVideo}>
                In this video, Dr Pawan Gupta explains about Intravitreal
                Injections and its type
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.servicesHeader}>
          <div className={styles.homeLabel}>
            <div className={styles.latestUpdatesLabel}>
              <h1 className={styles.bestHospitalFor}>
                Best Hospital For Retina Treatment In Maharashtra
              </h1>
            </div>
            <h2 className={styles.theRetinaIsContainer}>
              <p className={styles.theRetinaIs}>
                The retina is a vital part of the eye responsible for converting
                light into signals that the brain interprets as visual
                information. Any disruption in its function can lead to various
                conditions affecting vision. Retina-related issues demand
                specialized care, and at Isha Netralaya, we prioritize the
                health and well-being of your eyes. Our retina treatment
                services are designed to address a range of conditions affecting
                the delicate and vital retina.
              </p>
              <p className={styles.atIshaNetralaya}>
                At Isha Netralaya, our dedicated team of retina specialists,
                including the best retina specialists in Thane, is committed to
                addressing a diverse range of conditions affecting the delicate
                retina.
              </p>
            </h2>
          </div>
        </div>
        <div className={styles.contactUsLabel}>
          <div className={styles.aboutUsLabel}>
            <h2 className={styles.diabeticRetinopathyDiabeticContainer}>
              <p className={styles.diabeticRetinopathyDiabetic}>
                Diabetic Retinopathy: Diabetic retinopathy is a complication of
                diabetes affecting the blood vessels in the retina. Symptoms
                include blurred vision, floaters, and difficulty seeing in low
                light. Our experienced retina specialists offer advanced
                treatments to manage and prevent the progression of diabetic
                retinopathy, including laser therapies and anti-VEGF injections.
              </p>
              <p className={styles.ageRelatedMacularDegenerati}>
                Age-Related Macular Degeneration (AMD): AMD is a degenerative
                eye disease that can cause central vision loss. Symptoms involve
                gradual central vision loss, distortion of straight lines, and
                difficulty recognizing faces. Our retina specialists, equipped
                with state-of-the-art diagnostic tools, tailor personalized
                treatment plans, including anti-VEGF medications and other
                advanced therapies. Advanced investigations like OCT and FFA are
                performed to observe the response of the treatment.
              </p>
              <p className={styles.retinalDetachmentRetinalDe}>
                Retinal Detachment: Retinal detachment is a serious condition
                where the retina pulls away from its normal position. Warning
                signs include sudden flashes of light, a surge of floaters, and
                a curtain-like shadow over vision. Isha Netralaya provides
                prompt surgical interventions, including vitrectomy and retinal
                reattachment surgeries, to restore the retina’s proper
                alignment. Early detection allows for sealing retinal holes
                using laser therapy. In cases of retinal detachment, surgical
                repair by the best retinal detachment surgeons in Thane and
                Ambernath becomes necessary, often involving the use of bands
                and buckles to restore the integrity of the retina.
              </p>
              <p className={styles.retinalTearsRetinalTears}>
                Retinal Tears: Retinal tears can lead to detachment if left
                untreated. Symptoms may include the sudden onset of floaters,
                flashes of light, and blurry or reduced vision. Our skilled
                retina surgeons use precise laser and cryopexy techniques to
                repair retinal tears and prevent further complications.
              </p>
              <p className={styles.macularEdemaMacularEdema}>
                Macular Edema: Macular edema involves the swelling of the
                macula, causing vision impairment. Symptoms comprise distorted
                or wavy central vision, blurred detail vision, and difficulty
                reading. Isha Netralaya employs intravitreal injections and
                laser therapy, led by the best retina specialist in Ambernath,
                to manage macular edema effectively.
              </p>
              <p className={styles.retinalVascularDiseasesVar}>
                Retinal Vascular Diseases: Various vascular diseases, including
                retinal vein occlusion and artery diseases, can impact retinal
                health. Symptoms vary but may include sudden vision loss,
                distorted vision, or the appearance of dark spots. Our experts
                conduct thorough evaluations and design tailored treatment
                plans, including anti-VEGF injections and laser therapies,
                ensuring the best retina treatment in Thane .
              </p>
              <p className={styles.retinalInfectionsInfections}>
                Retinal Infections: Infections affecting the retina require
                specialized care. Symptoms range from pain and redness to vision
                disturbances and light sensitivity. Isha Netralaya’s retina
                specialists, including the best retina specialist in
                Ambernath, administer targeted treatments to address infections,
                ensuring optimal recovery.
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
            </h2>
            <div className={styles.conditionsSection}>
              <div className={styles.conditionsSectionChild} />
              <h1 className={styles.conditionsAffectingThe}>
                Conditions Affecting The Retina
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAMember5;
