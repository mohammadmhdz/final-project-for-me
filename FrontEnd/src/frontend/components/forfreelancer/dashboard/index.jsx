import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import ApexCharts from "apexcharts";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  home_icon,
} from "../../imagepath";
import { Sidebar } from "../sidebar";
// redux
import { useDispatch, useSelector } from "react-redux";
import { employeeDetails } from "../../../../actions/employeeActions";
import { freelancerRequest } from "../../../../actions/requestsActions";

const FreelancerDashboard = (props) => {
  // redux
  const dispatch = useDispatch();
  const employeeList = useSelector((state) => state.employeeDetails);
  const freelancerRequests = useSelector((state) => state.freelancerRequest);
  const { freelancerRequestsAll } = freelancerRequests;
  const { employee } = employeeList;

  const localItem = JSON.parse(localStorage.getItem("userInfo"));

  // const { employee } = employeeList;
  // const emloyeeDetails = useSelector((state) => state.employeeListDetails);
  useEffect(() => {
    // redux
    // employeeDetails ra taghir dadim
    dispatch(employeeDetails(localItem.associated_id));
    dispatch(freelancerRequest());

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
  const [x ,setX]  = useState([])
  
 


  
  console.log(freelancerRequestsAll, "sdsd");
  console.log(x, "CHART");
  // console.log(chartradialOptions.series, "sdsd");
  // console.log(employee, "sdsd");
  // console.log(item, "item")
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
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تبر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
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

  const chartradialOptions = {
    // series: [freelancerRequestsAll?.filter((items) =>items.employee === employee.id).length
    //         , freelancerRequestsAll?.filter((items) => items.status === "بررسی شده" && items.employee === employee.id).length
    //         , freelancerRequestsAll?.filter((items) => items.status === "در انتظار بررسی" && items.employee === employee.id).length
    //         , freelancerRequestsAll?.filter((items) => items.status === "رد شده" && items.employee === employee.id).length
    // ],
    // series: [x[0] * 10, x[1] * 10, x[2] * 10, x[3] * 10],
    series: [10 , 20 , 25 , 5],
    
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

  console.log(employeeList);
  console.log(freelancerRequestsAll);

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row mt-lg-5">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar items={localItem} />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <div className="dashboard-sec">
                <div className="row align-right">
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          درخواست های ارسال شده
                        </div>
                        <div className="dash-widget-count">
                          {
                            freelancerRequestsAll.filter(
                              (items) => items.employee === employee.id
                            ).length
                          }
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/freelancer-project-proposals"
                          className="d-flex justify-content-md-between"
                        >
                          <div> مشاهده بیشتر </div>
                          <i className="fa fa-arrow-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          درخواست های تعیین وضعیت شده
                        </div>
                        <div className="dash-widget-count">
                          {freelancerRequestsAll.filter(
                            (items) =>
                              items.status === "رد شده" &&
                              items.employee === employee.id
                          ).length +
                            freelancerRequestsAll.filter(
                              (items) =>
                                items.status === "بررسی شده" &&
                                items.employee === employee.id
                            ).length}
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/freelancer-project-proposals"
                          className="d-flex align-items-center justify-content-md-between"
                        >
                          <div>مشاهده بیشتر </div>
                          <i className="fa fa-arrow-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="dash-widget">
                      <div className="dash-info">
                        <div className="dash-widget-info">
                          درخواست های درحال بررسی
                        </div>
                        <div className="dash-widget-count">
                          {
                            freelancerRequestsAll.filter(
                              (items) =>
                                items.status === "در انتظار بررسی" &&
                                items.employee === employee.id
                            ).length
                          }
                        </div>
                      </div>
                      <div className="dash-widget-more">
                        <Link
                          to="/freelancer-project-proposals"
                          className="d-flex align-items-center justify-content-md-between"
                        >
                          <div> مشاهده بیشتر </div>
                          <i className="fa fa-arrow-left" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Chart Content */}
                <div className="row">
                  <div className="col-xl-8 d-flex">
                    <div className="card flex-fill">
                      <div className="pro-head">
                        <h5 className="card-title mb-0">
                          بازدید های پروفایل شما
                        </h5>
                        <div className="month-detail">
                          <select className="form-control">
                            <option value={0}>شش ماه اخیر</option>
                            <option value={1}>دو ماه اخیر</option>
                          </select>
                        </div>
                      </div>
                      <div className="pro-body">
                        <div id="chartprofile" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex">
                    <div className="flex-fill card">
                      <div className="pro-head b-0">
                        <h5 className="card-title mb-0">آنالیز آماری</h5>
                      </div>
                      <div className="pro-body">
                        <div id="chartradial" />
                        <ul className="static-list">
                          <li>
                            <span>
                              <i className="fa fa-circle text-violet me-1" /> کل
                              درخواست ها
                            </span>{" "}
                            <span className="sta-count">
                              {
                                freelancerRequestsAll.filter(
                                  (items) => items.employee === employee.id
                                ).length
                              }
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-circle text-pink me-1" />{" "}
                              بررسی شده
                            </span>{" "}
                            <span className="sta-count">
                              {
                                freelancerRequestsAll.filter(
                                  (items) =>
                                    items.status === "بررسی شده" &&
                                    items.employee === employee.id
                                ).length
                              }
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-circle text-yellow me-1" /> در
                              انتظار بررسی
                            </span>{" "}
                            <span className="sta-count">
                              {
                                freelancerRequestsAll.filter(
                                  (items) =>
                                    items.status === "در انتظار بررسی" &&
                                    items.employee === employee.id
                                ).length
                              }
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-circle text-blue me-1" /> رد
                              شده
                            </span>{" "}
                            <span className="sta-count">
                              {
                                freelancerRequestsAll.filter(
                                  (items) =>
                                    items.status === "رد شده" &&
                                    items.employee === employee.id
                                ).length
                              }
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Chart Content */}
                <div className="row">
                  {/* Plan  Details*/}
                  {/* <div className="col-xl-6 d-flex">
                  <div className="card flex-fill">
                    <div className="pro-head">
                      <h2>Membership Plan Details</h2>
                      <div>
                        <i className="fa fa-check-circle verified orange-text fa-2x" />
                      </div>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="col-md-6 col-sm-6">
                          <div className="plan-details">
                            <h4>The Ultima</h4>
                            <div className="yr-amt">Anually Price</div>
                            <h3>$1200</h3>
                            <div className="yr-duration">
                              Duration: One Year
                            </div>
                            <div className="expiry">Expiry: 24 JAN 2022</div>
                            <Link
                              to="/freelancer-membership"
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
                            <Link to="/freelancer-membership">
                              مشاهده بیشتر
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* /Plan  Details */}
                  {/* Ongoing Projects */}
                  {/* <div className="col-xl-6 d-flex">
                  <div className="card flex-fill">
                    <div className="pro-head">
                      <h2>Ongoing Projects</h2>
                      <Link
                        to="/freelancer-ongoing-projects"
                        className="btn fund-btn"
                      >
                        View All
                      </Link>
                    </div>
                    <div className="pro-body p-0">
                      <div className="on-project">
                        <h5>Web Scraping</h5>
                        <p>
                          I need some data to be scraped from various social
                          media....
                        </p>
                        <div className="pro-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Job Type</p>
                                <h5>Hourly</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Project Price</p>
                                <h5>$120</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5>3 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>4 Days Left</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="on-project">
                        <h5>New Service</h5>
                        <p>
                          I need some data to be scraped from various social
                          media....
                        </p>
                        <div className="pro-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Job Type</p>
                                <h5>Hourly</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Project Price</p>
                                <h5>$90</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5>3 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>5 Days Left</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="on-project">
                        <h5>Website Layout changes</h5>
                        <p>
                          I need some data to be scraped from various social
                          media....
                        </p>
                        <div className="pro-info">
                          <ul className="list-details">
                            <li>
                              <div className="slot">
                                <p>Job Type</p>
                                <h5>Hourly</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Project Price</p>
                                <h5>$70</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Location</p>
                                <h5>3 Received</h5>
                              </div>
                            </li>
                            <li>
                              <div className="slot">
                                <p>Expiry</p>
                                <h5>7 Days Left</h5>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                  {/* /Ongoing Projects */}
                </div>
                {/* Past Earnings */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card mb-4">
                      <div className="pro-head">
                        <h2>درخواست های اخیر</h2>
                        <Link
                          to="/freelancer-project-proposals"
                          className="btn fund-btn"
                        >
                          مشاهده همه
                        </Link>
                      </div>
                      <div className="pro-body p-0">
                        {freelancerRequestsAll?.map(
                          (items) =>
                            // console.log(items , items.employee , employee.id)
                            items.employee === employee.id && (
                              <div className="earn-feature">
                                <div className="row flex-column-reverse">
                                  <div className="col-lg-7 col-md-6">
                                    <div className="earn-info">
                                      {/* <p>برنامه نویس frontend</p> */}
                                      {/* <div className="date">تمام وقت,تهران </div> */}
                                    </div>
                                  </div>
                                  <div className="col-lg-5 col-md-6">
                                    <div className="earn-img">
                                      <span className=" d-flex  align-center">
                                        {/* <img
                                          src={Avatar_1}
                                          alt="logo"
                                          className="img-fluid avatar-xl rounded-circle"
                                        />{" "} */}
                                        {/* فناوران جوان آینده | Fanavaran Javan Ayandeh */}
                                        <div className=" earn-info d-flex flex-column me-3">
                                          <div className="titlee">
                                            {items.job_title}
                                          </div>
                                          <div className="date text-secondary">
                                            {items.company_name}
                                          </div>
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Past Earnings */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerDashboard;
