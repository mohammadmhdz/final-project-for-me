import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Review_01, Review_02, Review_03, Review_1 } from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";

const Reviews = (props) => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    margin: 30,
    slidesToShow: 3,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section testimonial-section review">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <div className="section-line" />
                <h2 className="header-title">
                  نظرات کاربران ما در شبکه های اجتماعی{" "}
                </h2>
                <p>تجربه کاربرانی که از کمک کار استفاده کرده اند را بخوانید</p>
              </div>
            </div>
          </div>

          {/* Review Widget */}
          {/* <div className="row">
                  <div className="col-md-12"> */}
          {/* <div className="review-slider slider"> */}
          <Slider
            {...settings}
            className="owl-carousel owl-theme review-slider owl-loaded owl-drag aos"
            data-aos="fade-up"
          >
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_01}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info align-right">
                  <h3>فاطمه حنیفی</h3>
                  <h5>کارجو</h5>
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
              <div className="review-content">
                <p class="limited-lines">
                  من به دنبال کاری در زمینه مهندسی برق بودم و با استفاده از سایت
                  کمک کار موفق شدم به شغلی مناسب دست پیدا کنم. بخش جستجوی سریع و
                  دقیق سایت بسیار کمکم کرد و در کمتر از یک هفته به یک مصاحبه
                  کاری دعوت شدم. از تجربه مثبتی که با این سایت داشتم بسیار راضی
                  هستم.
                </p>
              </div>
            </div>
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_02}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info align-right">
                  <h3>شیما نبوی </h3>
                  <h5>کارجو</h5>
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
              <div className="review-content">
                <p class="limited-lines">
                  سایت کمک کار برای من یک چشم انداز عالی و خیلی خوب برای پیدا
                  کردن کار بود. من به تازگی از رشته مدیریت فارغ التحصیل شده بودم
                  و به دنبال یک شغل در زمینه بازاریابی بودم ولی به نتیجه
                  نمیرسیدم. سایت با ارائه فرصت‌های شغلی مناسب و اطلاعات ...
                </p>
              </div>
            </div>
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_1}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info align-right">
                  <h3>آریا عسگری </h3>
                  <h5>کارجو</h5>
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
              <div className="review-content">
                <p class="limited-lines">
                  استفاده از سایت کمک کار برای من تبدیل به یک تجربه مثبت شده
                  است. من به دنبال یک فرصت شغلی در حوزه تجارت الکترونیک بودم و
                  با استفاده از این سایت به یک شغل مناسب رسیدم. ویژگی‌هایی مانند
                  راحتی استفاده، پاسخگویی سریع تیم پشتیبانی و گستره گزینه‌های
                  ...
                </p>
              </div>
            </div>
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_03}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info align-right">
                  <h3>معین مهدی‌زاده</h3>
                  <h5>کارفرما</h5>
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
              <div className="review-content">
                <p>
                  سایت کمک کار یک ابزار قدرتمند برای جذب نیروی کار است. من با
                  استفاده از این سایت تعداد زیادی آگهی استخدام منتشر کردم و در
                  کمترین زمان ممکن به فرد مناسب برای هر شغل رسیدم. امکانات
                  پیشرفته جستجو و فیلتر کردن، به همراه امکان ارسال پیام و مدیریت
                  ...
                </p>
              </div>
            </div>
            {/* / Review Widget */}
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_1}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info align-right">
                  <h3>علی خزایی</h3>
                  <h5> کارفرما</h5>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">4.8</span>
                  </div>
                </div>
              </div>
              <div className="review-content">
                <p>
                  با استفاده از سایت کمک کار توانستم به راحتی نیروی کار ما را
                  تکمیل کنم. قابلیت‌های پیشرفته‌ای برای انتخاب و فیلتر کردن
                  کاندیداها در اختیار دارد و ما را قادر می‌سازد به سرعت بهترین
                  فرد را برای شغل‌های خالی پیدا کنیم. همچنین، امکان ارسال و ...
                </p>
              </div>
            </div>
            {/* /Review Widget */}
          </Slider>
          {/* </div>					
                </div> */}
        </div>
      </section>
      {/* / Review */}
    </>
  );
};
export { Reviews };
