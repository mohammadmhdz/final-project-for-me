import React from "react";
import { Link } from "react-router-dom";
import {
  about_details,
  home_icon,
  Logo_01,
  logo_details,
  profile_details,
  Tab_icon_08,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
} from "../imagepath";

const CompanyDetails = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb"></nav>
              </div>
            </div>
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
                <nav className="provider-tabs abouts-view">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link active-about" to="#">
                        <img src={about_details} alt="User Image" />
                        <p className="bg-red">درباره ما</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-project">
                        <img src={Tab_icon_09} alt="User Image" />
                        <p>فرصت های شغلی</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/company-gallery">
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
                <div className="pro-post widget-box company-post abouts-detail align-right">
                  <h3 className="pro-title">درباره ما</h3>
                  <div className="pro-content">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
                      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                      طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                      زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد.
                    </p>
                  </div>
                </div>
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
                    <h6>فراوب</h6>
                  </li>
                  <li>
                    <p>سال تاسیس</p>
                    <h6>۱۳۹۸</h6>
                  </li>
                  <li>
                    <p>جمعیت</p>
                    <h6>۵۰-۱۰۰</h6>
                  </li>
                  <li>
                    <p>صاحب شرکت</p>
                    <h6>آقای محمدپور</h6>
                  </li>
                  <li>
                    <p>ایمیل</p>
                    <h6> faraweb.ir@gmail.com</h6>
                  </li>
                  <li>
                    <p>وبسایت</p>
                    <h6> faraweb.ir</h6>
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
              <div className="pro-post widget-box location-widget">
                <div className="profile-head">
                  <h4 className="pro-title">آدرس</h4>
                </div>
                <div className="map-location">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
                </div>
              </div>
              {/* /Company Location */}
              {/* Working Widget */}
              <div className="pro-post widget-box  working-days">
                <div className="profile-head">
                  <h4 className="pro-title mb-0">روز های کاری</h4>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>شنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
                    <p>یکشنبه</p>
                    <h6>۹ الی ۱۸</h6>
                  </li>
                  <li>
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
                    </h6>
                  </li>
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
                    <Link to="#">
                      <i className="fab fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fab fa-linkedin" />
                    </Link>
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
      {/* The Modal */}
      <div className="modal fade custom-modal" id="hire">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-modal">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center pt-0 mb-4">
                <img src={Logo_01} alt="logo" className="img-fluid mb-1" />
                <h5 className="modal-title">Discuss your project with David</h5>
              </div>
              <form action="#">
                <div className="modal-info">
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="First name & Lastname"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="name"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-12 col-md-4 pr-0">
                          <label className="file-upload">
                            Add Attachment <input type="file" />
                          </label>
                        </div>
                        <div className="col-12 col-md-8">
                          <p className="mb-1">
                            Allowed file types: zip, pdf, png, jpg
                          </p>
                          <p>Max file size: 50 MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-section text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block submit-btn"
                  >
                    Hire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /The Modal */}
    </>
  );
};
export default CompanyDetails;
