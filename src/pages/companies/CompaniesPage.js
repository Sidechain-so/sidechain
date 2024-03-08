import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import withLayout from "../../components/layout/withLayout";
import { FaTimes } from "react-icons/fa";
import CompanyForm from "./companyForm/CompanyForm";
import styles from "./Companies.module.scss";

const CompaniesPage = () => {
  const [companies, setCompanies] = useState([]);  
  
  useEffect(() => {
    const getCompaniesFromServer = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/companies`)
        .then(({ data }) => {
          setCompanies(data);
        })
    };

    getCompaniesFromServer();
  }, []);

  const handleDeleteCompany = async (e, companyId) => {
    e.preventDefault();

    console.log("Deleting company with ID:", companyId);
    
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/companies/${companyId}`)
      .then(() => {
        setCompanies(prevCompanies => prevCompanies.filter(company => company._id !== companyId));
      })
      .catch(error => {
        console.error("Error deleting company:", error);
      });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.mainColumn}>
        <h2 className={styles.companiesTitle}>Companies List:</h2>
        <ul className={styles.companiesList}>
          {companies.length > 0 && companies.map((company) => {
            return (
              <li key={company._id} className={styles.companiesItem}>
                <Link to={company._id} className={styles.companyLink}>{company.companyName}</Link>
                <FaTimes
                  className={styles.deleteIcon}
                  onClick={(e) => handleDeleteCompany(e, company._id)}
                />
              </li>
            )
          })}
        </ul>
      </div>
      <CompanyForm setCompanies={setCompanies} action={"create"} />    
    </div>
  );
};

export default withLayout(CompaniesPage, { isForHome: true });
