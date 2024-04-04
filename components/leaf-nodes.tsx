import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./leaf-nodes.module.css";

export type LeafNodesType = {
  femtosecondLASIKAtIshaNet?: string;
  alsoKnownAsBladeFreeLASIK?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const LeafNodes: NextPage<LeafNodesType> = ({
  femtosecondLASIKAtIshaNet,
  alsoKnownAsBladeFreeLASIK,
  propPadding,
  propGap,
  propWidth,
  propHeight,
  propHeight1,
}) => {
  const leafNodesStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const containerNodesStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const connectionNodesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const femtosecondLASIKAtStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={styles.leafNodes} style={leafNodesStyle}>
      <div className={styles.containerNodes} style={containerNodesStyle}>
        <div className={styles.connectionNodes} style={connectionNodesStyle}>
          <h2
            className={styles.femtosecondLasikAt}
            style={femtosecondLASIKAtStyle}
          >
            {femtosecondLASIKAtIshaNet}
          </h2>
        </div>
        <div className={styles.alsoKnownAsContainer}>
          <ul className={styles.alsoKnownAsBladeFreeLasik}>
            <li>{alsoKnownAsBladeFreeLASIK}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeafNodes;
