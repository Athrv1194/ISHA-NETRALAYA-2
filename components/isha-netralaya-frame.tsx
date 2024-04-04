import type { NextPage } from "next";
import styles from "./isha-netralaya-frame.module.css";

const IshaNetralayaFrame: NextPage = () => {
  return (
    <section className={styles.ishaNetralayaFrame}>
      <div className={styles.maskGroupFrame}>
        <div className={styles.ourBranchesFrame}>
          <div className={styles.kalyaniFrame}>
            <div className={styles.ishaNetralaya}>Isha Netralaya</div>
            <h1 className={styles.whyChooseUs}>Why Choose Us?</h1>
          </div>
          <div className={styles.contactUsFrame}>
            <div className={styles.homeLatestUpdatesFrame}>
              <div className={styles.ourDoctorsFrame}>
                <div className={styles.copyrightFrameWrapper}>
                  <div className={styles.copyrightFrame} />
                </div>
                <div className={styles.cuttingEdgeTechnologyPione}>
                  Cutting-edge Technology: Pioneering Robotic Blade-Free
                  procedures for precise, painless outcomes.
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.expertTeamFrame}>
                  <div className={styles.expertTeamFrameInner}>
                    <div className={styles.frameChild} />
                  </div>
                  <div className={styles.expertTeam25Highly}>
                    Expert Team: 25 highly experienced specialists offering
                    sub-specialty clinics under one roof.
                  </div>
                </div>
                <div className={styles.expertTeamFrame1}>
                  <div className={styles.expertTeamFrameChild}>
                    <div className={styles.frameItem} />
                  </div>
                  <div className={styles.provenExcellenceOver1500}>
                    Proven Excellence: Over 15,00,000 successful surgeries and
                    procedures with NABH and QCI accreditations.
                  </div>
                </div>
              </div>
              <div className={styles.ourDoctorsFrame1}>
                <div className={styles.ourDoctorsFrameInner}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.affordabilityPremiumEyeCar}>
                  Affordability: Premium eye care that is efficient, equitable,
                  and accessible to all.
                </div>
              </div>
              <div className={styles.ourDoctorsFrame2}>
                <div className={styles.ourDoctorsFrameChild}>
                  <div className={styles.ellipseDiv} />
                </div>
                <div className={styles.communityCommitmentOurChar}>
                  Community Commitment: Our charity wing extends services to the
                  underprivileged, embodying our commitment to the community.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.maskGroup}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group-31@2x.png"
        />
        <img
          className={styles.image21Icon}
          loading="lazy"
          alt=""
          src="/image-21@2x.png"
        />
      </div>
    </section>
  );
};

export default IshaNetralayaFrame;
