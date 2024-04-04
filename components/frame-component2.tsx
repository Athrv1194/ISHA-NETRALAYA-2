import type { NextPage } from "next";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
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
              :-Isha Netralaya, Prabat Plaza (2nd Floor), Near Welfare Centre
              (Opp Navare Arcade), Shiv Mandir Road Ambernath (E) 301
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
              :- Isha Netralaya, Shop No.7, Premier Plaza, Old Big Bazar (Above
              Mc Donald), Anand Nagar, Chinchwad, Pune, Pimpri-Chinchwad,
              Maharashtra - 411 019
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
