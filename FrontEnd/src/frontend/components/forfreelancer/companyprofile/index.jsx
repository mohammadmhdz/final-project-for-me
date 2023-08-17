import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
// for redux using
import { useDispatch, useSelector } from "react-redux";
import { companyDetails } from "../../../../actions/companyActions";

const CompanyProfile = (props) => {
  const [users, setUsers] = useState([]);
  const json_test = {
    id: 2,
    user: {
      id: 3,
      _id: 3,
      username: "mozhde.1026@gmail.com",
      first_name: "مژده",
      last_name: "زینال زادگان",
      email: "mozhde.1026@gmail.com",
      name: "مژده",
      isAdmin: false,
      last_login: null,
    },
    city: {
      name: "تهران",
    },
    Name: "پارس پک | ParsPack",
    image: null,
    about:
      "شرکت پارس پروا سیستم با نام تجاری پارس پک، اولین ارائه دهنده خدمات رایانش ابری در ایران می باشد.\r\nما در پارس پک با تکیه بر دانش مهندسان خلاق، جوان و باانگیزه همواره در تلاشیم تا کاری ارزشمند و بزرگ انجام داده و در رقابت سالم با هم پایان داخلی و خارجی به توسعه و پیشرفت تکنولوژی در عرصه وب، نه تنها در ایران که در جهان می اندیشیم.",
    founded_at: "2023-08-07",
    population: "100-500",
    Owner_name: "نادیا بنیادنژاد",
    Email: "info@ParsPack.com",
    Website: "https://parspack.com/",
    facebook: "https://www.facebook.com",
    linkdin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com/",
    Phone: "٤٢٨٨٣ - ٠٢١",
    Adress:
      "تهران، سعادت آباد، صرافهای جنوبی، کوچه سی پنجم غربی، پلاک ۲، واحد ۴",
    Working_days_from: "شنبه",
    Working_days_to: "پنج شنبه",
    working_hours_from: "08:00:00",
    working_hours_to: "18:00:00",
    favorite_employee: [],
  };
  // for using redux in our project
  // const [companyDetail, setCompanyDetail] = useState({});
  const dispatch = useDispatch();
  const companyDetailsDispatch = useSelector((state) => state.companyDetails);
  const { companyDetail } = companyDetailsDispatch;
  // const test = JSON.parse(JSON.stringify(companyDetail));
  // const test = () => setCompanyDetail(companyDetailsDispatch.companyDetail);
  // console.log(error, loading, jobs);

  useEffect(() => {
    // for using redux in our project
    dispatch(companyDetails());
    const x = companyDetail;

    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);
  console.log(json_test.city.name, "Xdssd");
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
                  {companyDetail.Name} <i className="fas fa-check-circle" />
                </h2>
                <p>از خرداد ۹۹</p>
                <div className="about-list">
                  <ul>
                    <li>
                      <i className="fas fa-map-marker-alt m-0" />
                      {/* {companyDetail.city.name} */}
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
                        className="nav-link active-about"
                        to="/company-profile"
                      >
                        <img src={Tab_icon_13} alt="User Image" />
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
                    <p>{companyDetail.about}</p>
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
                    <h6>{companyDetail.Name}</h6>
                  </li>
                  <li>
                    <p>سال تاسیس</p>
                    <h6>{companyDetail.founded_at}</h6>
                  </li>
                  <li>
                    <p>جمعیت</p>
                    <h6>{companyDetail.population}</h6>
                  </li>
                  <li>
                    <p>صاحب شرکت</p>
                    <h6>{companyDetail.Owner_name}</h6>
                  </li>
                  <li>
                    <p>ایمیل</p>
                    <h6>{companyDetail.Email}</h6>
                  </li>
                  <li>
                    <p>وبسایت</p>
                    <h6>{companyDetail.Website}</h6>
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
                    <a href={companyDetail.facebook}>
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.instagram}>
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.instagram}>
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href={companyDetail.linkdin}>
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
