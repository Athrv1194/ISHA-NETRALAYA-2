import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  /** Action props */
  onISHANETRALAYATextClick?: () => void;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  onISHANETRALAYATextClick,
}) => {
  return (
    <div className={styles.contactDetailsParent}>
      <div className={styles.contactDetails}>
        <div
          className={styles.ishaNetralaya}
          onClick={onISHANETRALAYATextClick}
        >
          ISHA NETRALAYA
        </div>
        <div className={styles.asOneOf}>
          As one of the leading eye hospitals in the heart of Thane, we take
          pride in our expertise in treating a varied range of eye problems.
        </div>
      </div>
      <div className={styles.copyrightInfo}>
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
  );
};

export default FrameComponent1;
