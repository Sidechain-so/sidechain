import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "../Companies.module.scss";

const CompanyForm = ({ 
  setCompanies, 
  setCompanyData,
  initialData, 
  action, 
  companyId
}) => {  
  console.log(initialData)
  const defaultStateData = {
    companyName: initialData?.companyName || "",
    companyDesc: initialData?.companyDesc || "",
    companyImage: "",
    companyAvatar: "",
    aboutUs: initialData?.aboutUs || "",
    total: initialData?.fundRaised?.total || "",
    stage: initialData?.fundRaised?.stage || "" ,
    websiteLink: initialData?.overview?.websiteLink || "",
    size: initialData?.overview?.size || "",
    hq: initialData?.overview?.hq || "",
    type: initialData?.overview?.type || "",
    xLink: initialData?.usefulLinks?.xLink || "",
    linkedIn: initialData?.usefulLinks?.linkedIn || ""
  }

  const [formData, setFormData] = useState(initialData ? defaultStateData : {});

  const [companyImage, setCompanyImage] = useState();
  const [companyAvatar, setCompanyAvatar] = useState();
  
  const companyImageRef = useRef(null);
  const companyAvatarRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (e.target === companyImageRef.current || e.target === companyAvatarRef.current) {
        return;
    }

    const resultBody = {
        ...formData,
        companyImage: JSON.stringify(companyImage),
        companyAvatar: JSON.stringify(companyAvatar)
    }

    if (action === "create") {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/companies`, resultBody)
          .then(({ data: { companyId }}) => {
              setCompanies(prev => [
                  ...prev,
                  {
                      _id: companyId,
                      companyName: formData.companyName
                  }
              ])
          })
    } else {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/companies/${companyId}`, resultBody)
          // .then(({ data }) => {
          //   console.log(data)
          //   // setCompanyData(result)
          // })
    }
  };

  const inputFileHandler = async (e, type) => {
    e.preventDefault();

    const { files } = e.target;
    if (!files.length) return;

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = async () => {
      type === 'image'
        ? setCompanyImage(reader.result)
        : setCompanyAvatar(reader.result)
    };
  };

  return (
    <div className={styles.mainColumn}>
      <h2 className={styles.companiesTitle}>Create a company:</h2>
      <form className={styles.form}>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="companyName">Company Name</label>
          <input 
            type="text" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="companyDesc">Description</label>
          <input 
            type="text" 
            name="companyDesc" 
            value={formData.companyDesc} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="companyImage">Company Image</label>
          <button onClick={(e) => {
            e.preventDefault();
            companyImageRef.current.click()
          }}>
            Upload
          </button>
          {companyImage && <img className={styles.companyImage} src={companyImage} alt="" />}
          <input 
            type="file" 
            name="companyImage" 
            style={{ display: 'none' }}
            inputprops={{ accept: 'image/*' }}
            value={formData.companyImage} 
            onChange={e => inputFileHandler(e, "image")}
            ref={companyImageRef} 
            accept="image/*"
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="companyAvatar">Company Avatar</label>
          <button onClick={(e) => {
            e.preventDefault();
            companyAvatarRef.current.click()
          }}>
            Upload
          </button>
          {companyAvatar && <img src={companyAvatar} className={styles.companyImage} width="50px" alt="Company Avatar" />}
          <input 
            type="file" 
            name="companyAvatar" 
            style={{ display: 'none' }}
            inputprops={{ accept: 'image/*' }}
            value={formData.companyAvatar} 
            onChange={e => inputFileHandler(e, "avatar")}
            ref={companyAvatarRef} 
            accept="image/*"
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="total">Total Fund Raised</label>
          <input 
            type="text" 
            name="total" 
            value={formData.total} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="stage">Fund Raised Stage</label>
          <input 
            type="text" 
            name="stage" 
            value={formData.stage} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="websiteLink">Website Link</label>
          <input 
            type="text" 
            name="websiteLink" 
            value={formData.websiteLink} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="size">Size</label>
          <input 
            type="text" 
            name="size" 
            value={formData.size} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="hq">Headquarters</label>
          <input 
            type="text" 
            name="hq" 
            value={formData.hq} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="type">Type</label>
          <input 
            type="text" 
            name="type" 
            value={formData.type} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="xLink">XLink</label>
          <input 
            type="text" 
            name="xLink" 
            value={formData.xLink} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="linkedIn">LinkedIn</label>
          <input 
            type="text" 
            name="linkedIn" 
            value={formData.linkedIn} 
            onChange={handleInputChange} 
          />
        </div>
        <div className={styles.formFullWidthInput}>
          <label htmlFor="aboutUs">About Us</label>
          <input
            type="text"
            name="aboutUs"
            value={formData.aboutUs}
            onChange={handleInputChange}
          />
        </div>
        <button className={`${styles.formSubmit} ${styles.btn}`} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
