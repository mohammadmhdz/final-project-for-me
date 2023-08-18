import React from "react";
import { Link } from "react-router-dom";
import {
  about_details,
  profile_details,
  home_icon,
  loader_icon,
  logo_details,
  profile_img,
  Review_01,
  Review_02,
  Review_03,
  Tab_icon_09,
  Tab_icon_10,
  Tab_icon_11,
  Tab_icon_13,
} from "../imagepath";
import StickyBox from "react-sticky-box";
import { ProfileSidebar } from "../forfreelancer/sidebar/profilesidebar";

export const CompanyReview = () => {
  return (
    <>
      <div className="pro-post widget-box company-post align-right">
        <h3 className="pro-title">نظرات</h3>
        <div className="reviews company-review">
          <div className="review-content no-padding">
            <p className="mb-0">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
            <div className="review-top tab-reviews d-flex align-items-center">
              <div className="review-img">
                <Link to="#">
                  <img className="img-fluid" src={Review_01} alt="Post Image" />
                </Link>
              </div>
              <div className="review-info">
                <h3>
                  <Link to="#">علی کلهر</Link>
                </h3>
                <h5>۲۲ مرداد • ۹:۳۰ </h5>
              </div>
              {/* <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="average-rating">4.7</span>
                        </div> */}
            </div>
          </div>

          <div className="col-md-12 text-center">
            {/* <Link to="#" className="btn more-btn">
                        بارگذاری بیشتر{" "}
                        <img src={loader_icon} height={24} alt="User Image" />
                      </Link> */}
          </div>
        </div>
      </div>
      {/* /Reviews Tab Content */}
      {/* Post a comment */}
      <div className="pro-post widget-box company-post post-comment align-right">
        <h3 className="pro-title">نظر خود را ثبت کنید</h3>
        <form action="#">
          <div className="form-group">
            <label>نام نام خانوادگی</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>ایمیل</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>شماره تماس</label>
            <input type="text" className="form-control" />
          </div>
          {/* <div className="form-group">
                      <label>امتیاز</label>
                      <div className="rating">
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                      </div>
                    </div> */}
          <div className="form-group">
            <textarea
              className="form-control"
              rows={4}
              placeholder="نظر"
              defaultValue={""}
            />
          </div>
          <div className="post-btn">
            <button className="btn more-btn">ثبت</button>
          </div>
        </form>
      </div>
      {/* /Post a comment */}

      {/* /page-content */}
    </>
  );
};

// export default CompanyReview;
