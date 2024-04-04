import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import HeaderTitleForm from "../components/header-title-form";
import FormFrame from "../components/form-frame";
import styles from "./book-an-appointment.module.css";

const BookAnAppointment: NextPage = () => {
  const router = useRouter();

  const onISHATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNetralayaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.bookAnAppointment}>
      <main className={styles.appointmentComponent}>
        <HeaderTitleForm
          ishaLabelWidth="unset"
          ishaLabelPadding="0px var(--padding-32xl)"
          ishaLabelAlignSelf="stretch"
          onISHATextClick={onISHATextClick}
          onNetralayaTextClick={onNetralayaTextClick}
        />
        <div className={styles.mainFrame}>
          <h1 className={styles.bookAnAppointment1}>Book An Appointment</h1>
          <div className={styles.bookingLabel}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background.svg"
            />
            <div className={styles.rectangleShape} />
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group2@2x.png"
            />
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
              onClick={onIconClick}
            />
          </div>
        </div>
        <div className={styles.netralayaText}>
          <FormFrame />
        </div>
      </main>
    </div>
  );
};

export default BookAnAppointment;
