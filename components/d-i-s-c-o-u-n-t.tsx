import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./d-i-s-c-o-u-n-t.module.css";

export type DISCOUNTType = {
  image23?: string;
  drSonalShah?: string;
  medicalDirector?: string;
  mBBSDOMSDNBFCPS?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];

  /** Action props */
  onMOREINFOContainer2Click?: () => void;
};

const DISCOUNT: NextPage<DISCOUNTType> = ({
  image23,
  drSonalShah,
  medicalDirector,
  mBBSDOMSDNBFCPS,
  propPadding,
  onMOREINFOContainer2Click,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.discount}>
      <div className={styles.discountChild} />
      <img className={styles.image23Icon} loading="lazy" alt="" src={image23} />
      <div className={styles.discountInner} style={frameDivStyle}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.drSonalShahParent}>
              <h3 className={styles.drSonalShah}>{drSonalShah}</h3>
              <div className={styles.medicalDirectorMbbsDoWrapper}>
                <div className={styles.medicalDirectorMbbsContainer}>
                  <p className={styles.medicalDirector}>{medicalDirector}</p>
                  <p className={styles.mbbsDomsDnb}>{mBBSDOMSDNBFCPS}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.moreInfo} onClick={onMOREINFOContainer2Click}>
            <div className={styles.bookAnAppointment}>BOOK An APPOINTMENT</div>
            <div className={styles.moreInfoInner}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/line-46.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DISCOUNT;
