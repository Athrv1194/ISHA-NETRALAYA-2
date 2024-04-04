import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./punebranch-title.module.css";

export type PunebranchTitleType = {
  whatIsCataractCommonFAQs?: string;

  /** Style props */
  punebranchTitlePadding?: CSSProperties["padding"];
  yTPadding?: CSSProperties["padding"];
  yTGap?: CSSProperties["gap"];

  /** Action props */
  onPrimaryButtonColorClick?: () => void;
};

const PunebranchTitle: NextPage<PunebranchTitleType> = ({
  whatIsCataractCommonFAQs,
  punebranchTitlePadding,
  yTPadding,
  yTGap,
  onPrimaryButtonColorClick,
}) => {
  const punebranchTitleStyle: CSSProperties = useMemo(() => {
    return {
      padding: punebranchTitlePadding,
    };
  }, [punebranchTitlePadding]);

  const yTStyle: CSSProperties = useMemo(() => {
    return {
      padding: yTPadding,
      gap: yTGap,
    };
  }, [yTPadding, yTGap]);

  return (
    <div className={styles.punebranchTitle} style={punebranchTitleStyle}>
      <div className={styles.homePageTitle}>
        <div className={styles.onlineAppointmentCaed}>
          <img
            className={styles.onlineAppointmentCaedChild}
            alt=""
            src="/rectangle-715@2x.png"
          />
          <div className={styles.copyrightText}>
            <div className={styles.copyrightTextChild} />
            <div className={styles.parentCompanyName}>
              <div className={styles.ishaNetralayaWrapper}>
                <div className={styles.ishaNetralaya}>Isha Netralaya</div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.backgroundColorWrapper}>
                  <div className={styles.backgroundColor} />
                </div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
              </div>
            </div>
            <div className={styles.logoColor}>
              <div className={styles.fontFamily}>
                <div
                  className={styles.primaryButtonColor}
                  onClick={onPrimaryButtonColorClick}
                />
                <div className={styles.onlineAppointment}>
                  ONLINE APPOINTMENT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yt} style={yTStyle}>
          <div className={styles.ytChild} />
          <div className={styles.youtubeAndVimeoVideo}>
          <iframe width="350" height="197" src="https://www.youtube.com/embed/vIc_gOIWaTE?si=OPRcb47W-U9CbABH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.backgroundPattern}>
            <div className={styles.whatIsCataract}>
              {whatIsCataractCommonFAQs}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PunebranchTitle;
