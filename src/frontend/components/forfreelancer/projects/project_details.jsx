import React from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
// Import Images
import {
  company_img1,
  Img_01,
  Img_02,
  Img_03,
  Flags_de,
  Flags_us,
  Flags_es,
  Exp_Icon_01,
  Exp_Icon_02,
  Exp_Icon_03,
  Exp_Icon_04,
  Exp_Icon_05,
  Exp_Icon_06,
  Icon_15,
  Icon_date,
  Icon_money,
  Icon_location,
  Icon_work,
} from "../../imagepath";

const ProjectDetails = (props) => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row mt-5 align-right">
            <div className="col-md-12">
              <div className="profile">
                <div className="profile-box">
                  <div className="provider-widget row">
                    <div className="pro-info-left col-md-8">
                      <div className="profile-info">
                        <h2 className="profile-title">
                          طراح رابط کاربری (UI/UX)
                        </h2>
                        <Link
                          to="/company-details"
                          className="profile-position"
                        >
                          {" "}
                          فراوب | Faraweb
                        </Link>
                        <div />
                        <ul className="profile-preword align-items-center">
                          <li>
                            <i className="fa fa-clock" /> ۲ روز پیش
                          </li>
                          <li>
                            <a href="#" className="btn full-btn">
                              تمام وقت
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pro-info-right profile-inf col-md-4">
                      <ul className="profile-right">
                        <li>
                          {/* <div className="amt-hr">
                          ۱۲ میلیون <p></p>
                        </div> */}
                        </li>
                      </ul>
                      <div className="d-flex align-items-center justify-content-md-end justify-content-center">
                        <a href="">
                          <i className="fa fa-heart heart fa-2x ms-2 red-text" />
                        </a>
                        <a
                          data-bs-toggle="modal"
                          href="#file"
                          className="btn bid-btn"
                        >
                          ارسال رزومه{" "}
                          <i className="fa fa-long-arrow-alt-left me-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Job Detail */}
                <div className="post-widget">
                  <div className="pro-content">
                    <div className="row align-right">
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-lg-between pro-post job-type">
                          <div>
                            <p>مهلت ارسال رزومه </p>
                            <h6>۵۸ روز</h6>
                          </div>
                          <img
                            className="img-fluid"
                            alt=""
                            src={Icon_date}
                            style={{ height: "23px" }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-lg-between pro-post job-type">
                          <div>
                            <p>شهر</p>
                            <h6>تهران</h6>
                          </div>
                          <img
                            className="img-fluid"
                            alt=""
                            src={Icon_location}
                            style={{ height: "23px" }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-lg-between pro-post job-type">
                          <div>
                            <p>سابقه کار</p>
                            <h6>بدون محدودیت</h6>
                          </div>
                          <img
                            className="img-fluid"
                            alt=""
                            src={Icon_work}
                            style={{ height: "23px" }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 col-md-3">
                        <div className="d-flex align-items-center justify-content-lg-between pro-post job-type">
                          <div>
                            <p>حقوق</p>
                            <h6>۱۲ میلیون</h6>
                          </div>
                          <img
                            className="img-fluid"
                            alt=""
                            src={Icon_money}
                            style={{ height: "23px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Job Detail */}

                {/* Senior Animator  */}
                <div className="pro-post widget-box align-right">
                  <h3 className="pro-title">توضیحات</h3>
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
                {/* /Senior Animator  */}
                {/* Job Activity  */}
                <div className="pro-post project-widget widget-box align-right">
                  <h3 className="pro-title">نیاز‌مندی ها</h3>
                  <div className="pro-content">
                    <div className="mb-0">
                      <ul className="activity-list clearfix">
                        <li>
                          عنوان:{" "}
                          <span>
                            متن
                            <i
                              className="fa fa-question-circle"
                              data-bs-toggle="tooltip"
                              title="Lorem Ipsum"
                            />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Job Activity  */}
                {/* Skills Required  */}
                <div className="pro-post project-widget widget-box align-right">
                  <h3 className="pro-title">مهارت های مورد نیاز</h3>
                  <div className="pro-content">
                    <div className="tags">
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
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Whiteboard
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          HTML
                        </span>
                      </a>
                      <a href="">
                        <span className="badge badge-pill badge-design">
                          Whiteboard
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* /Skills Required  */}
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <div className="freelance-widget widget-author mt-2 pro-post">
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
                        <Link
                          to="./company-details"
                          className="author-location"
                        >
                          فراوب|FaraWeb{" "}
                          <i className="fa fa-check-circle text-success verified" />
                        </Link>
                      </div>
                      <div className="freelance-info">
                        <div className="freelance-location">
                          <i className="fa fa-map-marker ms-1" />
                          تهران
                        </div>
                        <div className="rating">
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star filled" />
                          <i className="fa fa-star" />
                          <span className="average-rating">4.7 (32)</span>
                        </div>
                      </div>
                      {/* <button
                      type="button"
                      className="btn btn-lg btn-primary rounded-pill"
                    >
                      <i className="fab fa-whatsapp me-2" />
                      Follow
                    </button> */}
                      {/* <div className="follow-details">
                      <div className="row">
                        <div className="col-6 py-4 text-center">
                         
                          <h6 className="text-uppercase text-muted">
                            Following
                          </h6>
                         
                          <h4 className="mb-0">49</h4>
                        </div>
                        <div className="col-6 py-4 text-center border-start">
                         
                          <h6 className="text-uppercase text-muted">
                            Followers
                          </h6>
                          
                          <h4 className="mb-0">422</h4>
                        </div>
                      </div>
                    </div> */}
                      <div>
                        <div className="row align-items-center ">
                          <div className="col">
                            <h6 className="text-sm text-end mb-0">عضویت از:</h6>
                          </div>
                          <div className="col-auto">
                            <span className="text-sm">۲۱ فروردین ۱۴۰۲</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="text-sm text-end mb-0">
                              فرصت های شغلی منتشر شده:
                            </h6>
                          </div>
                          <div className="col-auto">
                            <span className="text-sm">127</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="text-sm text-end mb-0">
                              <i className="fa fa-instagram ms-2" />
                              وبسایت
                            </h6>
                          </div>
                          <div className="col-auto">
                            <span className="text-sm">faraweb.com</span>
                          </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row align-items-center">
                          <div className="col">
                            <h6 className="text-sm text-end mb-0">
                              <i className="fa fa-linkedin ms-2" />
                              لینکداین
                            </h6>
                          </div>
                          <div className="col-auto">
                            <span className="text-sm">faraweb@</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Link Widget */}
                <div className="pro-post widget-box post-widget align-right">
                  <h3 className="pro-title">لینک پروفایل</h3>
                  <div className="pro-content pt-0">
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
                {/* Attachments Widget */}
                <div className="pro-post widget-box post-widget pb-0 align-right">
                  <h3 className="pro-title">اطلاعات استخدام شرکت</h3>
                  <div className="pro-content">
                    <div className="row">
                      <div className="col-6">
                        <div className="pro-post client-list">
                          <p>کل آگهی ها</p>
                          <h6 className="bg-red">48</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="pro-post client-list">
                          <p>نرخ استخدام</p>
                          <h6 className="bg-blue">22</h6>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="pro-post client-list">
                          <p>فرصت های شغلی فعال</p>
                          <h6 className="bg-green">48</h6>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="pro-post client-list">
                          <p>استخدام شده</p>
                          <h6 className="bg-pink">48</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Attachments Widget */}
                {/* Share Widget */}

                {/* /Share Widget */}
              </StickyBox>
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <>
        {/* The Modal */}
        <div className="modal fade" id="file">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">SEND PROPOSALS</h4>
                <span className="modal-close">
                  <a href="#" data-bs-dismiss="modal" aria-label="Close">
                    <i className="fa fa-times-circle red-text" />
                  </a>
                </span>
              </div>
              <div className="modal-body">
                <div className="modal-info">
                  <form>
                    <div className="feedback-form">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Price"
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Estimated Hours"
                          />
                        </div>
                        <div className="col-md-12 form-group">
                          <textarea
                            rows={5}
                            className="form-control"
                            placeholder="Cover Letter"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="proposal-features">
                      <div className="proposal-widget proposal-success">
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            Stick this Proposal to the Top
                          </span>
                          <span className="proposal-text float-end">
                            $12.00
                          </span>
                        </label>
                        <p>
                          The sticky proposal will always be displayed on top of
                          all the proposals.
                        </p>
                      </div>
                      <div className="proposal-widget proposal-light">
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            $ Make Sealed Proposal
                          </span>
                          <span className="proposal-text float-end">$7.00</span>
                        </label>
                        <p>
                          The sealed proposal will be sent to the project author
                          only it will not be visible publically.
                        </p>
                      </div>
                      <div className="proposal-widget proposal-danger">
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" />
                          <span className="proposal-text">
                            $ Make Sealed Proposal
                          </span>
                          <span className="proposal-text float-end">
                            $15.00
                          </span>
                        </label>
                        <p>
                          The featured proposal will have a distinctive color
                          and popped up between other proposals to get the
                          author's attention.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 submit-section">
                        <label className="custom_check">
                          <input type="checkbox" name="select_time" />
                          <span className="checkmark" /> I agree to the Terms
                          And Conditions
                        </label>
                      </div>
                      <div className="col-md-12 submit-section text-end">
                        <button
                          className="btn btn-primary submit-btn"
                          type="submit"
                        >
                          SUBMIT PROPOSAL
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /The Modal */}
      </>
    </>
  );
};
export default ProjectDetails;
