import React from "react";
import { Link } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import {
  about_details,
  home_icon,
  logo_details,
  profile_details,
  Tab_icon_01,
  Tab_icon_08,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
  Tab_icon_13,
} from "../imagepath";
import GalleryComponent from "./galleryComponents";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../forfreelancer/sidebar/profilesidebar";

const CompanyGallery = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner"></div>
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
                        <img src={Tab_icon_13} alt="User Image" />
                        <p>درباره ما</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-project">
                        <img src={Tab_icon_09} alt="User Image" />
                        <p>فرصت های شغلی</p>
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link active-about" to="#">
                        <img src={Tab_icon_10} alt="User Image" />
                        <p>گالری</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-review">
                        <img src={Tab_icon_11} alt="User Image" />
                        <p>نظرات</p>
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* About Tab Content */}
                <div className="pro-post widget-box company-post">
                  <h3 className="pro-title">Gallery</h3>
                  <div className="pro-content company-gallery">
                    <SimpleReactLightbox>
                      <GalleryComponent />
                    </SimpleReactLightbox>
                  </div>
                </div>
                {/* /About Tab Content */}
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
export default CompanyGallery;
