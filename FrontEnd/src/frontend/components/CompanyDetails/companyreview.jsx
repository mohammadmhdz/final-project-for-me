import React, { useState } from "react";
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
import { useEffect } from "react";
import moment from "jalali-moment";
// redux
import { companyReviewGet , postReview} from "../../../actions/companyActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../Loader";

export const CompanyReview = ({companyId}) => {
  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  const dispatch = useDispatch();
  const companyReviewReducer = useSelector((state) => state.companyReview);
  const companyPostReviewReducer = useSelector((state) => state.companyReviewPost);
  const { companyReviewList , loading} = companyReviewReducer;
  const { postDataArray } = companyPostReviewReducer;
  const [reviewData , setReviewData ] = useState()

  const handleChange = (e) => {
    setReviewData({
      ["employee"] : +localItem.associated_id,
      ["Company"] : companyId ,
      ["date"] : null ,
      [e.target.id] : e.target.value ,
      ["status"] : "درانتظار تایید" ,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   dispatch(postReview(reviewData))
  }

  useEffect(() => {
    dispatch(companyReviewGet(companyId));
  }, [dispatch]);
  console.log(companyReviewList, "review list");
  console.log(reviewData, "id");

  return (
    <>
        <div className="pro-post widget-box company-post align-right">
          <h3 className="pro-title">نظرات</h3>

          {loading ? <Loader/> :  companyReviewList?.map((items) => (
            items.status === "فعال" ? (

            <div className="reviews company-review">
              <div className="review-content no-padding">
                <div className="review-top tab-reviews d-flex align-items-center">
                  {/* <div className="review-img">
                    {/* <Link to="#">
                      <img
                        className="img-fluid"
                        src={Review_01}
                        alt="Post Image"
                      />
                    </Link> 
                  </div> */}
                  <div className="review-info">
                    <h3>
                    <Link className="font-semibold text-primary"
                                    to={{
                                     pathname : "/developer-profile" ,
                                      state : {idInfo: +items.employee} 
                                      }}>
                             <span>{items.users_name}</span>
                            </Link>
                    </h3>
                    <p className="mb-0">{items.content}</p>
                    {/* <h5>۲۲ مرداد • ۹:۳۰ </h5> */}
                    <h5>
                      <p>
                        {moment(items.date, "YYYY/MM/DD")
                          .locale("fa")
                          .format("YYYY/MM/DD")}
                      </p>
                    </h5>
                  </div>
                </div>
              </div>

                <div className="col-md-12 text-center"></div>
            </div>
            ):null    
          ))}
              
     
      </div>

      {/* Post a comment */}
      {localItem.role === "employee" ? (
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

          <div className="form-group">
            <textarea
            onChange={handleChange}
            id="content"
            // value={reviewData?.content}
              className="form-control"
              rows={4}
              placeholder="نظر"
              defaultValue={""}
            />
          </div>
          <div className="post-btn">
            <button onClick={handleSubmit} className="btn more-btn">ثبت</button>
          </div>
        </form>
      </div>
      )
    :localItem.role === "employer" ? null :  
    ( <Link className="font-semibold text-primary"
    to="/login">
    <span>برای نظر دادن لطفا وارد شوید</span>
    </Link> )}
      {/* /Post a comment */}
    </>
  );
      }

// export default CompanyReview
