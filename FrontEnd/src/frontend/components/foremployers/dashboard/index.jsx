import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from "apexcharts";
import {
  home_icon,
  Img_01,
  Img_02,
  Img_03,
  Img_04,
  Img_05,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
import  moment from "jalali-moment";

// redux
import {
  companyDetails,
  companyJobsListAction,
} from "../../../../actions/companyActions";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = (props) => {
  var chartprofileoptions = {
    series: [
      {
        name: "profile view",
        data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350],
      },
    ],
    chart: {
      height: 360,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#32795b"],
    stroke: {
      curve: "straight",
      width: [1],
    },
    markers: {
      size: 4,
      colors: ["#32795b"],
      strokeColors: "#32795b",
      strokeWidth: 1,
      hover: {
        size: 7,
      },
    },
    grid: {
      position: "front",
      borderColor: "#ddd",
      strokeDashArray: 7,
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  };

  var chartradialOptions = {
    series: [
      companyDetail?.completed_jobs_count,
      companyDetail?.completed_jobs_count,
      companyDetail?.completed_jobs_count,
      companyDetail?.completed_jobs_count,
    ],
    chart: {
      toolbar: {
        show: false,
      },
      height: 250,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "50%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: ["#7B46BE", "#FA6CA4", "#FACD3A", "#24C0DC"],
    labels: ["Applied Jobs", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: false,
      floating: true,
      fontSize: "16px",
      position: "bottom",
      offsetX: 160,
      offsetY: 15,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  // redux
  const dispatch = useDispatch();
  const companyDetailsList = useSelector((state) => state.companyDetails);
  const companyJobsAllList = useSelector((state) => state.companyJobsList);
  const { companyJobsListArray } = companyJobsAllList;
  const { companyDetail } = companyDetailsList;

  const daysBetween =(input) => {
    const now = new Date().getDate()
    const date = new Date(input).getDate()
    return now - date
  }

  useEffect(() => {
    dispatch(companyDetails(localItem.associated_id));
    //
    dispatch(companyJobsListAction(localItem.associated_id));
    let chartprofileoptionsColumn = document.getElementById("chartprofile");
    let chartprofileoptionsChart = new ApexCharts(
      chartprofileoptionsColumn,
      chartprofileoptions
    );
    chartprofileoptionsChart.render();

    let invoiceColumn = document.getElementById("chartradial");
    let invoiceChart = new ApexCharts(invoiceColumn, chartradialOptions);
    invoiceChart.render();
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  }, [dispatch]);
  console.log(companyDetail, "companyDetail");
  console.log(companyJobsListArray, "companyJobsListArray");

  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row mt-5">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="dashboard-sec">
                <div className="row align-right">
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          فرصت های شغلی منتشر شده
                        </div>
                        <div className="dash-widget-count">
                          {companyDetail.all_jobs_count}
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/manage-projects"
                          className="d-flex justify-content-md-between"
                        >
                          مشاهده بیشتر <i className="fa fa-arrow-left " />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          فرصت های شغلی فعال
                        </div>
                        <div className="dash-widget-count">
                          {companyDetail.active_jobs_count}
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/manage-projects"
                          className="d-flex justify-content-md-between"
                        >
                          مشاهده بیشتر <i className="fa fa-arrow-left " />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">استخدام</div>
                        <div className="dash-widget-count">
                          {companyDetail.completed_jobs_count}
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/manage-projects"
                          className="d-flex justify-content-md-between"
                        >
                          مشاهده بیشتر <i className="fa fa-arrow-left " />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chart Content */}
                <div className="row align-right">
                  <div className="col-xl-8 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">بازدید پروفایل</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              ماهانه
                            </button>
                            <div className="dropdown-menu dropdown-menu-start">
                              <a href="" className="dropdown-item">
                                هفتگی
                              </a>
                              <a href="" className="dropdown-item">
                                ماهانه
                              </a>
                              <a href="" className="dropdown-item">
                                سالانه
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartprofile" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="card-title">آنالیز آماری</h5>
                          <div className="dropdown">
                            <button
                              className="btn btn-white btn-sm dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              ماهانه
                            </button>
                            <div className="dropdown-menu dropdown-menu-start">
                              <a href="" className="dropdown-item">
                                هفتگی
                              </a>
                              <a href="" className="dropdown-item">
                                ماهانه
                              </a>
                              <a href="" className="dropdown-item">
                                سالانه
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="chartradial" />
                        <ul className="static-list">
                          {/* <li>
                            <span>
                              <i className="fa fa-circle text-violet me-1" />{" "}
                              درخواست های ارسال شده
                            </span>{" "}
                            <span className="sta-count">{companyDetail.completed_jobs_count}</span>
                          </li> */}
                          <li>
                            <span>
                              <i className="fa fa-circle text-blue me-1" /> 
                              فرصت های شغلی منتشر شده
                            </span>{" "}
                            <span className="sta-count">{companyDetail.all_jobs_count}</span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-circle text-pink me-1" /> فرصت
                              های شغلی فعال
                            </span>{" "}
                            <span className="sta-count">{companyDetail.active_jobs_count}</span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-circle text-yellow me-1" />{" "}
                              استخدام
                            </span>{" "}
                            <span className="sta-count">{companyDetail.completed_jobs_count}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chart Content */}
                {/* Past Earnings */}
                <div className="row align-right">
                  <div className="col-md-12">
                    <div className="card card-table">
                      <div className="card-header">
                        <div className="row">
                          <div className="col">
                            <h4 className="card-title">
                              فرصت های شغلی اخبرا اضافه شده
                            </h4>
                          </div>
                          <div className="col-auto">
                            <Link
                              to="/manage-projects"
                              className="btn-right btn btn-sm fund-btn"
                            >
                              مشاهده همه
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive table-job">
                          <table className="table table-hover table-center mb-0">
                            <thead className="thead-pink">
                              <tr>
                                <th>جزییات</th>
                                <th>نوع همکاری</th>
                                <th>حقوق</th>
                                <th>ایجاد شده در</th>
                                <th>تعداد درخواست ها</th>
                                <th className="text-end"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {companyJobsListArray.map((item) => (


                              <tr>
                                <td>
                                  <span className="detail-text">
                                    {item.title}
                                  </span>
                                  <span className="d-block text-expiry">
                                   تاریخ انقضا : {daysBetween(item.published_at)}
                                  </span>
                                </td>
                                <td>{item.job_type}</td>
                                <td>
                                  <span className="table-budget">حقوق</span>{" "}
                                  <span className="d-block text-danger">
                                    {item.salary_type === "توافقی" ? item.salary_type : `${item.salary_amount} میلیون `}
                                  </span>
                                </td>
                                <td>{moment(item.published_at, "YYYY/MM/DD")
                                            .locale("fa")
                                            .format("YYYY/MM/DD")}</td>
                              <td>{item.num_requests}</td>
                                <td className="text-end">
                                <Link   className="text-success" 
                                         to={{pathname : "/project-proposals" ,
                                         state : {job: item} 
                                      }}>
                                  مشاهده
                                  </Link>
                                </td>
                              </tr> 
                              ))  
                            }

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Past Earnings */}
                <div className="row">
                  {/* Plan  Details*/}
                  {/* <div className="col-xl-6 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row justify-content-between align-items-center">
                          <div className="col">
                            <h5 className="card-title">
                              Membership Plan Details
                            </h5>
                          </div>
                          <div className="col-auto">
                            <a
                              href=""
                              className="btn-right btn btn-sm fund-btn"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <div className="plan-details">
                              <h4>The Ultima</h4>
                              <div className="yr-amt">Anually Price</div>
                              <h4>$1200</h4>
                              <div className="yr-duration">
                                Duration: One Year
                              </div>
                              <div className="expiry">Expiry: 24 JAN 2022</div>
                              <Link
                                to="/membership-plans"
                                className="btn btn-primary btn-plan"
                              >
                                Change Plan
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="plan-feature">
                              <ul>
                                <li>12 Project Credits</li>
                                <li>10 Allowed Services</li>
                                <li>20 Days visibility</li>
                                <li>5 Featured Services</li>
                                <li>20 Days visibility</li>
                                <li>30 Days Package Expiry</li>
                                <li>Profile Featured</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* /Plan  Details */}
                  {/* Notifications */}
                  <div className="col-xl-6 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row justify-content-between align-items-center align-right">
                          <div className="col">
                            <h5 className="card-title">اعلانات</h5>
                          </div>
                          <div className="col-auto">
                            <Link
                              to="/freelancer-ongoing-projects"
                              className="btn-right btn btn-sm fund-btn"
                            >
                              مشاهده همه
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="pro-body p-0">
                        <div className="news-feature">
                          <img
                            className="avatar-sm rounded-circle"
                            src={Img_02}
                            alt="User Image"
                          />
                          <p>متن اعلان که این یک اعلان است</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Notifications */}
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
export default Dashboard;
