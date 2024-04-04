import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./b-e-c-o-m-e-a-m-e-m-b-e-r7.module.css";

const BECOMEAMEMBER7: NextPage = () => {
  const router = useRouter();

  const onDataFrameTransformerClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.becomeAMember}>
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src="/mask-group-14@2x.png"
      />
      <div className={styles.predictionEngine}>
        <h1 className={styles.ifYouHave}>
          If You Have Any Questions We Are Here!!
        </h1>
        <div className={styles.modelEvaluator}>
          <div className={styles.thaneCorelSquareContainer}>
            <p className={styles.thaneCorelSquare022258}>
              @Thane (Corel Square) – 
              <a className={styles.a} href="tel: +022-25899922" target="_blank">
                <span className={styles.span}>022-25899922</span>
              </a>
               | 
              <a className={styles.a1} href="tel:+25892255" target="_blank">
                <span className={styles.span1}>25892255</span>
              </a>
               | 
              <a className={styles.a2} href="tel:+7738897518" target="_blank">
                <span className={styles.span2}>7738897518</span>
              </a>
               | 
              <a className={styles.a3} href="tel:+7304485625" target="_blank">
                <span className={styles.span3}>7304485625</span>
              </a>
            </p>
            <p className={styles.thaneDevCorpora0224974}>
              @Thane (Dev Corpora) – 
              <a
                className={styles.a4}
                href="tel: +022 49746854"
                target="_blank"
              >
                <span className={styles.span4}>022-49746854</span>
              </a>
            </p>
            <p className={styles.kalyanw773889751402516}>
              @Kalyan(W) – 
              <a className={styles.a5} href="tel: +7738897514" target="_blank">
                <span className={styles.span5}>7738897514</span>
              </a>
               | 
              <a className={styles.a6} href="tel: +02516760600" target="_blank">
                <span className={styles.span6}>02516760600</span>
              </a>
            </p>
            <p className={styles.ambernathE8976746053}>
              @Ambernath (E)- 
              <a className={styles.a7} href="tel: +8976746053" target="_blank">
                <span className={styles.span7}>8976746053</span>
              </a>
            </p>
            <p className={styles.pune09172725903}>
              @Pune – 
              <a className={styles.a8} href="tel: +09172725903" target="_blank">
                <span className={styles.span8}>09172725903</span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.visualizer}>
        <div className={styles.progressTracker}>
          <div
            className={styles.dataFrameTransformer}
            onClick={onDataFrameTransformerClick}
          />
          <div className={styles.onlineAppointment}>ONLINE APPOINTMENT</div>
        </div>
      </div>
    </section>
  );
};

export default BECOMEAMEMBER7;
