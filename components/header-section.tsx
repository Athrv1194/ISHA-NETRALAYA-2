import type { NextPage } from "next";
import styles from "./header-section.module.css";

const HeaderSection: NextPage = () => {
  return (
    <section className={styles.headerSection}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.dietChartWrapper}>
            <h1 className={styles.dietChart}>Diet Chart</h1>
          </div>
          <div className={styles.downloadPdfBtn}>
            <img
              className={styles.image28Icon}
              loading="lazy"
              alt=""
              src="/image-28@2x.png"
            />
            <img
              className={styles.image29Icon}
              loading="lazy"
              alt=""
              src="/image-29@2x.png"
            />
          </div>
        </div>
        <div className={styles.frameAmbernathWrapper}>
          <button className={styles.frameAmbernath}>
            <a className={styles.a} href="https://drive.google.com/drive/folders/1VmPl9VPEuMZFwghM5puOfh3pETTcexkT">
             <div className={styles.frameAmbernathChild} />
             <div className={styles.downloadPdf}>DOWNLOAD PDF</div>
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
