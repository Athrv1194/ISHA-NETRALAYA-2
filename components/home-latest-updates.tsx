import type { NextPage } from "next";
import styles from "./home-latest-updates.module.css";

const HomeLatestUpdates: NextPage = () => {
  return (
    <section className={styles.homeLatestUpdates}>
      <div className={styles.doctorsArticlesBlogs}>
        <div className={styles.contactUs}>
          <div className={styles.attendingATrade}>
            Glaucoma, often termed the “Silent Killer of Vision,” poses a
            significant threat due to its asymptomatic early stages that can
            lead to unexpected vision loss. Understanding the risk factors,
            symptoms, and available treatments is crucial for preserving eye
            health.
          </div>
        </div>
        <div className={styles.facebookAltSVGRepocom}>
          <div className={styles.linkedInSVGRepocom}>
            <img
              className={styles.twitterSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/twittersvgrepocom-1.svg"
            />
            <div className={styles.instagramSVGRepocom}>
              <img
                className={styles.facebookAltSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/facebookaltsvgrepocom-1.svg"
              />
            </div>
            <div className={styles.instagramSVGRepocom1}>
              <img
                className={styles.linkedinSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/linkedinsvgrepocom-1.svg"
              />
            </div>
            <div className={styles.instagramSVGRepocom2}>
              <img
                className={styles.instagramSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/instagramsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className={styles.foodFrame}>
            <div className={styles.chineseJapaneseFrame}>
              <div className={styles.microsoftPatchManaChineseJ}>
                <div className={styles.ourServicesFrame}>
                  <div className={styles.image}>
                    <div className={styles.iconLogoWhite3} />
                  </div>
                  <div className={styles.copyrightText}>
                    <div className={styles.pediatricOphthalmologyText}>
                      <h1 className={styles.microsoftPatchMana}>
                        Risk Factors
                      </h1>
                      <div className={styles.asOneOfLeadingEyeHospital}>
                        <div className={styles.lastMonthMy}>
                          Individuals above 40, those with a family history of
                          glaucoma, and those with conditions such as diabetes,
                          hypertension, myopia, and a history of traumatic eye
                          injuries are at a higher risk of developing glaucoma
                          and might be in need of expert glaucoma treatment.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.copyrightIshaNetralayaAllR}>
                <div className={styles.glaucomaInfoFrame}>
                  <div className={styles.ourServicesListParent}>
                    <div className={styles.ourServicesList}>
                      <h3 className={styles.food}>
                        Importance Of Regular Eye Consultations
                      </h3>
                    </div>
                    <div className={styles.chineseToJapanese}>
                      Routine eye exams conducted by an ophthalmologist play a
                      pivotal role in the early detection of glaucoma. These
                      examinations involve assessing eye pressure, examining
                      drainage channels, and conducting visual field tests to
                      detect peripheral vision changes.
                    </div>
                  </div>
                </div>
                <div className={styles.cataractTreatmentText}>
                  <h3 className={styles.food1}>Types Of Glaucoma</h3>
                  <div className={styles.chineseToJapaneseContainer}>
                    <ol className={styles.openAngleGlaucomaTheMost}>
                      <li className={styles.openAngleGlaucomaTheMost1}>
                        Open-Angle Glaucoma: The most common type of Glaucoma,
                        often asymptomatic in early stages, can later lead to
                        tunnel vision.
                      </li>
                      <li>
                        Closed-Angle Glaucoma: Affects the iris and may cause
                        sudden symptoms like severe eye pain, halos around
                        lights, nausea, and blurred vision.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className={styles.cONTOURAVisionText}>
                <div className={styles.microsoftPatchInfo}>
                  <h1 className={styles.microsoftPatchMana1}>Risk Factors</h1>
                  <div className={styles.chineseToJapanese1}>
                    While glaucoma is treatable, it is not curable. Early
                    detection is crucial for delaying disease progression.
                    Glaucoma treatment aims to lower eye pressure and may
                    include options such as eye drops, oral medications, and
                    laser surgery.
                  </div>
                </div>
                <div className={styles.microsoftPatchInfo1}>
                  <h3 className={styles.food2}>
                    Importance Of Timely Eye Exams
                  </h3>
                  <div className={styles.chineseToJapaneseContainer1}>
                    <p className={styles.schedulingRegularEye}>
                      Scheduling regular eye exams, especially for those at high
                      risk, is essential. Immediate consultation with a glaucoma
                      specialist is necessary if symptoms or high-risk factors
                      are present.
                    </p>
                    <p className={styles.scheduleAnAppointment}>
                      Schedule an appointment with a Glaucoma Specialist at Isha
                      Netralaya for a comprehensive eye exam. Early detection
                      and timely intervention can significantly impact the
                      progression of glaucoma.
                    </p>
                    <p className={styles.understandingTheRiskFactors}>
                      Understanding the risk factors, staying vigilant for
                      symptoms, and seeking regular eye check-ups are crucial
                      steps in preventing vision loss due to glaucoma. Early
                      intervention can make a significant difference, making
                      regular eye exams a priority for overall eye health. For
                      specialized 
                      <a
                        className={styles.glaucomaTreatmentInMaharash}
                        href="https://ishanetralaya.com/glaucoma-treatment-in-maharashtra/"
                        target="_blank"
                      >
                        <span className={styles.glaucomaTreatmentIn}>
                          glaucoma treatment in Maharashtra
                        </span>
                      </a>
                      , trust Isha Netralaya, one of the 
                      <a
                        className={styles.bestEyeHospitalsInMaharash}
                        href="https://ishanetralaya.com/"
                        target="_blank"
                      >
                        <span className={styles.bestEyeHospitals}>
                          best eye hospitals in Maharashtra
                        </span>
                      </a>
                      , to guide you toward a future with preserved vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLatestUpdates;
