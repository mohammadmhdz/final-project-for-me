import React from "react";
import { Link } from "react-router-dom";
import { Img_04 } from "../../imagepath";

const ProfileSidebar = (props) => {
  const pathname = window.location.pathname.split("/")[1];
  return (
    <>
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
    </>
  );
};
export { ProfileSidebar };
