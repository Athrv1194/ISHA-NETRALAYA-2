import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./heap.module.css";

const Heap: NextPage = () => {
  const router = useRouter();

  const onSetNodeClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <section className={styles.heap}>
      <div className={styles.treeNode}>
        <div className={styles.onlineAppointmentCard}>
          <img
            className={styles.onlineAppointmentCardChild}
            alt=""
            src="/rectangle-715@2x.png"
          />
          <div className={styles.algorithmNode}>
            <div className={styles.algorithmNodeChild} />
            <div className={styles.patternNode}>
              <div className={styles.sequenceNode}>
                <div className={styles.ishaNetralaya}>Isha Netralaya</div>
              </div>
              <div className={styles.vectorNode}>
                <div className={styles.scalarNode}>
                  <div className={styles.arrayNode} />
                </div>
                <div className={styles.asOneOf}>
                  As one of the leading eye hospitals in the heart of Thane, we
                  take pride in our expertise in treating a varied range of eye
                  problems.
                </div>
              </div>
            </div>
            <div className={styles.dictionaryNode}>
              <div className={styles.mapNode}>
                <div className={styles.setNode} onClick={onSetNodeClick} />
                <div className={styles.onlineAppointment}>
                  ONLINE APPOINTMENT
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yt}>
          <div className={styles.ytChild} />
          <div className={styles.youtubeAndVimeoVideo} >
          <iframe width="350" height="197" src="https://www.youtube.com/embed/f-YkzgfgN2k?si=Gqw6yoRRpouBrpy_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className={styles.queryNode}>
            <div className={styles.heresHowSurgeons}>
              Here’s how surgeons perform LASIK surgery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heap;
