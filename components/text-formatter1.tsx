import type { NextPage } from "next";
import ChattingCommentChecked from "./chatting-comment-checked";
import styles from "./text-formatter1.module.css";

const TextFormatter1: NextPage = () => {
  return (
    <div className={styles.textFormatter}>
      <div className={styles.imageProcessor}>
        <div className={styles.lineGenerator}>
          <div className={styles.rectangleBuilder}>
            <div className={styles.audioNode} />
          </div>
          <div className={styles.videoNode}>
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

export default TextFormatter1;
