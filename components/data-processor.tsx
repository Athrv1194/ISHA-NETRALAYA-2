import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./data-processor.module.css";

export type DataProcessorType = {
  timerNode?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const DataProcessor: NextPage<DataProcessorType> = ({
  timerNode,
  propMinWidth,
}) => {
  const stackNodeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.dataProcessor}>
      <div className={styles.linkCollector}>
        <div className={styles.textParser}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-16@2x.png"
          />
        </div>
        <div className={styles.stackNode} style={stackNodeStyle}>
          <div className={styles.frameContainer}>
            <div className={styles.giveUsA}>Give us a call</div>
          </div>
          <div className={styles.timerNode}>{timerNode}</div>
        </div>
      </div>
    </div>
  );
};

export default DataProcessor;
