import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Review = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="pro-title without-border">نظرات</h3>
                </div>
                <div className="card-body">
                  <div className="reviews">
                    <div className="review-content no-padding">
                      <h4>بهترین عملکرد در پاسخ دهی سریع و منظم</h4>
                      <div className="rating">
                        <span className="average-rating">4.6</span>
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="mb-0">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
                    </div>
                    <div className="review-content no-padding">
                      <h4>بهترین عملکرد در پاسخ دهی سریع و منظم</h4>
                      <div className="rating">
                        <span className="average-rating">4.6</span>
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="mb-0">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                      </p>
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
};
export default Review;
