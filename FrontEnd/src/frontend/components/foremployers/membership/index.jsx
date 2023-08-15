import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";

const Membership = (props) => {
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Breadcrumb */}

      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5 align-right">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8 mx-auto">
              <div className="freelance-title" id="plan">
                <h3>بسته های کارفرمایان</h3>
                <p> بهترین بسته را با توجه به نیاز های خود انتخاب کنید</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="package-detail">
                    <h4>بسته عضویت بنیادی </h4>
                    {/* <p>Go Pro, Best for the individuals</p> */}
                    <h3 className="package-price">۱۰۰ هزار تومان</h3>
                    <div className="package-feature">
                      <ul>
                        <li>امکان درج ده آگهی شغلی در سایت</li>
                        <li>نمایش آگهی در صفحه اصلی سایت به مدت یک ساعت.</li>
                        <li> امکان جستجوی و مشاهده رزومه‌های کارجویان</li>

                        <li>امکان به روزرسانی یا حذف آگهی در هر زمان</li>
                        <li className="non-check">
                          {" "}
                          پشتیبانی اختصاصی و اولویت در رفع مشکلات فنی
                        </li>
                        <li className="non-check">
                          {" "}
                          امکان انتشار آگهی در شبکه های اجتماعی و سایت های مرتبط
                        </li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary price-btn btn-block">
                      اتنخاب
                    </a>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="package-detail">
                    <h4>بسته عضویت پیشرفته </h4>

                    <h3 className="package-price">۲۱۰ هزار تومان</h3>
                    <div className="package-feature">
                      <ul>
                        <li>تمامی ویژگی‌های بسته عضویت بنیادی </li>
                        <li>نمایش آگهی در صفحه اصلی سایت به مدت یک هفته </li>
                        <li> برجسته کردن آگهی در نتایج جستجو</li>
                        <li> ارائه آمار دقیق درباره بازدید آگهی</li>
                        <li>
                          امکان انتشار آگهی در شبکه های اجتماعی و سایت های مرتبط{" "}
                        </li>
                        <li>پشتیبانی اختصاصی و اولویت در رفع مشکلات فنی</li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary price-btn btn-block">
                      انتخاب
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="member-plan pro-box">
                    <div className="pro-head">
                      <h2>
                        <i
                          className="fa fa-check-circle orange-text"
                          aria-hidden="true"
                        />{" "}
                        اطلاعات بسته شما
                      </h2>
                    </div>
                    <div className="pro-body member-detail">
                      <div className="row">
                        <div className="col-6">
                          <h4 className="mb-0">پیشرفته</h4>
                          <div className="yr-amt">ماهانه</div>
                          <div className="expiry-on">انقضا</div>
                          <div className="expiry">۸ مهر ۱۴۰۲</div>
                        </div>
                        <div className="col-6 change-plan">
                          <h3>۲۱۰ هزار تومان</h3>
                          <div className="yr-duration">مدت : ۱ ماه</div>
                        </div>
                      </div>
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
export default Membership;
