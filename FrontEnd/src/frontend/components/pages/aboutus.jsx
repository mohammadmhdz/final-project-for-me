import React from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { about_us_img } from "../imagepath";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Aboutus = () => {
  var settings = {
    dots: false,
    infinite: "true",
    nav: true,
    margin: 25,
    slidestoshow: 3,

    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    slidestoscroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">درباره ما</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* About */}
      <section className="section about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="about-content align-right">
                <h2>
                  درباره <span className="orange-text">کمک کار</span>
                </h2>
                <p>
                  کمک کار بعنوان اولین ارائه دهنده بسته جامع خدمات کاریابی و
                  استخدام، تجربه برگزاری موفق ادوار مختلف نمایشگاه‌های کار شریف
                  و ایران را در کارنامه کاری خود دارد. سیستم هوشمند انطباق،
                  رزومه ساز دو زبانه، تست‌های خودشناسی، ارتقای توانمندی‌ها به
                  کمک پیشنهاد دوره‌های آموزشی و همکاری با معتبرترین سازمان‌ها
                  برای استخدام از ویژگی‌های متمایز جاب‌ویژن است.
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="about-img">
                <img
                  className="img-fluid"
                  src={about_us_img}
                  alt="Post Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About */}
    </>
  );
};
export default Aboutus;
