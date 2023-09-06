import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StickyBox from "react-sticky-box";
import _ from "lodash";

// Import Images
import {
  company_img1,
  company_img2,
  company_img3,
  company_img4,
  company_img5,
  company_img6,
  company_img7,
  company_img8,
  company_img9,
  company_img10,
  home_icon,
} from "../../imagepath";
// redux
import { useDispatch, useSelector } from "react-redux";
import { listJobs, jobsPostRequirments } from "../../../../actions/jobActions";

const Projects = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const listAllJobs = useSelector((state) => state.jobList);
  const { jobs } = listAllJobs;
  const [users, setUsers] = useState([]);
  const searchPhrase  = location.state?.searchPhrase ? location.state?.searchPhrase : "";
  const Requirments = useSelector((state) => state.jobsPostRequirments);
  const { postJobDetailsRequirments } = Requirments;
  const { categories, cities, skills, states } = postJobDetailsRequirments;

  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };

  useEffect(() => {
    dispatch(listJobs());
    dispatch(jobsPostRequirments());
  }, [dispatch]);

  console.log(jobs, "Xdssd");

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
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row align-right">
            <div className="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Search Filter */}
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="card search-filter">
                  <div className="card-header d-flex justify-content-between">
                    <h4 className="card-title mb-0">فیلتر</h4>
                    <a href="">پاک کردن همه</a>
                  </div>
                  <div className="card-body">
                    <div className="filter-widget">
                      <h4>دسته بندی</h4>
                      <option>انتخاب کنید</option>
                      <div className="form-group">
                        <select className="form-control select">
                          {postJobDetailsRequirments.categories?.map((item) => (
                            <option value={item.id}>{item.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>استان</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option>انتخاب کنید</option>
                          {postJobDetailsRequirments.states?.map((item) => (
                            <option value={item.id}>{item.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="filter-widget">
                      <h4>حقوق</h4>
                      <div className="form-group">
                        <select className="form-control select">
                          <option> مشخص شده</option>
                          <option>توافقی</option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="filter-widget">
                      <h4>مهارت اضافه کنید</h4>
                      <div className="form-group">
                        <select className="form-control select mb-2">
                          <option>انتخاب کنید</option>
                          {postJobDetailsRequirments.skills?.map((item) => (
                            <option value={item.id}>{item.title}</option>
                          ))}
                        </select>
                        <span className="badge badge-pill badge-skill">
                          + Web Design
                        </span>

                        <input type="text" className="form-control" />
                      </div>
                    </div> */}
                    <div className="filter-widget">
                      <h4>نوع همکاری</h4>
                      <div></div>
                      <div>
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" /> پاره وقت
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
                          <input type="checkbox" name="select_exp" />
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
                        اعمال
                      </button>
                    </div>
                  </div>
                </div>
              </StickyBox>
              {/* /Search Filter */}
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
                        <select className="custom-select">
                          <option>مرتبط ترین</option>
                          <option>جدیدترین</option>
                          <option>بیشترین حقوق</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bootstrap-tags text-start pl-0">
                <span className="badge badge-pill badge-skills">
                  تهران{" "}
                  <span className="tag-close" data-role="remove">
                    <i className="fa fa-times" />
                  </span>
                </span>
              </div>
              <div className="row">
                {/* Project Content */}
                {jobs
                  .filter(
                    (job) =>
                      _.includes(
                        job.title?.toLowerCase(),
                        searchPhrase?.toLowerCase()
                      ) ||
                      _.includes(
                        job.company.Name?.toLowerCase(),
                        searchPhrase?.toLowerCase()
                      )
                  )
                  .map(
                    (item) =>
                      item.status === "فعال" && (
                        <div className="col-md-6 col-lg-12 col-xl-4">
                          <div className="freelance-widget widget-author">
                            <div className="freelance-content">
                              <a
                                data-bs-toggle="modal"
                                href="#rating"
                                className="favourite"
                              >
                                <i className="fa fa-star" />
                              </a>
                              <div className="">
                                <div className="mb-3">
                                  <a href="#">
                                    <img
                                      style={{
                                        borderRadius: "100px",
                                        width: "42%",
                                      }}
                                      alt=""
                                      src={
                                        "http://127.0.0.1:8000" +
                                        item.company?.image
                                      }
                                    />
                                  </a>
                                </div>
                                <div className="profile-name">
                                  <div className="author-location">
                                    {item.company?.Name}
                                    <i className="fa fa-check-circle text-success verified" />
                                  </div>
                                </div>
                                <div className="freelance-info">
                                  <h3>
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <div className="freelance-location mb-1">
                                    <i className="fa fa-clock" />{" "}
                                    {daysBetween(item?.published_at)} روز
                                  </div>
                                  <div className="freelance-location">
                                    <i className="fa fa-map-marker-alt ms-1" />
                                    {item.company.city?.name}
                                  </div>
                                </div>
                                <div className="freelance-tags">
                                  {item.job_skills?.map((item) => (
                                    <a href="">
                                      <span className="badge badge-pill badge-design">
                                        {item.title}
                                      </span>
                                    </a>
                                  ))}
                                </div>
                                {/* <div className="freelancers-price">حقوق</div> */}
                                {/* <div className="freelancers-price">$40-$500</div> */}
                              </div>
                              <div className="counter-stats ">
                                <ul>
                                  <li>
                                    <h5> حقوق</h5>
                                    <h3 className="counter-value">
                                      {item.salary_amount === null
                                        ? item.salary_type
                                        : `${item.salary_amount}میلیون تومان`}
                                    </h3>
                                  </li>

                                  <li>
                                    <h3 className="counter-value">
                                      <h5>نوع همکاری</h5>
                                      <span className="jobtype">
                                        {item.job_type}
                                      </span>
                                    </h3>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="cart-hover">
                              <Link
                                to={{
                                  pathname: "/project-details",
                                  state: { jobIdInput: item.id },
                                }}
                              >
                                <h4 className="btn-cart">مشاهده بیشتر</h4>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          </div>
        </div>
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
                      <h3>لطفا وارد شوید تا این فرصت شغلی را نشان کنید</h3>
                    </div>
                    <div className="submit-section text-center">
                      <a
                        data-bs-dismiss="modal"
                        href="#"
                        className="btn btn-primary black-btn click-btn ms-3"
                      >
                        بازگشت
                      </a>
                      <button
                        type="submit"
                        className="btn btn-primary click-btn"
                      >
                        تایید
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Projects;
