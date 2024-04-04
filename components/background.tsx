import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./background.module.css";

const Background: NextPage = () => {
  const router = useRouter();

  const onISHATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNetralayaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onIconImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.background}>
      <img
          className={styles.doanTuan3qfqoxgcvmeUnsplashIcon}
          alt=""
          src="/EyeLight.jpg"
          data-scroll-to="doanTuan3QFQOxGCVmEUnsplashImage"
        />
      <header className={styles.iSHAWrapper}>
        <div className={styles.iSHA}>
          <div className={styles.netralaya}>
            <h1 className={styles.isha} onClick={onISHATextClick}>
              ISHA
            </h1>
          </div>
          <h3 className={styles.netralaya1} onClick={onNetralayaTextClick}>
            Netralaya
          </h3>
        </div>
      </header>
      <div className={styles.icon}>
        <img
          className={styles.maskGroupIcon}
          alt=""
          src="/mask-group-12@2x.png"
        />
        <img
          className={styles.icon1}
          loading="lazy"
          alt=""
          src="/icon1@2x.png"
          onClick={onIconImageClick}
        />
      </div>
      <div className={styles.ourStory}>
        <div className={styles.establishedIn}>
          <h1 className={styles.aboutIshaNetralaya}>About Isha Netralaya</h1>
        </div>
        <div className={styles.ishaNetralayaAspires}>
          Isha Netralaya aspires to be a center of excellence in eye-care
          services, clinical research, and education. We envision a future where
          our expertise and innovation contribute to advancements in the field
          of eye care. Our commitment extends beyond treatments, encompassing a
          holistic approach that aligns with our vision for the future.
        </div>
      </div>
    </div>
  );
};

export default Background;
