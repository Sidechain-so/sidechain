import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import withLayout from "../../components/layout/withLayout";
import company1 from "../../assets/scroll-1.svg";
import company2 from "../../assets/scroll-6.png";
import company3 from "../../assets/scroll-3.svg";
import company4 from "../../assets/scroll-4.svg";
import company5 from "../../assets/scroll-5.png";
import styles from "./HirePage.module.scss";

const HirePage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    companyName: "",
    company: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/test`, formData);
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <header className={`${styles.applyHeader} ${styles.pageWidth}`}>
        <h1 className={styles.sectionTitle}>
          <span className={styles.titleUnderline}>
            g<span className={styles.titleNeue}>m</span>
          </span>{" "}
          let’s find you talent
        </h1>
        <p className={`${styles.applyHeaderDesc} ${styles.sectionDesc}`}>
          Find the best blockchain engineers for your project with our rigorous job matching service. Our vetting process ensures
          you get the most skilled and reliable talent in the industry.
        </p>
      </header>

      <section className={`${styles.formWrapper} ${styles.pageWidth} ${styles.sectionMargin}`}>
        <form id={styles.hireForm} className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formFullWidthInput}>
            <label htmlFor="firstName">Full Name</label>
            <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleInputChange} />
          </div>

          <div className={styles.formFullWidthInput}>
            <label htmlFor="lastName">Telegram</label>
            <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleInputChange} />
          </div>

          <div className={styles.formFullWidthInput}>
            <label htmlFor="emailAddress">Email Address</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
          </div>

          <div className={styles.formFullWidthInput}>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleInputChange} />
          </div>

          <div className={styles.formFullWidthInput}>
            <label htmlFor="company">Website</label>
            <input type="text" name="company" id="company" value={formData.company} onChange={handleInputChange} />
          </div>

          <div className={styles.formFullWidthInput}>
            <label htmlFor="role">How did you find out about us?</label>
            <input type="text" name="role" id="role" value={formData.role} onChange={handleInputChange} />
          </div>

          <button className={`${styles.formSubmit} ${styles.btn}`} type="submit">
            Submit
          </button>
        </form>

        <div className={styles.companiesList}>
          <p className={styles.companiesListTitle}>
            Join Companies <br /> Backed By
          </p>

          <div className={styles.companiesListImages}>
            <div>
              <img src={company1} alt="scroll1" />
            </div>
            <div>
              <img src={company2} alt="scroll6" />
            </div>
            <div>
              <img src={company3} alt="scroll3" />
            </div>
            <div>
              <img src={company4} alt="scroll4" />
            </div>
            <div>
              <img src={company5} alt="scroll5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withLayout(HirePage, { isForHome: true });
