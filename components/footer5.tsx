import type { NextPage } from "next";
import styles from "./footer5.module.css";

const Footer5: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.ourBranches}>Our Branches</div>
      <div className={styles.polygonNode}>
        <div className={styles.circleNode}>
          <div className={styles.ovalNode}>
            <div className={styles.diamondNode}>
              <div className={styles.hexagonNode}>
                <div className={styles.ishaNetralaya}>ISHA NETRALAYA</div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
                <div className={styles.latestUpdates}>Latest Updates</div>
              </div>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.arrowheadNode}>
              <div className={styles.ourDoctors}>Our Doctors</div>
              <div className={styles.articlesBlogs}>{`Articles & Blogs`}</div>
            </div>
            <div className={styles.imageNode}>
              <div className={styles.iconNode}>
                <div className={styles.phoneEmail}>
                  <p className={styles.phone}>{`Phone: `}</p>
                  <p className={styles.email}>Email:</p>
                </div>
                <div className={styles.audioNode}>
                  <div className={styles.contactUs}>Contact Us</div>
                </div>
              </div>
              <img
                className={styles.maskGroupIcon}
                alt=""
                src="/mask-group-11@2x.png"
              />
            </div>
          </div>
          <div className={styles.alignNode}>
            <div className={styles.distributeNode}>
              <div className={styles.layoutNode}>
                <div className={styles.ourServices}>Our Services</div>
              </div>
              <div className={styles.columnNode}>
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
                <div className={styles.alignToGridNode}>
                  <div className={styles.aboutUs}>About Us</div>
                  <div className={styles.pediatricOphthalmology}>
                    Pediatric Ophthalmology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright2024Isha}>
          Copyright © 2024 Isha Netralaya, All Rights Reserved.
        </div>
      </div>
      <div className={styles.textCombiner}>
        <div className={styles.imageMerger}>
          <div className={styles.layoutOrganizer}>
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
          <div className={styles.sizeSelector}>
            <div className={styles.thaneCoralSquareContainer}>
              <p className={styles.thaneCoralSquareIcoral}>
                <b className={styles.thaneCoralSquare}>THANE (CORAL SQUARE)</b>
                <span>
                  {" "}
                  :- ICoral Square, Ghodbunder Road (Opp. D-Mart), Kavesar,
                  Thane West, Thane.
                </span>
              </p>
            </div>
            <div className={styles.alignmentManager}>
              <div className={styles.ambernathIshaNetralayaContainer}>
                <p className={styles.ambernathIshaNetralayaPr}>
                  <b className={styles.ambernath}>AMBERNATH</b>
                  <span className={styles.ishaNetralayaPrabat}>
                    {" "}
                    :-Isha Netralaya, Prabat Plaza (2nd Floor), Near Welfare
                    Centre (Opp Navare Arcade), Shiv Mandir Road Ambernath (E)
                    301
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.alignmentManager1}>
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
      </div>
    </footer>
  );
};

export default Footer5;
