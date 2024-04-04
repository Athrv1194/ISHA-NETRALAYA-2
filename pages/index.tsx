import type { NextPage } from "next";
import { useCallback } from "react";
import NavBar from "../components/nav-bar";
import OrderedMapNode from "../components/ordered-map-node";
import TernaryNode from "../components/ternary-node";
import BStarTreeNode from "../components/b-star-tree-node";
import ValueTransformer from "../components/value-transformer";
import DataMerger from "../components/data-merger";
import FilterNode from "../components/filter-node";
import BFSAlgorithm from "../components/b-f-s-algorithm";
import Footer1 from "../components/footer";
import styles from "./index.module.css";

const IshaHomePage: NextPage = () => {
  const onREADOURSTORYClick = useCallback(() => {
    
  }, []);

  return (
    <div className={styles.ishaHomePage}>
      <NavBar />
      <img className={styles.osr1Icon} alt="" src="/osr1.svg" />
      <img className={styles.setNodeIcon} alt="" src="/set-node@2x.png" />
      <section className={styles.arrayNode}>
        <img
          className={styles.listNodeIcon}
          loading="lazy"
          alt=""
          src="/rectangle-718@2x.png"
        />
      </section>
      <section className={styles.stackNode}>
        <div className={styles.queueNode}>
          <OrderedMapNode />
          <TernaryNode />
        </div>
      </section>
      <section className={styles.container} />
      <div className={styles.ourVisionaryLeader}>OUR VISIONARY LEADER</div>
      <img className={styles.sirImageIcon} alt="" src="/sir-image@2x.png" />
      <div className={styles.guidingLightInContainer}>
        <p className={styles.guidingLightInEyeCare}>
          <b className={styles.guidingLightIn}>Guiding Light in Eye Care</b>
        </p>
        <p className={styles.blankLine}>
          <span className={styles.blankLine1}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.drSmiteshShah}>
          <span className={styles.drSmiteshShah1}>
            <span>DR. SMITESH SHAH</span>
          </span>
        </p>
        <p className={styles.blankLine2}>
          <span className={styles.blankLine3}>
            <span>&nbsp;</span>
          </span>
        </p>
        <p className={styles.mbbsDoDnbFcp}>
          <span className={styles.mbbsDoDnbFcp1}>
            <span>
              M.B.B.S., D.O., D.N.B., F.C.P.S, F.R.S., F.I.C.O., (London)
            </span>
          </span>
        </p>
        <p className={styles.cataractRetinaSurgeon}>
          <span className={styles.cataractRetinaSurgeon1}>
            <span>{`CATARACT & RETINA SURGEON`}</span>
          </span>
        </p>
      </div>
      <div className={styles.readOurStory} onClick={onREADOURSTORYClick}>
        READ OUR STORY
      </div>
      <BStarTreeNode />
      <ValueTransformer />
      <DataMerger />
      <FilterNode />
      <BFSAlgorithm />
      <Footer1 />
    </div>
  );
};

export default IshaHomePage;
