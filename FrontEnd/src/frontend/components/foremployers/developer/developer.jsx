import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
// Import Images
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  Avatar_6,
  Avatar_7,
  Avatar_8,
  Avatar_9,
  Avatar_10,
  Avatar_11,
  Avatar_12,
} from "../../imagepath";
// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeListAll } from "../../../../actions/employeeActions";
const Developer = (props) => {
  const dispatch = useDispatch();
  const employeeAllList = useSelector((state) => state.employeeListAll);
  const { employeeList } = employeeAllList;

  useEffect(() => {
    // we must take the id from where we reach here
    dispatch(employeeListAll());
  }, [dispatch]);

  // console.log(employeeDetailsList)
  console.log(employeeList);
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          {/* <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">کارجویان</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Developers
                  </li>
                </ol>
              </nav>
            </div>
          </div> */}
        </div>
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

                    <div className="btn-search">
                      <button type="button" className="btn btn-block">
                        اعمال کردن
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Search Filter */}
              </StickyBox>
            </div>
            <div className="col-md-12 col-lg-8 col-xl-9">
              <div className="sort-tab">
                <div className="row align-items-center">
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
              </div>
              <div className="bootstrap-tags text-start pr-0">
                <span className="badge badge-pill badge-skills">
                  قزوین{" "}
                  <span className="tag-close me-2" data-role="remove">
                    <i className="fa fa-times" />
                  </span>
                </span>
              </div>
              <div className="row">
                {employeeList.map((item) => (
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="freelance-widget">
                      <div className="freelance-content">
                        <a
                          data-bs-toggle="modal"
                          href="#rating"
                          className="favourite"
                        >
                          <i className="fa fa-star" />
                        </a>
                        <div className="freelance-img">
                          <a href="#">
                            <img
                              src={
                                item.image !== null
                                  ? `http://127.0.0.1:8000${item.image}`
                                  : Avatar_2
                              }
                              alt="User Image"
                            />
                            <span className="verified">
                              <i className="fa fa-check-circle" />
                            </span>
                          </a>
                        </div>
                        <div className="freelance-info">
                          <h3>
                            <a href="#">
                              {item.user?.first_name} {item.user?.last_name}
                            </a>
                          </h3>
                          <div className="freelance-specific">
                            {item.perfession_title}
                          </div>
                          <div className="freelance-location">
                            <i className="fa fa-map-marker-alt ms-1" />
                            {item.city?.name}
                          </div>
                          {/* <div className="rating">
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star" />
                          <span className="average-rating">4.7 </span>
                        </div> */}
                          <div className="freelance-tags">
                            {item.skills?.slice(0, 3).map((skill) => (
                              <a href="">
                                <span className="badge badge-pill badge-design">
                                  {skill.title}
                                </span>
                              </a>
                            ))}
                            {/* {item.job_skills?.slice(0, 3).map((item) => (
                              <a href="">
                                <span className="badge badge-pill badge-design">
                                  {item.title}
                                </span>
                              </a>
                            ))} */}
                          </div>
                          {/* <div className="freelancers-price">$25 Hourly</div> */}
                        </div>
                      </div>
                      <div className="cart-hover">
                        <Link
                          to={{
                            pathname: "/developer-profile",
                            state: { idInfo: item.id },
                          }}
                          className="btn-cart"

                          // tabIndex={-1}
                        >
                          مشاهده پروفایل
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* The Modal */}
      <div className="modal fade" id="rating">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header d-block b-0 pb-0">
              <span className="modal-close float-end">
                <a href="#" data-bs-dismiss="modal" aria-label="Close">
                  <i className="far fa-times-circle orange-text" />
                </a>
              </span>
            </div>
            <div className="modal-body">
              <form>
                <div className="modal-info">
                  <div className="text-center pt-0 mb-5">
                    <h3>Please login to Favourite Freelancer</h3>
                  </div>
                  <div className="submit-section text-center">
                    <button
                      data-bs-dismiss="modal"
                      className="btn btn-primary black-btn click-btn"
                    >
                      Cancel
                    </button>
                    &nbsp;
                    <button type="submit" className="btn btn-primary click-btn">
                      Submit
                    </button>
                  </div>
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
export default Developer;
