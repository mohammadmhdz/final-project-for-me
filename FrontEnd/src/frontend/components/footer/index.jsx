import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Googleplay, Appstore } from "../imagepath";

const Footer = (props) => {
  // const mypath = props.location.mypath.split("/")[1];

  const exclusionArray = [
    "/index-two",
    "/index-three",
    "/index-four",
    "/index-five",
    "/onboardScreen",
    "/onboard-screen-employer",
  ];
  // if (exclusionArray.indexOf(props.location.mypath) >= 0) {
  //   return "";
  // }
  console.log(props.location, "location");

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row align-right">
              <div className="col-md-3">
                <h2 className="footer-title">آدرس</h2>
                <div className="footer-address">
                  <div className="off-address">
                    <p className="mb-2">تهران</p>
                    <address className="mb-0">
                      خیابان ولیعصر، بالاتر از میدان ونک،
                      <br /> نبش کوچه سوم، پلاک ۱۲۳، واحد ۲
                    </address>
                    <p>
                      تماس:{" "}
                      <a href="#">
                        <u>۳۳۴۵۶۵۴۶-۰۲۱</u>
                      </a>{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">لینک های مفید</h2>
                  <ul>
                    <li>
                      <a href="/about">درباره ما</a>
                    </li>
                    <li>
                      <a href="/blog-list">بلاگ</a>
                    </li>
                    <li>
                      <a href="/login">ورود</a>
                    </li>
                    <li>
                      <a href="/register">ثبت نام</a>
                    </li>
                    <li>
                      <a href="/forgot-password">فراموشی رمز</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">کارجویان</h2>
                  <ul>
                    <li>
                      <a href="/project">آگهی‌های استخدام</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">سایر</h2>
                  <ul>
                    <li>
                      <a href="/developer">کارجویان</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">اپلیکیشن مبایل </h2>
                  <p>
                    با دانلود اپلیکیشن ما، نیاز به دسترسی به همه سرویس‌های ما
                    فقط با چند کلیک دارید. روی دکمه‌ی دانلود کلیک کنید و به کسب
                    و کار خود رونق بخشید!
                  </p>
                  <div className="row g-2">
                    <div className="col">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src={Appstore}
                          alt="app-store"
                        />
                      </a>
                    </div>
                    <div className="col">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src={Googleplay}
                          alt="google-play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">© ۱۴۰۲ تمامی حقوق محفوظ است</p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 right-text">
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fa fa-instagram" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fa fa-facebook" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fa fa-linkedin-in" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icon" target="_blank">
                          <i className="fa fa-twitter" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>
      {/* /Footer */}
    </>
  );
};

export default Footer;
