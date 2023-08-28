import React , {useEffect} from "react";
import { Link , useLocation } from "react-router-dom";
import moment from "jalali-moment";
import StickyBox from "react-sticky-box";
// Import Images
import {
  Logo_01,
  Img_02,
  Img_03,
  Project_img,
  Project_1,
  Project_2,
  Project_3,
  Project_4,
  Project_5,
  Project_6,
  Project_7,
  Flags_pl,
  Tab_icon_01,
  Tab_icon_02,
  Tab_icon_03,
  Tab_icon_04,
  Tab_icon_05,
  Tab_icon_06,
  Tab_icon_08,
  Img_01,
  Icon_10,
  Icon_11,
  Avatar_2,
} from "../../imagepath";
// redux
import { useDispatch, useSelector} from "react-redux";
import { employeeDetails , employeePortfolioDetails } from "../../../../actions/employeeActions"

const DeveloperProfile = (props) => {
  const location = useLocation()
  const  idInfo  = location.state.idInfo
  
  // 
  const dispatch = useDispatch();
  const employeeDetailsList = useSelector((state) => state.employeeDetails);
  const Portfolio = useSelector((state) => state.employeePortfolio);
  const { employee } = employeeDetailsList;
  const { employeePortfolioArray } = Portfolio;

  useEffect(() => {
  // we must take the id from where we reach here
    dispatch(employeeDetails(idInfo))
    dispatch(employeePortfolioDetails(idInfo))
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  },[dispatch]);
  // console.log(employee , "EMPLOYEE INFO")
  console.log(employeePortfolioArray , "EMPLOYEE PORTFOLIO INFO")


  // console.log(location , "loc");
  return (
    <>
    
      {/* Breadcrumb */}
      <div className="breadcrumb-bar" />
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row align-right mt-5">
            <div className="col-md-12">
              <div className="profile">
                <div className="profile-box">
                  <div className="provider-widget">
                    <div className="pro-info-left">
                      <div className="provider-img">
                        <img src={employee.image !== null ? `http://127.0.0.1:8000/${employee.image}`:Img_01 } alt="User" />
                      </div>
                      <div className="profile-info">
                        <h2 className="profile-title">{employee.user?.first_name} {employee.user?.last_name}</h2>
                        <p className="profile-position">{employee.perfession_title} </p>
                        <div>
                          <a href="#" className="btn full-btn">
                          {employee.cooperation_type}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="pro-info-right profile-inf"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="pro-view">
                {/* Tab Detail */}
                <nav className="provider-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        href="#overview"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_01}
                        />
                        <p className="bg-red">درباره</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#bids" data-bs-toggle="tab">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_02}
                        />
                        <p className="bg-blue">پروژه ها</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        href="#skill"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_05}
                        />
                        <p className="bg-pink"> مهارت ها</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#education"
                        data-bs-toggle="tab"
                      >
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={Tab_icon_04}
                        />
                        <p className="bg-yellow"> تحصیلات</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#experience"
                        data-bs-toggle="tab"
                      >
                        <img alt="User Image" height={28} src={Tab_icon_03} />
                        <p className="bg-violet">سوابق شغلی</p>
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Detail */}
                {/* Overview Tab Content */}
                <div className="pro-post widget-box align-right" id="overview">
                  <h3 className="pro-title">درباره</h3>
                  <div className="pro-content">
                    <p>
                     {employee.about}
                    </p>
                  </div>
                </div>
                <div
                  className="pro-post project-widget widget-box  align-right develop-experiance"
                  id="experience"
                >
                  <h3 className="pro-title">سوابق شغلی</h3>
                  <div className="pro-content">
                    <div className="row">
                      {
                  employee.Experiences?.map((item) => (
                        <div
                          className="col-lg-4 col-md-6 d-flex"
                          style={{ height: "100%" }}
                          >
                        <div className="experiance-list d-flex  flex-column">
                          <div className="experiance-logo d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_10} />
                          </div>
                          <h4>{item.title}</h4>
                          <h5>{item.company_name}</h5>
                          <h5> {moment(item.from_date, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")} الی {moment(item.to_date, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}</h5>
                          <p>{/* description */}</p>
                        </div>
                      </div>
                          ))
                      }
                   
                    </div>
                  </div>
                </div>
                {/* /Experience Tab Content */}
                {/* Educational Tab Content */}
                <div
                  className="pro-post project-widget widget-box align-right"
                  id="education"
                >
                  <h3 className="pro-title">تحصیلات</h3>
                  <div className="pro-content">
                    <div className="row">
                      { employee.Education?.map((item)=> (
                      <div
                        className="col-lg-6 col-md-6 d-flex"
                        style={{ height: "100%" }}
                      >
                        <div className="experiance-list">
                          <div className="experiance-logo logo-bg d-flex align-items-center justify-content-center">
                            <img className="img-fluid" alt="" src={Icon_11} />
                          </div>
                          <h4>{item.degree} </h4>
                          <h5>{moment(item.from_date, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY")} الی {moment(item.to_date, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY")}</h5>
                          <h5>{item.institute}</h5>
                        </div>
                      </div>
                      )) }
                    </div>
                  </div>
                </div>
                <div
                  className="pro-post project-widget widget-box align-right"
                  id="project"
                >
                  <h3 className="pro-title">نمونه کارها</h3>
                  <div className="pro-content">
                    <div className="row">
                      
                    {employeePortfolioArray.length !== 0 ? 
                     (employeePortfolioArray?.map((item) => (
                    
                       <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div className="project-widget">
                          <div className="pro-image">
                            <a data-fancybox="gallery2">
                              <img
                                className="img-fluid"
                                alt="User Image"
                                src={item.image !== null ? `http://127.0.0.1:8000/${item.image}` : Avatar_2 }
                              />
                            </a>
                          </div>
                          <div className="pro-detail">
                            {/* <h3 className="pro-name">{item.description}</h3> */}
                            <p className="pro-designation">{item.title === null ?  "نمونه جهت نمایش وجود ندارد" : item.title}</p>
                          </div>
                        </div>
                      </div>
                     )))
                     :(<h5>نمونه کاری جهت نمایش وجود ندارد</h5>) }
                     
                    </div>
                  </div>
                </div>
                {/* /Educational Tab Content */}
                {/* Technical Tab Content */}
                <div
                  className="pro-post project-widget widget-box technical-skill align-right"
                  id="skill"
                >
                  <h3 className="pro-title">مهارت های فنی</h3>
                  <div className="pro-content">
                    <div className="tags">
                      {employee.skills?.map((item)=> (
                        <span className="badge badge-pill badge-skills">
                        {item.title}
                         </span>
                          )) }

                    </div>
                  </div>
                </div>
                {/* /Technical Tab Content */}
              </div>
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              <div className="pro-post widget-box language-widget align-right">
                <div className="row">
                  <div className="col-10">
                    <h4 className="pro-title mb-0">زبان </h4>
                  </div>
                  <div className="col-2 text-end"></div>
                </div>
                <ul className="latest-posts pro-content">
                {employee.Language?.map((item)=> (

                  <li>
                    <p>{item.language}</p>
                    <div className="progress progress-md mb-0">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${item.rate}%` }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </li>   
                ))}
                </ul>
              </div>
              <div className="pro-post widget-box about-widget align-right">
                <div className="row">
                  <div className="col-10">
                    <h4 className="pro-title mb-0">اطلاعات فردی </h4>
                  </div>
                  <div className="col-2 text-end"></div>
                </div>
                <ul className="latest-posts pro-content pt-0">
                  <li>
                    <p>جنسیت</p>
                    <h6>{employee.gender}</h6>
                  </li>
                  <li>
                    <p>ایمیل</p>
                    <h6>{employee.user?.email}</h6>
                  </li>
                  <li>
                    <p>شهر</p>
                    <h6>{employee.city?.name}</h6>
                  </li>
                </ul>
              </div>
              {/* Categories */}
              <div className="pro-post category-widget align-right">
                <div className="widget-title-box">
                  <h4 className="pro-title">شبکه های اجتماعی </h4>
                </div>
                <ul className="latest-posts pro-content ">
                  <li>
                    <a href="#">http://www.facebook.com/john...</a>
                  </li>
                  <li>
                    <a href="#">http://www.Twitter.com/john...</a>
                  </li>
                  <li>
                    <a href="#">Http://www.googleplus.com/john... </a>
                  </li>
                  <li>
                    <a href="#"> Http://www.behance.com/john...</a>
                  </li>
                  <li>
                    <a href="#"> Http://www.pinterest.com/john...</a>
                  </li>
                </ul>
              </div>
              {/* /Categories */}
              {/* Link Widget */}
              {/* <div className="pro-post widget-box post-widget align-right">
                <h3 className="pro-title">لینک پروفایل</h3>
                <div className="pro-content">
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
              </div> */}
              {/* /Link Widget */}
            </div>
            {/* /Blog Sidebar */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default DeveloperProfile;
