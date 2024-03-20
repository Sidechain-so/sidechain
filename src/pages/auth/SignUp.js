import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from "react-router-dom";
import withLayout from "../../components/layout/withLayout";
import company1 from "../../assets/scroll-1-white.svg";
import company2 from "../../assets/scroll-6-white.svg";
import company3 from "../../assets/scroll-3-white.svg";
import company4 from "../../assets/scroll-4-white.svg";
import company5 from "../../assets/scroll-5-white.svg";

import styles from "./SignUp.module.scss";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    telegram: "",
    companyName: "",
    twitter: "",
    password: "",
    confirmPassword: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validatePassword = (password) => {
    const errors = {};

    if (!password.trim()) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (!/(?=.*[a-z])/.test(password)) {
        errors.password = "Password must contain at least one lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(password)) {
        errors.password = "Password must contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(password)) {
        errors.password = "Password must contain at least one digit";
    }

    return errors;
};

const validateFields = () => {
    const errors = {};

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Email is invalid";
    }

    if (!formData.companyName.trim()) {
        errors.companyName = "Company Name is required";
    }

    if (!formData.telegram.trim()) {
      errors.telegram = "Telegram is required";
    }

    if (!formData.telegram.trim()) {
      errors.telegram = "Twitter is required";
    }

    const passwordErrors = validatePassword(formData.password);
    if (Object.keys(passwordErrors).length > 0) {
        errors.password = passwordErrors.password;
    }

    if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const isValid = validateFields();

    if (isValid) {
      try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signUp`, formData);
        setIsLoading(false);
        toast.success("Successfully registered")
        navigate("/signIn");
      } catch (error) {
        toast.error(`Error: ${error.response.data.message}`)
        setIsLoading(false);
        console.error("Error submitting form:", error);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.signupWrap}>
      <div className={styles.wrapper}>
        <div className={styles.formWrap}>
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
          <h2 className={styles.signupTitle}>Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.flexFormGroup}>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email && styles.errorInput}
                />
                {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
              </div>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="telegram">Telegram</label>
                <input
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleInputChange}
                  className={errors.telegram && styles.errorInput}
                />
                {errors.telegram && <span className={styles.errorMessage}>{errors.telegram}</span>}
              </div>
            </div>
            <div className={styles.flexFormGroup}>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="companyName">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className={errors.companyName && styles.errorInput}
                />
                {errors.companyName && <span className={styles.errorMessage}>{errors.companyName}</span>}
              </div>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="twitter">Twitter</label>
                <input
                  type="text"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className={errors.twitter && styles.errorInput}
                />
                {errors.twitter && <span className={styles.errorMessage}>{errors.twitter}</span>}
              </div>
            </div>
            <div className={styles.flexFormGroup}>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password && styles.errorInput}
                />
                {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
              </div>
              <div className={styles.formFullWidthInput}>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword && styles.errorInput}
                />
                {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
              </div>
            </div>
            <button className={`${styles.registerButton}`} type="submit">
              {!isLoading 
                ? "Register"
                : (
                    <ClipLoader
                      color={"#fff"}
                      loading={isLoading}
                      size={14}
                      aria-label="Loading Spinner"
                    />
                  )
              }
            </button>
            <div className={styles.text}>
              <h3>
                Already have an account? <Link to="/signIn">Login now</Link>
              </h3>
            </div>
          </form>
        </div>
      </div>
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
    </div>
  );
};

export default SignUpPage;
