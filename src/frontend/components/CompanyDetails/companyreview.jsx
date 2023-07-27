import React from "react";
import { Link } from "react-router-dom";
import {
  about_details,
  profile_details,
  home_icon,
  loader_icon,
  logo_details,
  profile_img,
  Review_01,
  Review_02,
  Review_03,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
  Tab_icon_13,
} from "../imagepath";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../forfreelancer/sidebar/profilesidebar";

const CompanyReview = () => {
  return (
    <>
      {/* Bread-crumbs */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner ">
            <div className="col-md-12 col-12 text-center"></div>
          </div>
        </div>
      </div>
      {/* /Bread-crumbs */}

      {/* banner-section */}
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
      {/* /banner-section */}

      {/* page-content */}
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
                        <img src={Tab_icon_13} alt="User Image" />
                        <p className="bg-red">درباره ما</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-project">
                        <img src={Tab_icon_09} alt="User Image" />
                        <p>فرصت های شعلی </p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-gallery">
                        <img src={Tab_icon_10} alt="User Image" />
                        <p>گالری</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active-about" to="#">
                        <img src={Tab_icon_11} alt="User Image" />
                        <p>نظرات</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Reviews Tab Content */}
                <div className="pro-post widget-box company-post align-right">
                  <h3 className="pro-title">نظرات</h3>
                  <div className="reviews company-review">
                    <div className="review-content no-padding">
                      <h4>روند مصاحبه و پاسخ دهی بسیار کند</h4>
                      <p className="mb-0">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است
                      </p>
                      <div className="review-top tab-reviews d-flex align-items-center">
                        <div className="review-img">
                          <Link to="#">
                            <img
                              className="img-fluid"
                              src={Review_01}
                              alt="Post Image"
                            />
                          </Link>
                        </div>
                        <div className="review-info">
                          <h3>
                            <Link to="#">علی کلهر</Link>
                          </h3>
                          <h5>امروز • ۹:۳۰ </h5>
                        </div>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 text-center">
                      <Link to="#" className="btn more-btn">
                        بارگذاری بیشتر{" "}
                        <img src={loader_icon} height={24} alt="User Image" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Reviews Tab Content */}
                {/* Post a comment */}
                <div className="pro-post widget-box company-post post-comment align-right">
                  <h3 className="pro-title">نظر خود را ثبت کنید</h3>
                  <form action="#">
                    <div className="form-group">
                      <label>نام نام خانوادگی</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>ایمیل</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>شماره تماس</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label>امتیاز</label>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="نظر"
                        defaultValue={""}
                      />
                    </div>
                    <div className="post-btn">
                      <button className="btn more-btn">ثبت</button>
                    </div>
                  </form>
                </div>
                {/* /Post a comment */}
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

      {/* /page-content */}
    </>
  );
};

export default CompanyReview;
