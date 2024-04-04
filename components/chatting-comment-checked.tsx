import type { NextPage } from "next";
import styles from "./chatting-comment-checked.module.css";

const ChattingCommentChecked: NextPage = () => {
  return (
    <img
      className={styles.chattingCommentChecked}
      loading="lazy"
      alt=""
      src="/24--chatting--commentchecked@2x.png"
    />
  );
};

export default ChattingCommentChecked;
