import type { NextPage } from "next";
import BgNav1 from "../components/bg-nav1";
import MatrixNode from "../components/matrix-node";
import SplitNode from "../components/split-node";
import DataAggregator from "../components/data-aggregator";
import ConditionChecker from "../components/condition-checker";
import InputManager from "../components/input-manager";
import Footer10 from "../components/footer10";
import styles from "./contact-us.module.css";

const ContactUs: NextPage = () => {
  return (
    <div className={styles.contactUs}>
      <div className={styles.conditionalNode} />
      <BgNav1 />
      <div className={styles.conditionalNode1} />
      <MatrixNode />
      <div className={styles.conditionalNode2} />
      <SplitNode />
      <div className={styles.conditionalNode3} />
      <DataAggregator />
      <section className={styles.stateTransition}>
        <div className={styles.errorCorrection}>
          <ConditionChecker />
          <InputManager />
          <div className={styles.graphicDesigner}>
            <div className={styles.layoutEngine}>
              <div className={styles.mon800AmContainer}>
                <ul className={styles.mon800Am830PmTues80}>
                  <li className={styles.mon800Am}>Mon 8:00 AM - 8:30 PM</li>
                  <li className={styles.tues800Am}>Tues 8:00 AM - 8:30 PM</li>
                  <li className={styles.wed800Am}>Wed 8:00 AM - 8:30 PM</li>
                  <li className={styles.thur800Am}>Thur 8:00 AM - 7:00 PM</li>
                  <li className={styles.fri800Am}>Fri 8:00 AM - 8:30 PM</li>
                  <li className={styles.sat800Am}>Sat 8:00 AM - 8:30 PM</li>
                  <li>Sun 8:00 AM - 2:00 PM</li>
                </ul>
              </div>
              <div className={styles.mon800AmContainer1}>
                <ul className={styles.mon800Am830PmTues801}>
                  <li className={styles.mon800Am1}>Mon 8:00 AM - 8:30 PM</li>
                  <li className={styles.tues800Am1}>Tues 8:00 AM - 8:30 PM</li>
                  <li className={styles.wed800Am1}>Wed 8:00 AM - 8:30 PM</li>
                  <li className={styles.thur800Am1}>Thur 8:00 AM - 7:00 PM</li>
                  <li className={styles.fri800Am1}>Fri 8:00 AM - 8:30 PM</li>
                  <li className={styles.sat800Am1}>Sat 8:00 AM - 8:30 PM</li>
                  <li>Sun 8:00 AM - 2:00 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.propertyEditor}>
        <img
          className={styles.styleSetterIcon}
          loading="lazy"
          alt=""
          src="/vector-710.svg"
        />
      </div>
      <Footer10 />
    </div>
  );
};

export default ContactUs;
