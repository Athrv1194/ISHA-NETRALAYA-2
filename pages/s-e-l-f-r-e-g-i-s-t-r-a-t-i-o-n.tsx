import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeaderTitleForm from "../components/header-title-form";
import styles from "./s-e-l-f-r-e-g-i-s-t-r-a-t-i-o-n.module.css";
import { useCallback, useState } from "react";

const SELFREGISTRATION: NextPage = () => {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  
  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBranch(event.target.value);
  };

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
    <div className={styles.selfRegistration}>
      <footer className={styles.frameParent}>
        <HeaderTitleForm
          onISHATextClick={onISHATextClick}
          onNetralayaTextClick={onNetralayaTextClick}
        />
        <main className={styles.backgroundParent}>
          <img className={styles.backgroundIcon} alt="" src="/background.svg" />
          <section className={styles.frameChild} />
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon.svg"
            onClick={onIconClick}
          />
          <div className={styles.maskGroupMask}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group2@2x.png"
            />
            <img
              className={styles.maskGroupIcon1}
              alt=""
              src="/mask-group2@2x.png"
            />
          </div>
        </main>
        <div className={styles.selfRegistrationParent}>
          <h1 className={styles.selfRegistration1}>SELF REGISTRATION</h1>
          <div className={styles.frameVectorArrows}>
            <div className={styles.emailInput}>
              <div className={styles.selectBranchFrame}>
                <div className={styles.registerText}>
                  <div className={styles.vectorFieldArrows}>
                    <div className={styles.frameLastName}>
                      <img
                        className={styles.registrationFormIcon}
                        alt=""
                        src="/registration-form.svg"
                      />
                      <input
                        className={styles.maskGroupIcon2}
                        alt=""
                        src="/mask-group-2@2x.png"
                        value={firstName}
                        placeholder="First Name"
                        onChange={handleFirstNameChange}
                      />
                    </div>
                  </div>
                  <div className={styles.vectorInput}>
                    <img
                      className={styles.registerLabelIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                    <input
                       className={styles.lastName}
                       value={lastName}
                       placeholder="Last Name"
                       onChange={handleLastNameChange}
                      />
                  </div>
                </div>
                <div className={styles.vectorFrameArrows}>
                  <select 
                   className={styles.selectBranch}
                   value={branch}
                   onChange={handleBranchChange}>
                    <option value="">Select Branch</option>
                    <option value="branch1">Branch 1</option>
                    <option value="branch2">Branch 2</option>
                  </select>
                </div>
                <div className={styles.vectorFrameArrows1}>
                  <div className={styles.maskGroupEmailInputParent}>
                    <img
                      className={styles.maskGroupEmailInput}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <input
                      className={styles.emailIcon}
                      alt=""
                      src="/email@2x.png"
                      value={email}
                      placeholder="Email Address"
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className={styles.vectorFrameArrows2}>
                  <div className={styles.vectorParent}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-2.svg"
                    />
                    <img
                      className={styles.maskGroupIcon3}
                      alt=""
                      src="/mask-group-3@2x.png"
                    />
                    <input
                      className={styles.maskGroupIcon4}
                      alt=""
                      src="/mask-group-4@2x.png"
                      value={password}
                      placeholder="Password"
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>
              </div>
              <button className={styles.selfRegistrationSection}>
                <img
                  className={styles.inputFieldsFrame}
                  alt=""
                  src="/vector-5.svg"
                />
                <div className={styles.register}>Register</div>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SELFREGISTRATION;  