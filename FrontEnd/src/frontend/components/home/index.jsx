import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TopDevelopers } from "./slider/topdevelopers";
import { Reviews } from "./review";
// Import Images
import {
  Banner_img,
  Icon_01,
  Icon_02,
  Icon_03,
  Project_01,
  Project_02,
  Project_03,
  Project_04,
  Img_02,
  Img_03,
  Img_04,
  Subscribe,
  Blog_01,
  Blog_02,
  Blog_03,
  company_img1,
} from "../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import config from "config";
// redux
import { useDispatch , useSelector } from "react-redux";
import { listJobs } from "../../../actions/jobActions";
const Home = () => {
  const dispatch = useDispatch();
  const jobListReducer = useSelector(state => state.jobList)
  const {jobs} = jobListReducer
  //Aos
  useEffect(() => {
dispatch(listJobs())
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const options = [
    { id: 1, text: "کارجویان" },
    { id: 2, text: "فرصت های شغلی" },
  ];
  console.log(jobs)
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
                      <span className="drop-detail"></span>
                      <input type="email" className="form-control" />
                      <button className="btn btn-primary sub-btn" type="submit">
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
                  <h3>۲۷,۳۰۵</h3>
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
                  <h3>۱۰,۶۶۱</h3>
                  <p>کارجو</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
            {/* Feature Item */}
            <div className="col-md-4">
              <div className="feature-item comp-project aos" data-aos="fade-up">
                <div className="feature-icon">
                  <img src={Icon_03} className="img-fluid" alt="" />
                </div>
                <div className="feature-content">
                  <h3>۳,۶۶۱</h3>
                  <p>استخدام</p>
                </div>
              </div>
            </div>
            {/* /Feature Item */}
          </div>
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
          {jobs?.map((item) =>(

          <div className="row">
            {/*- Project Item  */}
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
                  <div className="author-heading">
                    <div className="profile-img">
                      <a href="#">
                        <img src={company_img1} alt="author" />
                      </a>
                    </div>
                    <div className="profile-name">
                      <div className="author-location">
                        فناوری سروین | Sarveen Technologies{" "}
                        <i className="fa fa-check-circle text-success verified" />
                      </div>
                    </div>
                    <div className="freelance-info">
                      <h3>
                        <a href="#">طراح UI/UX</a>
                      </h3>
                      <div className="freelance-location mb-1">
                        <i className="fa fa-clock" /> ۲ روز پیش
                      </div>
                      <div className="freelance-location">
                        <i className="fa fa-map-marker-alt ms-1" />
                        تهران
                      </div>
                    </div>
                    <div className="freelance-tags">
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          After Effects
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Illustrator
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          HTML
                        </span>
                      </a>
                    </div>
                    {/* <div className="freelancers-price">حقوق</div> */}
                    {/* <div className="freelancers-price">$40-$500</div> */}
                  </div>
                  <div className="counter-stats ">
                    <ul>
                      <li>
                        <h5> حقوق</h5>
                        <h3 className="counter-value">۱۵ میلیون</h3>
                      </li>

                      <li>
                        <h3 className="counter-value">
                          <h5>نوع همکاری</h5>
                          <span className="jobtype">تمام وقت</span>
                        </h3>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/project-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    مشاهده بیشتر
                  </Link>
                </div>
              </div>
            </div>
            {/*- /Project Item  */}
          </div>
          ))
        }
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
                    <button className="btn btn-primary sub-btn" type="submit">
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
                    <Link to="/blog-details">
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
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_02} alt="Post Author" />{" "}
                            <span> بانک ملی</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">آغاز استتخدام بانک ملی</Link>
                    </h3>
                    <p className="blog-detail mb-0">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-4">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
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
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_02} alt="Post Author" />{" "}
                            <span> بانک ملی</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">آغاز استتخدام بانک ملی</Link>
                    </h3>
                    <p className=" blog-detail mb-0">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
                    </p>
                  </div>
                </div>
                {/* /Blog Post */}
              </div>
              <div className="col-md-4">
                {/* Blog Post */}
                <div className="blog grid-blog aos" data-aos="fade-up">
                  <div className="blog-image">
                    <Link to="/blog-details">
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
                        <div className="post-author">
                          <Link to="/developer-details">
                            <img src={Img_02} alt="Post Author" />{" "}
                            <span> بانک ملی</span>
                          </Link>
                        </div>
                      </li>
                      <li>
                        <i className="far fa-clock" /> ۲ تیر ۱۴۰۲
                      </li>
                    </ul>
                    <h3 className="blog-title">
                      <Link to="/blog-details">آغاز استتخدام بانک ملی</Link>
                    </h3>
                    <p className="blog-detail mb-0 ">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است
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
