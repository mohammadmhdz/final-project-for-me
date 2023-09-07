import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import Slider from "react-slick";
// Import Images
import { Img_03, Avatar_1, Avatar_2, Avatar_3 } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

const TopDevelopers = (props) => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    $(".slick-prev").html('<i class="fa fa-chevron-left"></i>');
    $(".slick-next").html('<i class="fa fa-chevron-right"></i>');
  });
  return (
    <>
      {/* Top Instructor */}
      <section className="section developer">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 col-12 mx-auto">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <div className="section-line" />
                <h2 className="header-title">
                  کارجویانی که اخیر فعال بوده اند
                </h2>
                <p>نیروی کار های با استعداد مربوط به حوزه خود را بیابید</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="developer-slider slider"> */}
              <Slider
                {...settings}
                className="developer-slider aos"
                data-aos="fade-up"
              >
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_1} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">محمد مهدی زاده</a>
                      </h3>
                      <div className="freelance-specific">
                        برنامه نویس Front-end
                      </div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt ms-1" />
                        بیجاد
                      </div>

                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactJs
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactNative
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Python
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link
                      to="/developer-details"
                      className="btn-cart"
                      tabIndex={-1}
                    >
                      مشاهده پروفایل
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_1} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">محمد مهدی زاده</a>
                      </h3>
                      <div className="freelance-specific">
                        برنامه نویس Front-end
                      </div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt ms-1" />
                        قزوین
                      </div>

                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactJs
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactNative
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Python
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link
                      to="/developer-details"
                      className="btn-cart"
                      tabIndex={-1}
                    >
                      مشاهده پروفایل
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_1} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">محمد مهدی زاده</a>
                      </h3>
                      <div className="freelance-specific">
                        برنامه نویس Front-end
                      </div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt ms-1" />
                        قزوین
                      </div>

                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactJs
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactNative
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Python
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link
                      to="/developer-details"
                      className="btn-cart"
                      tabIndex={-1}
                    >
                      مشاهده پروفایل
                    </Link>
                  </div>
                </div>
                <div className="freelance-widget">
                  <div className="freelance-content">
                    <a data-toggle="modal" href="#rating" className="favourite">
                      <i className="fas fa-star" />
                    </a>
                    <div className="freelance-img">
                      <a href="#">
                        <img src={Avatar_1} alt="User Image" />
                        <span className="verified">
                          <i className="fas fa-check-circle" />
                        </span>
                      </a>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">محمد مهدی زاده</a>
                      </h3>
                      <div className="freelance-specific">
                        برنامه نویس Front-end
                      </div>
                      <div className="freelance-location">
                        <i className="fas fa-map-marker-alt ms-1" />
                        قزوین
                      </div>

                      <div className="freelance-tags">
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactJs
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            ReactNative
                          </span>
                        </a>
                        <a href="">
                          <span className="badge badge-pill badge-design">
                            Python
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="cart-hover">
                    <Link
                      to="/developer-details"
                      className="btn-cart"
                      tabIndex={-1}
                    >
                      مشاهده پروفایل
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* End Developer */}
    </>
  );
};
export { TopDevelopers };
