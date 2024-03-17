import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import withLayout from "../../components/layout/withLayout";
import Cookies from "js-cookie";
import company1 from "../../assets/scroll-1-white.svg";
import company2 from "../../assets/scroll-6-white.svg";
import company3 from "../../assets/scroll-3-white.svg";
import company4 from "../../assets/scroll-4-white.svg";
import company5 from "../../assets/scroll-5-white.svg";

import styles from "./SignUp.module.scss";

const SignInPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateFields = () => {
    const errors = {};

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateFields();

    if (isValid) {
      try {
        const { data: { token } }= await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/signIn`, formData);
        
        const expiresAt = new Date();
        expiresAt.setHours(expiresAt.getHours() + 1);
        
        Cookies.set("token", token, { expires: expiresAt });
        navigate("/");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className={styles.signupWrap}>
      <div className={styles.wrapper}>
        <div className={styles.formWrap}>
          <h2 className={styles.signupTitle}>Login</h2>
          <form onSubmit={handleSubmit}>
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
            <button className={`${styles.registerButton}`} type="submit">
              Login
            </button>
            <div className={styles.text}>
              <h3>
                Don't have an account? <Link to="/signUp">Register now</Link>
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

export default withLayout(SignInPage, { isForHome: false });
