import React, { Component } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
// Import Images
import {
  Dev_img,
  Flags_en,
  Flags_de,
  company_img,
  company_img1,
  companyimage,
} from "../imagepath";

class SearchProject extends Component {
  render() {
    return (
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container"></div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container">
            <div className="row align-right">
              <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                <StickyBox offsetTop={20} offsetBottom={20}>
                  {/* Search Filter */}
                  <div className="card search-filter">
                    <div className="card-header d-flex justify-content-between">
                      <h4 className="card-title mb-0">فیلترها</h4>
                      <a href="">پاک کردن همه</a>
                    </div>
                    <div className="card-body">
                      <div className="filter-widget">
                        <h4>کلیدواژه‌ها</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="کلید واژه ر وارد کنید"
                          />
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>شهر</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="محدوده را وارد کنید"
                          />
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>دسته بندی</h4>
                        <div className="form-group">
                          <select className="form-control select">
                            <option>انتخاب کنید</option>
                            <option>Developer</option>
                            <option>UI Developer</option>
                            <option>React Developer</option>
                            <option>.Net Developer</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="filter-widget">
                      <h4>سابقه کار</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>انتخاب کنید</option>
                          <option>Node Projects</option>
                          <option>UI Projects</option>
                        </select>
                      </div>
                    </div> */}
                      {/* <div className="filter-widget">
                      <h4>نوع همکاری</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>تمام وقت</option>
                          <option>Full Day Rate</option>
                          <option>Half Day Rate</option>
                        </select>
                      </div>
                    </div> */}
                      <div className="filter-widget">
                        <h4>مهارت اضافه کنید</h4>
                        <div className="form-group">
                          <span className="badge badge-pill badge-skill">
                            + Web Design
                          </span>
                          <span className="badge badge-pill badge-skill">
                            + UI Design
                          </span>
                          <span className="badge badge-pill badge-skill">
                            + Node Js
                          </span>
                          <span className="badge badge-pill badge-skill">
                            + Angular
                          </span>
                          <span className="badge badge-pill badge-skill">
                            + Wordpress
                          </span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>نوع همکاری</h4>
                        <div>
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="select_time"
                              defaultChecked
                            />
                            <span className="checkmark" /> ساعتی
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_time" />
                            <span className="checkmark" /> نیمه وقت
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_time" />
                            <span className="checkmark" /> تمام وقت
                          </label>
                        </div>
                      </div>
                      <div className="filter-widget">
                        <h4>سابقه کار</h4>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_specialist" />
                            <span className="checkmark" /> بدون محدودیت
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input
                              type="checkbox"
                              name="select_exp"
                              defaultChecked
                            />
                            <span className="checkmark" /> کمتر از ۲ سال
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_exp" />
                            <span className="checkmark" /> ۲ تا ۵ سال
                          </label>
                        </div>
                        <div>
                          <label className="custom_check">
                            <input type="checkbox" name="select_exp" />
                            <span className="checkmark" /> ۵ سال به بالا
                          </label>
                        </div>
                      </div>

                      <div className="btn-search"></div>
                    </div>
                  </div>
                  {/* /Search Filter */}
                </StickyBox>
              </div>
              <div className="col-md-12 col-lg-8 col-xl-9">
                <div className="row align-items-center bg-gray">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex align-items-center">
                      <div className="freelance-view">
                        <h4>نمایش نتایج ۱-۱۲ از ۴۵۵</h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="d-flex justify-content-sm-end">
                      <div className="sort-by">
                        <select className=" custom-select form-select">
                          <option> مرتبط</option>
                          <option>جدیدترین</option>
                          <option>قدیمی ترین</option>
                          {/* <option>Latest</option>
                          <option>Free</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bootstrap-tags text-left">
                  <span className="badge badge-pill badge-skills">
                    UI/UX Developer <span data-role="remove" />
                  </span>{" "}
                  <span className="badge badge-pill badge-skills">
                    Germany <span data-role="remove" />
                  </span>{" "}
                  <span className="badge badge-pill badge-skills">
                    5 <span data-role="remove" />
                  </span>
                  <span className="badge badge-pill badge-skills">
                    Hourly <span data-role="remove" />
                  </span>
                  <span className="badge badge-pill badge-skills">
                    0-1 years <span data-role="remove" />
                  </span>
                  <span className="badge badge-pill badge-skills">
                    5-22 <span data-role="remove" />
                  </span>
                  <span className="badge badge-pill badge-skills">
                    USD <span data-role="remove" />
                  </span>
                </div>
                <div className="row">
                  <div class="col-md-6 col-lg-12 col-xl-6">
                    <div class="freelance-widget widget-author">
                      <div class="freelance-content">
                        <Link
                          data-bs-toggle="modal"
                          href="#rating"
                          className="favourite"
                        >
                          <i className="fas fa-star"></i>
                        </Link>
                        <div className="author-heading">
                          <div className="profile-img">
                            <Link to="/project-details">
                              <img src={companyimage} alt="author" />
                            </Link>
                          </div>
                          <div className="profile-name">
                            <Link
                              to="/company-details"
                              className="author-location"
                            >
                               فراوب|FaraWeb
                              <i class="fas fa-check-circle text-success verified"></i>
                            </Link>
                          </div>
                          <div className="freelance-info">
                            <h3>
                              <p>UI/UX Developer</p>
                            </h3>
                            <div className="freelance-location mb-1">
                              <i className="fas fa-clock"></i> ۱ روز پیش
                            </div>
                            <div className="freelance-location">
                              <i className="fas fa-map-marker-alt ms-1"></i>
                              تهران
                            </div>
                          </div>
                          {/* <div className="freelance-tags">
                            <a href="javascript:void(0);">
                              <span className="badge badge-pill badge-design">
                                After Effects
                              </span>
                            </a>
                            <a href="javascript:void(0);">
                              <span className="badge badge-pill badge-design">
                                Illustrator
                              </span>
                            </a>
                            <a href="javascript:void(0);">
                              <span className="badge badge-pill badge-design">
                                HTML
                              </span>
                            </a>
                          </div> */}
                          <div className="d-flex justify-content-center">
                            <span className="badge badge-pill badge-design">
                              Web Design
                            </span>
                            <span className="badge badge-pill badge-design">
                              UI Design
                            </span>
                            <span className="badge badge-pill badge-design">
                              Node Js
                            </span>
                          </div>
                          <div className="freelancers-price mt-3">
                            ۱۴ میلیون
                          </div>
                        </div>
                        <div className="counter-stats">
                          <ul>
                            <li>
                              <h5>انقضا</h5>
                              <h3 className="counter-value">۵۹ روز</h3>
                            </li>
                            <li>
                              <h5>درخواست</h5>
                              <h3 className="counter-value">۱۵</h3>
                            </li>
                            <li>
                              <h5>نوع همکاری</h5>
                              <h3 className="counter-value">
                                <span className="jobtype">تمام وقت</span>
                              </h3>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link to="/project-details" className="btn-cart">
                          اطلاعات بیشتر
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </>
    );
  }
}
export default SearchProject;
