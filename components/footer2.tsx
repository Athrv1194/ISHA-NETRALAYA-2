import type { NextPage } from "next";
import styles from "./footer2.module.css";

const Footer2: NextPage = () => {
  return (
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
                Hospital, Karnik Road, Near Nutan Vidyalaya,Kalyan West, Mumbai
                – 421 301
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
                :- ICoral Square, Ghodbunder Road (Opp. D-Mart), Kavesar, Thane
                West, Thane.
              </span>
            </p>
          </div>
          <div className={styles.ambernathIshaNetralayaPrWrapper}>
            <div className={styles.ambernathIshaNetralayaContainer}>
              <p className={styles.ambernathIshaNetralayaPr}>
                <b className={styles.ambernath}>AMBERNATH</b>
                <span className={styles.ishaNetralayaPrabat}>
                  {" "}
                  :-Isha Netralaya, Prabat Plaza (2nd Floor), Near Welfare
                  Centre (Opp Navare Arcade), Shiv Mandir Road Ambernath (E) 301
                </span>
              </p>
            </div>
          </div>
          <div className={styles.puneIshaNetralayaShopNWrapper}>
            <div className={styles.puneIshaContainer}>
              <p className={styles.puneIshaNetralayaShopN}>
                <b className={styles.pune}>PUNE</b>
                <span>
                  {" "}
                  :- Isha Netralaya, Shop No.7, Premier Plaza, Old Big Bazar
                  (Above Mc Donald), Anand Nagar, Chinchwad, Pune,
                  Pimpri-Chinchwad, Maharashtra - 411 019
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.latestUpdates}>Latest Updates</div>
            <div className={styles.ourDoctors}>Our Doctors</div>
            <div className={styles.articlesBlogs}>{`Articles & Blogs`}</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
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
      <div className={styles.frameParent1}>
        <div className={styles.ishaNetralayaParent}>
          <div className={styles.ishaNetralaya}>ISHA NETRALAYA</div>
          <div className={styles.asOneOf}>
            As one of the leading eye hospitals in the heart of Thane, we take
            pride in our expertise in treating a varied range of eye problems.
          </div>
        </div>
        <div className={styles.phoneEmailParent}>
          <div className={styles.phoneEmail}>
            <p className={styles.phone}>{`Phone: `}</p>
            <p className={styles.email}>Email:</p>
          </div>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
        <div className={styles.copyright2024Isha}>
          Copyright © 2024 Isha Netralaya, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
