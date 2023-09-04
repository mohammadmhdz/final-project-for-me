import React, { useEffect, useState } from "react";
import { Link , useLocation } from "react-router-dom";
import {
  home_icon,
  about_details,
  profile_details,
  profile_img,
  Flags_en,
  Tab_icon_01,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
  Tab_icon_13,
} from "../../imagepath";
import moment from "jalali-moment";
import CompanyProject from "../companyproject";
import { CompanyReview } from "../../CompanyDetails/companyreview";
// for redux using
import { useDispatch, useSelector } from "react-redux";
import { companyDetails } from "../../../../actions/companyActions";

const CompanyProfile = (props) => {
  const location = useLocation();
  const {companyIdInput} = location.state
  //
  const [activeJobs, setActiveJobs] = useState(false);
  const [activePreview, setActivePreview] = useState(false);
  const [activeAbout, setActiveAbout] = useState(true);

  const handleJobList = () => {
    setActivePreview(false);
    setActiveAbout(false);
    setActiveJobs(true);
  };

  const handlePreviewList = () => {
    setActiveJobs(false);
    setActiveAbout(false);
    setActivePreview(true);
  };
  const handleAbout = () => {
    setActiveJobs(false);
    setActivePreview(false);
    setActiveAbout(true);
  };
  // for using redux in our project
  const dispatch = useDispatch();
  const companyDetailsDispatch = useSelector((state) => state.companyDetails);
  const { companyDetail } = companyDetailsDispatch;
  // console.log(error, loading, jobs);

  useEffect(() => {
    // for using redux in our project
    dispatch(companyDetails(companyIdInput));

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);
  console.log(companyDetail, "Xdssd");
  console.log(companyIdInput, "ss");
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center"></div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Profile Banner */}
      <section className="profile-baner">
        <div className="container">
          <div className="row align-right">
            <div className="col-auto">
              <div className="profile-img">
                <img src={companyDetail.company_data?.image ? `http://127.0.0.1:8000${companyDetail.company_data?.image}` : profile_details} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="profile-main">
                <h2>
                  {companyDetail.company_data?.Name} <i className="fas fa-check-circle" />
                </h2>
                <p>از خرداد ۹۹</p>
                <div className="about-list">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt m-0" />
                      {companyDetail.company_data?.city.name}
                    </li>
                  </ul>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star " />
                  <i className="fas fa-star" />
                  <span className="average-rating ml-2">4.6 (25)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Profile Banner */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs abouts-view">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <Link
                        onClick={handleAbout}
                        className={activeAbout ? "nav-link active-about" : "nav-link" }
                        to="/company-profile"
                      >
                        <img src={Tab_icon_13} alt="User Image" />
                        <p className="bg-red">درباره ما</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        onClick={handleJobList}
                        className={activeJobs ? "nav-link active-about" : "nav-link" }
                        // to="/company-project"
                        // state={{ item: companyDetail }}
                      >
                        <img src={Tab_icon_09} alt="User Image" />
                        <p>فرصت های شغلی</p>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        onClick={handlePreviewList}
                        className={activePreview ? "nav-link active-about" : "nav-link" }
                        // to="/company-review"
                      >
                        <img src={Tab_icon_11} alt="User Image" />
                        <p>نظرات</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* About Tab Content */}
                {activeJobs ? (
                  <CompanyProject companyId={companyIdInput} />
                ) : activePreview ? (
                  <CompanyReview companyId={companyIdInput} />
                ) : activeAbout ? (
                  <div className="pro-post widget-box company-post abouts-detail align-right">
                    <h3 className="pro-title">درباره ما</h3>
                    <div className="pro-content">
                      <p>{companyDetail.company_data?.about}</p>
                    </div>
                  </div>
                ) : null}
                {/* /About Tab Content */}
              </div>
            </div>
            {/* profile Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar company-profile align-right">
              {/* About Widget */}
              <div className="pro-post widget-box about-widget profile-overview">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">درباره</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>نام شرکت</p>
                    <h6>{companyDetail.company_data?.Name}</h6>
                  </li>
                  <li>
                    <p>سال تاسیس</p>
                    <h6>{companyDetail?.company_data?.founded_at}</h6>
                    {/* <h6>{moment(companyDetail?.company_data?.founded_at, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}</h6> */}
                  </li>
                  <li>
                    <p>جمعیت</p>
                    <h6>{companyDetail.company_data?.population}</h6>
                  </li>
                  <li>
                    <p>صاحب شرکت</p>
                    <h6>{companyDetail.company_data?.Owner_name}</h6>
                  </li>
                  <li>
                    <p>ایمیل</p>
                    <h6>{companyDetail.company_data?.Email}</h6>
                  </li>
                  <li>
                    <p>وبسایت</p>
                    <h6>{companyDetail.company_data?.Website}</h6>
                  </li>
                </ul>
                <div className="contact-btn">
                  <Link to="#" className="btn btn-primary">
                    <i className="fas fa-phone-alt" /> تماس
                  </Link>
                </div>
              </div>
              {/* /About Widget */}
              {/* Company Location */}

              {/* /Company Location */}
              {/* Working Widget */}
              <div className="pro-post widget-box  working-days">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">روز های کاری</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>{companyDetail.company_data?.Working_days_from}</p>
                    <h6>{companyDetail.company_data?.working_hours_from}</h6>
                  </li>
                  <li>
                    <p>الی</p>
                  </li>
                  <li>
                    <p>{companyDetail.company_data?.Working_days_to}</p>
                    <h6>{companyDetail.company_data?.working_hours_to}</h6>
                  </li>
                  {/* <li>
                    <p>دوشنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
                    <p>سه شنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
                    <p>چهارشنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
                    <p>پنجشنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
                    <p>جمعه </p>
                    <h6>
                      <span>تعطیل</span>
                    </h6> */}
                  {/* </li> */}
                </ul>
              </div>
              {/* /Working Widget */}
              {/* Social Widget */}
              <div className="pro-post widget-box social-widget">
                <div className="profile-head">
                  <h4 className="pro-title">شبکه های اجتماعی</h4>
                </div>
                <ul className="social-link-profile">
                  <li>
                    <a href={companyDetail.company_data?.facebook}>
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.company_data?.instagram}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.company_data?.instagram}>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.company_data?.linkdin}>
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-telegram" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /Social Widget */}
            </div>
            {/* /Profile Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default CompanyProfile;
