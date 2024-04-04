import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./header-title-form.module.css";

export type HeaderTitleFormType = {
  /** Style props */
  ishaLabelWidth?: CSSProperties["width"];
  ishaLabelPadding?: CSSProperties["padding"];
  ishaLabelAlignSelf?: CSSProperties["alignSelf"];

  /** Action props */
  onISHATextClick?: () => void;
  onNetralayaTextClick?: () => void;
};

const HeaderTitleForm: NextPage<HeaderTitleFormType> = ({
  ishaLabelWidth,
  ishaLabelPadding,
  ishaLabelAlignSelf,
  onISHATextClick,
  onNetralayaTextClick,
}) => {
  const frameHeaderStyle: CSSProperties = useMemo(() => {
    return {
      width: ishaLabelWidth,
      padding: ishaLabelPadding,
      alignSelf: ishaLabelAlignSelf,
    };
  }, [ishaLabelWidth, ishaLabelPadding, ishaLabelAlignSelf]);

  return (
    <header className={styles.frameWrapper} style={frameHeaderStyle}>
      <div className={styles.ishaLabelParent}>
        <div className={styles.ishaLabel}>
          <h1 className={styles.isha} onClick={onISHATextClick}>
            ISHA
          </h1>
        </div>
        <h2 className={styles.netralaya} onClick={onNetralayaTextClick}>
          Netralaya
        </h2>
      </div>
    </header>
  );
};

export default HeaderTitleForm;
