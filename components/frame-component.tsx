import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent1 from "./frame-component1";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  const router = useRouter();

  const onISHANETRALAYATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurDoctorsTextClick = useCallback(() => {
    router.push("/best-eye-doctors-in-maharashtr");
  }, [router]);

  const onArticlesBlogsClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='doanTuan3QFQOxGCVmEUnsplashImage']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <footer className={styles.ourBranchesParent}>
      <div className={styles.ourBranches}>Our Branches</div>
      <div className={styles.kalyaniNetralayaFrame}>
        <div className={styles.kalyaniNetralayaFrameChild} />
        <div className={styles.ambernathNetralayaFrame}>
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
          <div className={styles.thaneCoralSquareIcoralParent}>
            <div className={styles.thaneCoralSquareContainer}>
              <p className={styles.thaneCoralSquareIcoral}>
                <b className={styles.thaneCoralSquare}>THANE (CORAL SQUARE)</b>
                <span>
                  {" "}
                  :- ICoral Square, Ghodbunder Road (Opp. D-Mart),Kavesar,
                  Thane West, Thane.
                </span>
              </p>
            </div>
            <div className={styles.homeLatestUpdatesFrame}>
              <div className={styles.ambernathIshaNetralayaContainer}>
                <p className={styles.ambernathIshaNetralayaPr}>
                  <b className={styles.ambernath}>AMBERNATH</b>
                  <span className={styles.ishaNetralayaPrabat}>
                    {" "}
                    :-Isha Netralaya, Prabat Plaza (2nd Floor), Near Welfare
                    Centre (Opp Navare Arcade),Shiv Mandir Road Ambernath (E)
                    301
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.homeLatestUpdatesFrame1}>
              <div className={styles.puneIshaContainer}>
                <p className={styles.puneIshaNetralayaShopN}>
                  <b className={styles.pune}>PUNE</b>
                  <span>
                    {" "}
                    :- Isha Netralaya, Shop No.7, Premier Plaza,Old Big Bazar
                    (Above Mc Donald), Anand Nagar,Chinchwad, Pune,
                    Pimpri-Chinchwad, Maharashtra - 411 019
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contactUsFrame}>
          <div className={styles.ourServicesFrame}>
            <div className={styles.homeParent}>
              <div className={styles.home} onClick={onHomeTextClick}>
                Home
              </div>
              <div className={styles.latestUpdates}>Latest Updates</div>
              <div
                className={styles.ourDoctors}
                onClick={onOurDoctorsTextClick}
              >
                Our Doctors
              </div>
              <div
                className={styles.articlesBlogs}
                onClick={onArticlesBlogsClick}
              >{`Articles & Blogs`}</div>
              <div className={styles.contactUs} onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
            <div className={styles.servicesList}>
              <div className={styles.cataractFrame}>
                <div className={styles.lasikFrame}>
                  <div className={styles.ourServices}>Our Services</div>
                </div>
                <div className={styles.contouraFrame}>
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
          <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
        <div className={styles.pediatricOphthalmology}>
          Pediatric Ophthalmology
        </div>
        <FrameComponent1 onISHANETRALAYATextClick={onISHANETRALAYATextClick} />
      </div>
    </footer>
  );
};

export default FrameComponent;
