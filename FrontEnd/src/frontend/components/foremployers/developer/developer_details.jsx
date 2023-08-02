import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import {
  Logo_01,
  Img_02,
  Img_03,
  Project_img,
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  Project_6,
  Project_7,
  Flags_pl,
  Tab_icon_01,
  Tab_icon_02,
  Tab_icon_03,
  Tab_icon_04,
  Tab_icon_05,
  Tab_icon_06,
  Tab_icon_08,
  Img_01,
  Icon_10,
  Icon_11,
} from "../../imagepath";

const DeveloperDetails = (props) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row align-right mt-5">
            <div className="col-md-12">
              <div className="profile">
                <div className="profile-box">
                  <div className="provider-widget">
                    <div className="pro-info-left">
                      <div className="provider-img">
                        <img src={Img_01} alt="User" />
                      </div>
                      <div className="profile-info">
                        <h2 className="profile-title">محمد مهدی‌زاده</h2>
                        <p className="profile-position">front-end Developer</p>
                        <div>
                          <a href="#" className="btn full-btn">
                            تمام وقت
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pro-info-right profile-inf">
                      <Link
                        className="btn profile-edit-btn"
                        to="/freelancer-profile-settings"
                      >
                        ویرایش پروفایل
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#overview"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_01}
                        />
                        <p className="bg-red">درباره</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#bids" data-bs-toggle="tab">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_02}
                        />
                        <p className="bg-blue">پروژه ها</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#skill"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_05}
                        />
                        <p className="bg-pink"> مهارت ها</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#education"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_04}
                        />
                        <p className="bg-yellow"> تحصیلات</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#experience"
                        data-bs-toggle="tab"
                      >
                        <img alt="User Image" height={28} src={Tab_icon_03} />
                        <p className="bg-violet">سوابق شغلی</p>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Overview Tab Content */}
                <div className="pro-post widget-box align-right" id="overview">
                  <h3 className="pro-title">درباره</h3>
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
                <div
                  className="pro-post project-widget widget-box  align-right develop-experiance"
                  id="experience"
                >
                  <h3 className="pro-title">سوابق شغلی</h3>
                  <div className="pro-content">
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-6 d-flex"
                        style={{ height: "100%" }}
                      >
                        <div className="experiance-list d-flex  flex-column">
                          <div className="experiance-logo d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_10} />
                          </div>
                          <h4>توسعه دهنده Front-end</h4>
                          <h5>آرمان ارتباطات ویرا</h5>
                          <h5> تابستان ۱۴۰۱</h5>
                          <p>{/* description */}</p>
                        </div>
                      </div>
                      <div
                        className="col-lg-4 col-md-6 d-flex"
                        style={{ height: "100%" }}
                      >
                        <div className="experiance-list d-flex  flex-column">
                          <div className="experiance-logo d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_10} />
                          </div>
                          <h4>توسعه دهنده Front-end</h4>
                          <h5>آرمان ارتباطات ویرا</h5>
                          <h5> تابستان ۱۴۰۱</h5>
                          <p>{/* description */}</p>
                        </div>
                      </div>
                      <div
                        className="col-lg-4 col-md-6 d-flex"
                        style={{ height: "100%" }}
                      >
                        <div className="experiance-list d-flex  flex-column">
                          <div className="experiance-logo d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_10} />
                          </div>
                          <h4>توسعه دهنده Front-end</h4>
                          <h5>آرمان ارتباطات ویرا</h5>
                          <h5> تابستان ۱۴۰۱</h5>
                          <p>{/* description */}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Experience Tab Content */}
                {/* Educational Tab Content */}
                <div
                  className="pro-post project-widget widget-box align-right"
                  id="education"
                >
                  <h3 className="pro-title">تحصیلات</h3>
                  <div className="pro-content">
                    <div className="row">
                      <div
                        className="col-lg-6 col-md-6 d-flex"
                        style={{ height: "100%" }}
                      >
                        <div className="experiance-list">
                          <div className="experiance-logo logo-bg d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_11} />
                          </div>
                          <h4>مهندسی کامپیوتر</h4>
                          <h5>دانشگاه زنجان ۱۳۹۷-۱۴۰۲</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pro-post project-widget widget-box align-right"
                  id="project"
                >
                  <h3 className="pro-title">نمونه کارها</h3>
                  <div className="pro-content">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="project-widget">
                          <div className="pro-image">
                            <a href={Project_img} data-fancybox="gallery2">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={Project_img}
                              />
                            </a>
                          </div>
                          <div className="pro-detail">
                            <h3 className="pro-name">نام پروژه</h3>
                            <p className="pro-designation">حوزه</p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <Link
                          to="/freelancer-portfolio"
                          className="btn more-btn"
                        >
                          مشاهده همه{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                ;{/* /Educational Tab Content */}
                {/* Technical Tab Content */}
                <div
                  className="pro-post project-widget widget-box technical-skill align-right"
                  id="skill"
                >
                  <h3 className="pro-title">مهارت های فنی</h3>
                  <div className="pro-content">
                    <div className="tags">
                      <span className="badge badge-pill badge-skills">
                        + Web Design
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + UI Design
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + Node Js
                      </span>
                      <span className="badge badge-pill badge-skills">
                        + Javascript
                      </span>
                    </div>
                  </div>
                </div>
                {/* /Technical Tab Content */}
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <div className="pro-post widget-box language-widget align-right">
                <div className="row">
                  <div className="col-10">
                    <h4 className="pro-title mb-0">زبان </h4>
                  </div>
                  <div className="col-2 text-end">
                    <Link
                      to="/freelancer-profile-settings"
                      className="sub-title"
                    >
                      <i className="fa fa-pencil-alt me-1" />
                    </Link>
                  </div>
                </div>
                <ul className="latest-posts pro-content">
                  <li>
                    <p>English</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                  <li>
                    <p>فارسی</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                  <li>
                    <p>آلمانی</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pro-post widget-box about-widget align-right">
                <div className="row">
                  <div className="col-10">
                    <h4 className="pro-title mb-0">اطلاعات فردی </h4>
                  </div>
                  <div className="col-2 text-end">
                    <Link
                      to="/freelancer-profile-settings"
                      className="sub-title"
                    >
                      <i className="fa fa-pencil-alt me-1" />
                    </Link>
                  </div>
                </div>
                <ul className="latest-posts pro-content pt-0">
                  <li>
                    <p>جنسیت</p>
                    <h6>زن</h6>
                  </li>
                  <li>
                    <p>سابقه کاری</p>
                    <h6>سال ۱</h6>
                  </li>
                  <li>
                    <p>شهر</p>
                    <h6>زنجان</h6>
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div className="pro-post category-widget align-right">
                <div className="widget-title-box">
                  <h4 className="pro-title">شبکه های اجتماعی </h4>
                </div>
                <ul className="latest-posts pro-content ">
                  <li>
                    <a href="#">http://www.facebook.com/john...</a>
                  </li>
                  <li>
                    <a href="#">http://www.Twitter.com/john...</a>
                  </li>
                  <li>
                    <a href="#">Http://www.googleplus.com/john... </a>
                  </li>
                  <li>
                    <a href="#"> Http://www.behance.com/john...</a>
                  </li>
                  <li>
                    <a href="#"> Http://www.pinterest.com/john...</a>
                  </li>
                </ul>
              </div>
              {/* /Categories */}
              {/* Link Widget */}
              <div className="pro-post widget-box post-widget align-right">
                <h3 className="pro-title">لینک پروفایل</h3>
                <div className="pro-content">
                  <div className="form-group profile-group mb-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="https://www.KomaKar.com/developer/daren/12454687"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-success sub-btn"
                          type="submit"
                        >
                          <i className="fa fa-clone" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Link Widget */}
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default DeveloperDetails;
