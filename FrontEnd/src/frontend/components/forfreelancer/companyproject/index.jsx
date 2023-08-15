import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  home_icon,
  about_details,
  profile_details,
  profile_img,
  Flags_en,
  Tab_icon_10,
  Tab_icon_09,
  Tab_icon_11,
  Tab_icon_12,
  Tab_icon_13,
} from "../../imagepath";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../../forfreelancer/sidebar/profilesidebar";
// redux
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../../../../actions/jobActions";

const CompanyProject = (props) => {
  // for using redux in our project
  const dispatch = useDispatch();
  const listJob = useSelector((state) => state.jobList);
  const { jobs } = listJob;
  // console.log(error, loading, jobs);
  useEffect(() => {
    dispatch(listJobs());

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);

  // console.log(jobs, "job list per company");

  const test = jobs.map((item) => {
    // console.log(item.Company.id); this is what we want
    console.log(item.Company);
  });
  // test();
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
                <img src={profile_details} alt="" />
              </div>
            </div>
            <div className="col">
              <div className="profile-main">
                <h2>
                  فراوب | FaraWeb <i className="fas fa-check-circle" />
                </h2>
                <p>از خرداد ۹۹</p>
                <div className="about-list">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt m-0" /> تهران
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
                <nav className="provider-tabs mb-4 abouts-view">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link " to="/company-profile">
                        <img src={Tab_icon_13} alt="UserImage" />
                        <p className="bg-red">درباره ما</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link active-about"
                        to="/company-project"
                      >
                        <img src={Tab_icon_09} alt="UserImage" />
                        <p>فرصت های شغلی</p>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/company-review">
                        <img src={Tab_icon_11} alt="UserImage" />
                        <p>نظرات</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Projects Tab Content */}
                <div className="pro-post widget-box company-post align-right">
                  <h3 className="pro-title">فرصت های شغلی</h3>
                  <div className="projects-card flex-fill project-company">
                    <div className="card-body">
                      <div className="projects-details align-items-center">
                        <div className="project-info">
                          <span>آرمان ارتباطات ویرا</span>
                          <h2>رایمون فناور آریان | Rymon Fanavar Arian</h2>
                          <div className="customer-info">
                            <ul className="list-details">
                              <li>
                                <div className="slot">
                                  <p>Price type</p>
                                  <h5>Fixed</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>شهر</p>
                                  <h5>تهران</h5>
                                </div>
                              </li>
                              <li>
                                <div className="slot">
                                  <p>تاریخ انقضا</p>
                                  <h5>۱۰ روز</h5>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="project-hire-info">
                          <div className="content-divider" />
                          <div className="projects-amount">
                            <h3>13 میلیون</h3>
                            {/* <h5>in 12 Days</h5> */}
                          </div>
                          <div className="content-divider" />
                          {/* <div className="projects-action text-center">
                            <Link
                              to="/view-project-detail"
                              className="projects-btn"
                            >
                              View Proposals
                            </Link>
                            <Link
                              to="/view-project-detail"
                              className="projects-btn"
                            >
                              Edit Jobs
                            </Link>
                            <Link to="#" className="hired-detail">
                              <span>5</span> Proposals
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pagination */}
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="paginations list-pagination">
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right" /> قبلی
                          </Link>
                        </li>
                        <li>
                          <Link to="#">1</Link>
                        </li>
                        <li>
                          <Link to="#" className="active">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link to="#">3</Link>
                        </li>
                        <li>
                          <Link to="#">4</Link>
                        </li>
                        <li>
                          <Link to="#">
                            بعدی <i className="fas fa-angle-left" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* /Pagination */}
                </div>
                {/* /Projects Tab Content */}
              </div>
            </div>
            {/* profile Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar company-profile align-right">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <ProfileSidebar />
              </StickyBox>
            </div>
            {/* /Profile Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default CompanyProject;
