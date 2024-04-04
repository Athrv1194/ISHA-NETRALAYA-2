import type { NextPage } from "next";
import ChattingCommentChecked from "./chatting-comment-checked";
import styles from "./text-formatter.module.css";

const TextFormatter: NextPage = () => {
  return (
    <div className={styles.textFormatter}>
      <div className={styles.imageProcessor}>
        <div className={styles.lineGenerator}>
          <div className={styles.rectangleBuilder}>
            <div className={styles.caseNode} />
          </div>
          <div className={styles.ellipseConstructor}>
            <ChattingCommentChecked />
          </div>
          <div className={styles.polygonMaker}>
            <div className={styles.bookAnAppointment}>Book An Appointment</div>
          </div>
        </div>
      </div>
      <b className={styles.workingHours}>WORKING HOURS</b>
    </div>
  );
};

export default TextFormatter;
