import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
import { Line } from "react-chartjs-2";
import EditUser from "./edit-user";
import Delete from "./delete";

function ProjectEarnings() {
  const data = {
    labels: [
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
    datasets: [
      {
        label: "ماکسیمم",
        data: [0, 5, 16, 7, 20, 23, 7, 21, 10, 7, 10],
        fill: false,
        borderWidth: 1,
        pointBorderWidth: 1,
        borderColor: "#32795b",
      },
    ],
  };

  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content report-box container-fluid">
            {/* Page Header */}
            <div className="page-header page-border">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h3 className="page-title">گزارش ها</h3>
                </div>
                <div className="col-lg-6 report-btns">
                  <ul className="project-report">
                    <li>
                      <Link to="/admin/reports">فرصت های شغلی</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-bidding">درخواست ها</Link>
                    </li>
                    <li>
                      <Link to="/admin/project-invoice">استخدام</Link>
                    </li>
                    <li className="active-project">
                      <Link to="/admin/project-earnings">پرداخت ها</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            {/* Project Chart */}
            <div className="project-chart">
              <div className="row">
                <div className="subscribe-employe"></div>
                <div className="col-xl-12 d-flex">
                  <div className="card flex-fill">
                    <div className="card-header">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">گزارش پرداخت ها</h5>
                        <div className="dropdown">
                          <button
                            className="btn btn-white btn-sm dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            ۱۴۰۲
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <Link to="#" className="dropdown-item">
                                ۱۴۰۱
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                ۱۴۰۰
                              </Link>
                            </li>
                            <li>
                              <Link to="#" className="dropdown-item">
                                ۱۳۹۹
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div id="chart-sracked" />
                      <Line
                        data={data}
                        height={80}
                        options={{
                          legend: {
                            display: false,
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project Chart */}
            {/* Project Download */}
            {/* <div className="project-download">
              <div className="title-group d-flex">
                <h2>Administrator Earnings</h2>
                <div className="down-load">
                  <Link to="#" className="btn-primary">
                    <i className="fas fa-cloud-download-alt" />
                    Download
                  </Link>
                </div>
              </div>
              <div className="select-group">
                <div className="row">
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Date</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Reference Number</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Project name</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                  <div className="col-lg-2 col-md-6">
                    <select className="form-select">
                      <option> Payment type</option>
                      <option>Option 1</option>
                      <option>Option 2</option>
                      <option>Option 3</option>
                      <option>Option 4</option>
                      <option>Option 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div> */}
            {/* /Project Download */}
            {/* Employer Project */}
            {/* <div className="card ">
              <div className="table-responsive">
                <table className="table table-center table-hover mb-0 employe-tables">
                  <thead>
                    <tr>
                      <th>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="select-all"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </th>
                      <th>Transaction date</th>
                      <th>Reference Number</th>
                      <th>Project Name</th>
                      <th>Project Value</th>
                      <th>Income</th>
                      <th>Payment type</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>25/03/20022</td>
                      <td>
                        <Link to="#">#55454</Link>
                      </td>
                      <td>UI/UX Design</td>
                      <td>$450.44</td>
                      <td>$40.44</td>
                      <td>Credit card</td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>25/03/20022</td>
                      <td>
                        <Link to="#">#55454</Link>
                      </td>
                      <td>UI/UX Design</td>
                      <td>$450.44</td>
                      <td>$40.44</td>
                      <td>Credit card</td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="form-check custom-checkbox">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="customCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customCheck1"
                          />
                        </div>
                      </td>
                      <td>25/03/20022</td>
                      <td>
                        <Link to="#">#55454</Link>
                      </td>
                      <td>UI/UX Design</td>
                      <td>$450.44</td>
                      <td>$40.44</td>
                      <td>Credit card</td>
                      <td className="text-end subscription-end">
                        <Link
                          to="#"
                          className="btn btn-sm btn-secondary me-2"
                          data-bs-toggle="modal"
                          data-bs-target="#edit-category"
                        >
                          <i className="far fa-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-sm btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_category"
                        >
                          <i className="far fa-trash-alt" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
            {/* /Employer Project */}
          </div>
          {/* /Page Wrapper */}
        </div>
        <EditUser />
        <Delete />
      </div>
    </>
  );
}

export default ProjectEarnings;
