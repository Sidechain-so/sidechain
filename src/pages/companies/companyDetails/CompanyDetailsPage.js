import React, { useState, useEffect } from "react";
import axios from "axios";
import withLayout from "../../../components/layout/withLayout";
import { Link, useParams } from "react-router-dom";
import CompanyForm from "../companyForm/CompanyForm";
import twitterIcon from "../../../assets/twitter.png";
import linkedinIcon from "../../../assets/linkedin.png";
import styles from "../Companies.module.scss";

const dumpTeamData = [{
  teamAvatar: null,
  fullName: "Enrique lucas",
  position: "CEO"
}, {
  teamAvatar: null,
  fullName: "Manuel Nunez Jay",
  position: "CTO"
}]

const dumpJobsData = [{
  jobTitle: "Ethereum Blockchain Engineer",
  tags: [
    "REMOTE",
    "WORLDWIDE",
    "FULL-TIME"
  ],
  salary: "$90K-$110K",
  jobId: ""
}, {
  jobTitle: "Forward Deployment Engineer",
  tags: [
    "ON-SITE",
    "PORTUGAL",
    "PART-TIME"
  ],
  salary: "$70K-$80K",
  jobId: ""
}]

const dumpBountiesData = [{
  bountyTitle: "Product Feedback and Analysis",
  tags: [
    "RESEARCH",
    "BUGS",
    "FEEDBACK"
  ],
  salary: "$900",
  bountyId: ""
}, {
  bountyTitle: "Mainnet Beta Testing",
  tags: [
    "ANALYSIS",
    "MAINNET",
    "TESTING"
  ],
  salary: "$900",
  bountyId: ""
}]


const CompanyDetailsPage = () => {
  const { companyId } = useParams();
  
  const [companyData, setCompanyData] = useState({});  
  
  useEffect(() => {
    const getCompaniesFromServer = async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/companies/${companyId}`)
        .then(({ data }) => {
            setCompanyData(data);
        })
    };

    getCompaniesFromServer();
  }, [companyId]);

  console.log(companyData)

  // const initialData = {
  //   aboutUs: companyData.aboutUs,
  //   bounties: companyData.bounties,
  //   companyAvatar: companyData.companyAvatar,
  //   companyDesc: companyData.companyDesc,
  //   companyImage: companyData.companyImage,
  //   companyName: companyData.companyName,
  //   companyUId: companyData.companyUId,
  //   fundRaised: companyData.fundRaised,
  //   jobs: companyData.jobs,
  //   overview: companyData.overview,
  //   team: companyData.team,
  //   usefulLinks : companyData.usefulLinks,
  // }
console.log(companyData)
  return (
   <div className={styles.mainWrapper}>
      {companyData 
        ? (
          <>
            <div className={styles.companyImageWrap}>
              <img 
                src={companyData?.companyImage && companyData?.companyImage.replace(/^"|"$/g, '')} 
                className={styles.companyImage}
                alt="CompanyImage"  
              />
            </div>
            <div className={styles.companyMainContent}>
              <div className={styles.firstContentColumn}>
                <div className={styles.generalCompanyInfoWrap}>
                  <div className={styles.companyLogoWrap}>
                    <img 
                      src={companyData?.companyAvatar && companyData?.companyAvatar.replace(/^"|"$/g, '')} 
                      className={styles.companyAvatar}
                      alt="CompanyAvatar"  
                    />
                    <span className={styles.companyName}>{companyData?.companyName}</span>
                  </div>
                  <div className={styles.companyDesc}>{companyData?.companyDesc}</div>
                  <div className={styles.companyLinksWrap}>
                    <a href={companyData?.usefulLinks?.xLink}>
                      <img 
                        className={styles.companyLink}
                        src={twitterIcon}
                      />
                    </a>
                    <a href={companyData?.usefulLinks?.linkedIn}>
                      <img 
                        className={styles.companyLink} 
                        src={linkedinIcon}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.secondContentColumn}>
                <div className={styles.owerviewContentWrap}>
                  <div className={styles.owerviewContentTitle}>Overview</div>
                  <div className={styles.owerviewContent}>
                    <div className={styles.owerviewItemRow}>
                      <div className={styles.owerviewItem}>Website</div>
                      <div className={styles.owerviewItemBold}>{companyData?.overview?.websiteLink}</div>
                    </div>
                    <div className={styles.owerviewItemRow}>
                      <div className={styles.owerviewItem}>Size</div>
                      <div className={styles.owerviewItemBold}>{companyData?.overview?.size}</div>
                    </div>
                    <div className={styles.owerviewItemRow}>
                      <div className={styles.owerviewItem}>HQ</div>
                      <div className={styles.owerviewItemBold}>{companyData?.overview?.hq}</div>
                    </div>
                    <div className={styles.owerviewItemRow}>
                      <div className={styles.owerviewItem}>Type</div>
                      <div className={styles.owerviewItemBold}>{companyData?.overview?.type}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.companyMainContent}>
              <div className={styles.firstContentColumn}>
                <div className={styles.aboutWrap}>
                  <div className={styles.aboutTitleWrap}>
                    <span className={styles.aboutTitle}>About</span>
                    <span className={styles.aboutTitleLine}></span>
                  </div>
                  <div className={styles.aboutText}>
                    {companyData?.aboutUs}
                  </div>
                </div>
              </div>
              <div className={`${styles.secondContentColumn} ${styles.flexWrap}`}>
                <div className={styles.teamContainer}>
                  <div className={styles.teamContentTitle}>Team</div>
                  {dumpTeamData && dumpTeamData.map((member) => {
                    return (
                      <div className={styles.teamMemberWrap}>
                        <img 
                          src={member?.teamAvatar} 
                          alt="member"
                          className={styles.teamMemberAvatar}  
                        />
                        <div className={styles.teamMemberName}>{member.fullName}</div>
                        <div className={styles.teamMemberPosition}>{member.position}</div>
                      </div>
                    )
                  })}
                </div>
                <div className={styles.fundingContainer}>
                  <div className={styles.fundingContentTitle}>Funding Raised</div>
                  {companyData?.fundRaised && (
                    <div>
                      <div className={styles.fundingWrap}>
                        <div className={styles.fundingLabel}>Total:</div>
                        <div className={styles.fundingValue}>{companyData?.fundRaised?.total}</div>
                      </div>
                      <div className={styles.fundingWrap}>
                        <div className={styles.fundingLabel}>Stage:</div>
                        <div className={styles.fundingValue}>{companyData?.fundRaised?.stage}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.jobsSection}>
              <div className={styles.jobSectionWrap}>
                <div className={styles.aboutTitleWrap}>
                  <span className={styles.aboutTitle}>Jobs</span>
                  <span className={styles.aboutTitleLine} style={{ width: '6rem' }}></span>
                </div>
                <Link to="" className={styles.viewAll}>View All →</Link>
              </div>
              {dumpJobsData && dumpJobsData.map(job => {
                return (
                  <div className={styles.jobWrap}>
                    <div className={styles.leftSectionWrap}>
                      <div className={styles.jobTitle}>{job?.jobTitle}</div>
                      <div className={styles.jobTags}>
                        {job?.tags && job?.tags.map(tag => (
                          <div className={styles.jobTag}>{tag}</div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.rightSectionWrap}>
                        <button className={styles.redirectButton}>{job?.salary}</button>
                        <button className={`${styles.redirectButton} ${styles.viewButton}`}>View</button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className={`${styles.jobsSection} ${styles.bountySection}`}>
              <div className={styles.jobSectionWrap}>
                <div className={styles.aboutTitleWrap}>
                  <span className={styles.aboutTitle}>Bounties</span>
                  <span className={styles.aboutTitleLine} style={{ width: '9rem' }}></span>
                </div>
                <Link to="" className={styles.viewAll}>View All →</Link>
              </div>
              {dumpBountiesData && dumpBountiesData.map(job => {
                return (
                  <div className={styles.jobWrap}>
                    <div className={styles.leftSectionWrap}>
                      <div className={styles.jobTitle}>{job?.bountyTitle}</div>
                      <div className={styles.jobTags}>
                        {job?.tags && job?.tags.map(tag => (
                          <div className={styles.jobTag}>{tag}</div>
                        ))}
                      </div>
                    </div>
                    <div className={styles.rightSectionWrap}>
                        <button className={styles.redirectButton}>{job?.salary}</button>
                        <button className={`${styles.redirectButton} ${styles.viewButton}`}>View</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <h1>No Data</h1>
        )
      }
      {/* {companyData._id ? (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '500px' }}>
            <CompanyForm 
              initialData={initialData} 
              action={"update"}
              setCompanyData={setCompanyData}
              companyId={companyId} 
            />  
          </div>

          <div style={{ width: '50%' }}>
            <pre>{JSON.stringify(companyData, null, 2)}</pre>
          </div>
        </div>
      ) : (
        <h1>No data</h1>
      )} */}
   </div>   
  )
};

export default withLayout(CompanyDetailsPage, { isForHome: true });