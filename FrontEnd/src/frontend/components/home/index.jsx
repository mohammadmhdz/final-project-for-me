import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TopDevelopers } from "./slider/topdevelopers";

import { Reviews } from "./review";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";

// Import Images
import {
  Banner_img,
  Icon_01,
  Icon_02,
  Icon_03,
  Img_02,
  Subscribe,
  Blog_01,
  Blog_02,
  company_img1,
  Blog_03,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import config from "config";
import Loader from "../../../Loader";
// redux
import { useDispatch, useSelector } from "react-redux";
import { listJobs } from "../../../actions/jobActions";
import { employeeListAll } from "../../../actions/employeeActions";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const listAllJobs = useSelector((state) => state.jobList);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { jobs, loading } = listAllJobs;
  const employeeAllList = useSelector((state) => state.employeeListAll);
  const { employeeList, loading: loadem } = employeeAllList;

  const daysBetween = (input) => {
    const now = new Date().getDate();
    const date = new Date(input).getDate();
    return now - date;
  };
  // console.log("zzz", jobs);
  // const settingSlider = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  const handleSearch = () => {
    history.push({
      pathname: "/project",
      state: {
        searchPhrase: searchPhrase,
      },
    });
  };
  //Aos
  useEffect(() => {
    dispatch(listJobs());
    dispatch(employeeListAll());
    AOS.init({
      duration: 1200,
      once: true,
    });
    console.log("FilteredJobs:", filteredJobs);
  }, [dispatch, filteredJobs]);

  const options = [
    { id: 1, text: "کارجویان" },
    { id: 2, text: "فرصت های شغلی" },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
      {/* Home Banner */}
      <section className="section home-banner row-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-7">
              <div className="banner-content aos" data-aos="fade-up">
                <div className="rating d-flex">
                  <h5>مورد اطمینان +۲ میلیون کاربر</h5>
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                  <i className="fas fa-star checked" />
                </div>
                <h1>
                  معتبر ترین سایت{" "}
                  <span className="orange-text">کاریابی و استخدامی</span>
                </h1>
                <form className="form" action={`${config.publicPath}project`}>
                  <div className="form-inner">
                    <div className="input-group">
                      {/* <span className="drop-detail"></span> */}
                      <input
                        // type="email"
                        className="form-control"
                        style={{ borderRadius: "130px" }}
                        onChange={(e) => setSearchPhrase(e.target.value)}
                      />
                      <button
                        className="btn btn-primary sub-btn"
                        onClick={(event) => {
                          event.preventDefault();
                          handleSearch();
                        }}
                        type="submit"
                      >
                        جستجو
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-5">
              <div className="banner-img aos" data-aos="fade-up">
                <img src={Banner_img} className="img-fluid" alt="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Home Banner */}
      {/* Our Feature */}
      <section className="section feature">
        <div className="container">
          {loadem ? (
            <Loader />
          ) : (
            <div className="row">
              {/* Feature Item */}
              <div className="col-md-4">
                <div
                  className="feature-item freelance-count aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon">
                    <img src={Icon_01} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content">
                    <h3>
                      {jobs.filter((job) => job.status === "فعال").length}
                    </h3>
                    <p>آگهی فعال</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-4">
                <div className="feature-item aos" data-aos="fade-up">
                  <div className="feature-icon">
                    <img src={Icon_02} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content">
                    <h3>{employeeList.length}</h3>
                    <p>کارجو</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
              {/* Feature Item */}
              <div className="col-md-4">
                <div
                  className="feature-item comp-project aos"
                  data-aos="fade-up"
                >
                  <div className="feature-icon">
                    <img src={Icon_03} className="img-fluid" alt="" />
                  </div>
                  <div className="feature-content">
                    <h3>
                      {jobs.filter((job) => job.status === "تکمیل شده").length}
                    </h3>
                    <p>استخدام</p>
                  </div>
                </div>
              </div>
              {/* /Feature Item */}
            </div>
          )}
        </div>
      </section>
      {/* /Our Feature */}
      {/*- Developed Project  */}
      <section className="section work">
        <div className="container-fluid">
          <div className="row">
            {/* Feature Item */}
            <div className="col-md-6 work-box bg1">
              <div className="work-content aos" data-aos="fade-up">
                <h2>من به نیروی کار نیاز دارم</h2>
                <p>
                  برای کسب کار خود آگهی منتشر کنید تا به گوش تمامی نیرو های کار
                  برسد!
                </p>
              </div>
            </div>
            {/* /Feature Item */}
            <div className="col-md-6 work-box bg2">
              <div className="work-content aos align-right" data-aos="fade-up">
                <h2>من به کار نیاز دارم</h2>
                <p>
                  آیا نیاز به کار دارید؟ تمامی استخدامی های کشور را متناسب با
                  مهارت های خود پیدا کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*- /Developed Project  */}
      {/* Projects */}
      <section className="section projects">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 mx-auto">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <div className="section-line align-right" />
                <h2 className="header-title">استخدام‌های مهم امروز</h2>
                <p>آگهی خود را پیدا کنید</p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <Slider
              // {...settings}
              // className="owl-carousel owl-theme review-slider owl-loaded owl-drag aos"
              // data-aos="fade-up"
            > */}
            {loading ? (
              <Loader />
            ) : (
              jobs
                .slice(0, 7)
                // .filter(
                //   (job) =>
                //     _.includes(
                //       job.title?.toLowerCase(),
                //       searchPhrase?.toLowerCase()
                //     ) ||
                //     _.includes(
                //       job.company.Name?.toLowerCase(),
                //       searchPhrase?.toLowerCase()
                //     )
                // )
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
                                      width: "30%",
                                      margin: "0 auto",
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
                                  <i className="fa fa-check-circle text-success verified ms-1" />
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
                                {item.job_skills?.slice(0, 3).map((item) => (
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
                )
            )}
            {/* </Slider> */}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="see-all aos" data-aos="fade-up">
                <Link to="/project" className="btn all-btn">
                  مشاهده همه آگهی‌های استخدام
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Projects */}
      {/* Subscribe */}
      <section className="section subscribe">
        <div className="container">
          <div className="row align-items-center aos" data-aos="fade-up">
            <div className="col-md-4">
              <img src={Subscribe} className="img-fluid" alt="subscribe" />
            </div>
            <div className="col-md-6 align-right">
              <h3>ایمیل خود را وارد کنید تا از تازه ترین آگهی ها مطلع شوید</h3>
              <p>این اطلاع رسانی به صورت هفتگی یا روزانه انجام می‌شود</p>
              <form action="#" method="POST">
                <div className="form-inner">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="آدرس ایمیل خود را وارد کنید"
                      style={{ borderRadius: "40px" }}
                    />
                    <button
                      className="btn btn-primary sub-btn"
                      // onClick={}
                      type="submit"
                    >
                      ثبت
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Subscribe */}
      {/* Top Instructor */}
      <TopDevelopers />

      {/* End Developer */}
      <Reviews />
      {/* News */}
      <section className="section news">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header text-center aos"
                data-aos="fade-up"
              >
                <div className="section-line" />
                <h2 className="header-title">اخبار استتخدام های دولتی</h2>
                <p>از جدید ترین استخدام های دولتی سراسری کشور مطلع شوید.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row blog-grid-row">
              <div className="col-md-4">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author"></div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">استخدام نیروی انتظامی </Link>
                    </h3>
                    <p className="blog-detail mb-0">
                      ضمن آرزوی موفقیت تیم «ای استخدام» برای کاربران شرکت کننده
                      در آزمون دانشگاه های افسری ارتش به اطلاع میرسانیم،
                      نتایج...
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-4">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author"></div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">آغاز استتخدام بانک سینا</Link>
                    </h3>
                    <p className=" blog-detail mb-0">
                      بانک سینا به منظور ارائه خدمات بهینه مالی و بانکی به
                      مشتریان و تکمیل نیروی انسانی خود مطابق با ضوابط و آیین...
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-4">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="#">
                      <img
                        className="img-fluid"
                        src={Blog_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="entry-meta meta-item">
                      <li>
                        <div className="post-author"></div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="#">آغاز استتخدام بانک دی</Link>
                    </h3>
                    <p className="blog-detail mb-0 ">
                      ...به گزارش روابط‌عمومی بانک دی؛ با توجه به نیاز این بانک
                      به نیروی متخصص در زمینه تولید، توسعه ، پشتیبانی و نگهداری
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / News */}
    </>
  );
};
export default Home;
