import type { NextPage } from "next";
import styles from "./form-frame.module.css";
import { useState } from "react";

const FormFrame: NextPage = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [branch, setBranch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };
  
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };
  
  const handleBranchChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBranch(event.target.value);
  };
  
  const handleSpecialtyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecialty(event.target.value);
  };
  
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  
  const handleAppointmentDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentDate(event.target.value);
  };
  
  const handleAppointmentTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAppointmentTime(event.target.value);
  };

  return (
    <form className={styles.formFrame}>
      <div className={styles.bookingFrame}>
        <div className={styles.firstNameParent}>
          <div className={styles.firstName}>First Name</div>
          <div className={styles.firstNameLabel}>
            <img
              className={styles.vectorIcon}
              alt=""
              src="/registration-form.svg"
            />
            <input
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-1@2x.png"
              value={firstName}
              placeholder="First Name"
              onChange={handleFirstNameChange}
            />
          </div>
        </div>
        <div className={styles.firstNameInput}>
          <img className={styles.vectorIcon1} alt="" src="/vector-1.svg" />
          <input 
            className={styles.lastName}
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
      <div className={styles.backgroundFrame}>
        <img className={styles.branchVectorArrow} alt="" src="/vector-2.svg" />
        <select className={styles.selectBranch} value={branch} onChange={handleBranchChange} >
          <option value="">Select Branch</option>
          <option value="branch1">KALYAN</option>
          <option value="branch2">THANE (DEV CORPORA)</option>
          <option value="branch3">AMBERNATH</option>
          <option value="branch4">PUNE</option>
          <option value="branch5">THANE (CORAL SQUARE)</option>
        </select>
      </div>
      <div className={styles.emailInput}>
        <div className={styles.branchFrame}>
          <div className={styles.branchSelector}>
            <img
              className={styles.arrowsChevronBottom1}
              alt=""
              src="/24--arrows--chevronbottom.svg"
            />
          </div>
          <select className={styles.selectSpecialties} value={specialty}  onChange={handleSpecialtyChange}>
            <option value=" ">Select Specialties</option>
            <option value="specialty1">SMILE Surgery</option>
            <option value="specialty2">Pediatric Ophthalmology</option>
            <option value="specialty3">LASIK Surgery</option>
            <option value="specialty4">Eye Nutrition</option>
            <option value="specialty5">Digital Eye Strain</option>
            <option value="specialty6">Detailed Eye Checkup</option>
            <option value="specialty7">Contoura Vision</option>
          </select>
        </div>
      </div>
      <div className={styles.eMAILFrame}>
        <div className={styles.backgroundMaskGroup}>
          <div className={styles.appointmentDetailsFrame}>
            <img
              className={styles.vectorArrowTime}
              alt=""
              src="/vector-2.svg"
            />
            <img className={styles.emailIcon} alt="" src="/email@2x.png" />
          </div>
          <input
            className={styles.emailAddress}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className={styles.datePicker}>
        <div className={styles.appointmentDetailsLabel}>
          <div className={styles.appointmentDetails}>
            <input
              className={styles.appointmentDate}
              type="date"
              value={appointmentDate}
              placeholder="Appointment Date"
              onChange={handleAppointmentDateChange}
            />
          </div>
          <div className={styles.appointmentDetails1}>  
            <input
              className={styles.appointmentTime}
              type="time"
              value={appointmentTime}
              placeholder="Appointment Time"
              onChange={handleAppointmentTimeChange}
            />
          </div>
        </div>
      </div>
      <button className={styles.appointmentForm}>
        <img className={styles.submitButtonIcon} alt="" src="/vector-5.svg" />
        <div className={styles.submit}>Submit</div>
      </button>
    </form>
  );
};

export default FormFrame;