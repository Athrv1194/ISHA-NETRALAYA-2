import type { NextPage } from "next";
import Nav from "../components/nav";
import FoodCategory from "../components/food-category";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import styles from "./choosing-the-best-l-a-s-i-k-surgeo.module.css";

const ChoosingTheBestLASIKSurgeo: NextPage = () => {
  return (
    <div className={styles.choosingTheBestLasikSurgeo}>
      <main className={styles.navParent}>
        <Nav />
        <section className={styles.foodCategoryWrapper}>
          <FoodCategory />
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.ourBranches}>Our Branches</div>
        <div className={styles.frameParent}>
          <div className={styles.kalyanIshaNetralayaRadhWrapper}>
            <div className={styles.kalyanIshaContainer}>
              <p className={styles.kalyanIshaNetralayaRadh}>
                <b className={styles.kalyan}>KALYAN</b>
                <span>
                  {" "}
                  :- Isha Netralaya, Radha Krishna Sankul, Opp. Holly Cross
                  Hospital, Karnik Road, Near Nutan Vidyalaya,Kalyan West,
                  Mumbai – 421 301
                </span>
              </p>
            </div>
          </div>
          <FrameComponent2 />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.homeSections}>
            <div className={styles.homeParent}>
              <div className={styles.home}>Home</div>
              <div className={styles.latestUpdates}>Latest Updates</div>
              <div className={styles.ourDoctors}>Our Doctors</div>
              <div className={styles.articlesBlogs}>{`Articles & Blogs`}</div>
              <div className={styles.contactUs}>Contact Us</div>
            </div>
            <div className={styles.homeSectionsInner}>
              <div className={styles.frameGroup}>
                <div className={styles.ourServicesWrapper}>
                  <div className={styles.ourServices}>Our Services</div>
                </div>
                <div className={styles.cataractTreatmentParent}>
                  <div className={styles.cataractTreatment}>
                    <p className={styles.cataractTreatment1}>
                      Cataract Treatment
                    </p>
                  </div>
                  <div className={styles.lasikSurgery}>LASIK Surgery</div>
                  <div className={styles.smileSurgery}>SMILE Surgery</div>
                  <div className={styles.contouraVision}>CONTOURA Vision</div>
                  <div className={styles.retinaTreatment}>
                    <p className={styles.retinaTreatment1}>Retina Treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutUs}>About Us</div>
        </div>
        <div className={styles.pediatricOphthalmology}>
          Pediatric Ophthalmology
        </div>
        <FrameComponent1 />
      </footer>
    </div>
  );
};

export default ChoosingTheBestLASIKSurgeo;
