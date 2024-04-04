import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import styles from "./nav-bar.module.css";

const data = [

  { name: "About Us", Link: "/about-you" },
  { name: "Die Chart", Link: "/diet-chart" },
  {
    name: "Contact Us",
    Link: "/contact-us",
  },
  {
    name: "Our Doctors",
    Link: "/best-eye-doctors-in-maharashtr",
  },
  {
    name: "Corneal Treatment",
    Link: "/corneal-treatment",
  },
]

const NavBar: NextPage = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);

  const onIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onISHATextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onNetralayaTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSelfRegistrationClick = useCallback(() => {
    router.push("/s-e-l-f-r-e-g-i-s-t-r-a-t-i-o-n");
  }, [router]);

  const onOnlineAppointmentTextClick = useCallback(() => {
    router.push("/book-an-appointment");
  }, [router]);

  return (
    <header className={styles.navbar}>
      {/* <div className={styles.wrapperLeafNode}>
        <img className={styles.leafNodeIcon} alt="" src="/leaf-node@2x.png" />
      </div> */}
      <div className={styles.navbarChild} />
      <div className={styles.connectionNode}>
        <div onClick={() => setActive(!active)}> 
          <div className={active ? styles.activeHamburger : styles.hamburber}/>
        </div>
        <div className={active ? styles.activeSideNav : styles.sideNav}>
          <ul className={styles.ul}>
            {data.map((item, i) => (
              <li key={i} style={{paddingBottom:"20px"}}>
                <a href={item.Link} className={styles.a1}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <img
          className={styles.icon}
          loading="lazy"
          alt=""
          src="/icon3.svg"
          onClick={onIconClick}
        />
        <div className={styles.ancestorNode}>
          <div className={styles.rootNode}>
            <h1 className={styles.isha} onClick={onISHATextClick}>
              ISHA
            </h1>
          </div>
          <h3 className={styles.netralaya} onClick={onNetralayaTextClick}>
            Netralaya
          </h3>
        </div>
        <img
          className={styles.fileNoteText}
          loading="lazy"
          alt=""
          src="/24--file--notetext1@2x.png"
        />
        <div className={styles.containerNode}>
          <div
            className={styles.selfRegistration}
            onClick={onSelfRegistrationClick}
          >{`Self Registration | `}</div>
          <div
            className={styles.onlineAppointment}
            onClick={onOnlineAppointmentTextClick}
          >{`Online Appointment `}</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
