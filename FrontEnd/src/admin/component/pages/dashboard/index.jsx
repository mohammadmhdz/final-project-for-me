import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../commoncomponent/header";
import Sidebar from "../../../commoncomponent/sidebar";
import Chart from "react-apexcharts";
import {
  avatar_02,
  avatar_03,
  avatar_04,
  avatar_14,
  avatar_01,
  avatar_15,
  avatar_11,
  avatar_16,
  avatar_05,
  avatar_10,
  avatar_06,
} from "../../pages/imagepath";
import { Table } from "antd";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";

const Dashboard = () => {
  const [datas] = useState({
    chart: {
      height: 335,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    datasets: {
      id: "apaxcharts-area",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    colors: ["#32795b", "#ffb8a8", "#feb019"],
    borderWidth: 3,
  });
  const [series] = useState([
    {
      name: "کارجویان",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "شرکت ها",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "استخدام ها",
      data: [12, 36, 42, 30, 39, 58, 40],
    },
  ]);

  const data = [
    {
      id: 1,
      profile: "مژده زینال زادگان",
      designation: "کارجو",
      category: "Angular",
      image: avatar_14,
    },
  ];
  const columns = [
    {
      title: "کاربر",
      dataIndex: "profile",
      render: (text, record) => (
        <>
          <h2 className="table-avatar  user-profile">
            <Link to="/admin/profile">
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src={record.image}
              />
            </Link>
            {text}
          </h2>
        </>
      ),
      sorter: (a, b) => a.profile.length - b.profile.length,
    },
    {
      title: "نقش",
      dataIndex: "designation",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.designation.length - b.designation.length,
    },
    {
      title: "نظرات",
      dataIndex: "comments",
      render: (text, record) => (
        <>
          {text}
          <div className="desc-info">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است
          </div>
        </>
      ),
      sorter: (a, b) => a.comments.length - b.comments.length,
    },

    {
      title: "امتیاز",
      dataIndex: "stars",
      render: (text, record) => (
        <>
          {text}
          <i className="fas fa-star text-primary" />
          <i className="fas fa-star text-primary" />
          <i className="fas fa-star text-primary" />
          <i className="fas fa-star text-primary" />
          <i className="fas fa-star text-muted" />
        </>
      ),
      sorter: (a, b) => a.stars.length - b.stars.length,
    },
    {
      title: "دسته بندی",
      dataIndex: "category",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.category.length - b.category.length,
    },
    {
      title: "عملیات",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <Link to="#" className=" btn btn-approve text-white ms-2">
            تایید
          </Link>
          <Link to="#" className="btn btn-disable">
            رد
          </Link>
        </>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
      className: "checkbox-red",
    }),
  };
  return (
    <>
      <>
        <div className="main-wrapper ">
          {/* Page Wrapper */}
          <Header />

          <div className="page-wrapper align-right">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">داشبورد</h3>
                    {/*  <ul className="breadcrumb" style={{ visibility: "hidden" }}>
                      <li className="breadcrumb-item">
                        <Link to="/index/admin">خانه</Link>
                      </li>
                      <li className="breadcrumb-item active">داشبورد</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-md-8">
                  {/*/Wizard*/}
                  <div className="row">
                    <div className="col-md-4 d-flex">
                      <div className="card wizard-card flex-fill">
                        <div className="card-body">
                          <p className="text-primary mt-0 mb-2">کارجویان</p>
                          <h5>۱۲</h5>
                          <p>
                            <Link to="/admin/users">مشاهده جزییات</Link>
                          </p>
                          <span className="dash-widget-icon bg-1">
                            <i className="fas fa-users" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card wizard-card flex-fill">
                        <div className="card-body">
                          <p className="text-primary mt-0 mb-2">
                            فرصت های شغلی
                          </p>
                          <h5>۲۲</h5>
                          <p>
                            <Link to="/admin/projects">مشاهده جزییات </Link>
                          </p>
                          <span className="dash-widget-icon bg-1">
                            <i className="fas fa-th-large" />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 d-flex">
                      <div className="card wizard-card flex-fill">
                        <div className="card-body">
                          <p className="text-primary mt-0 mb-2">
                            فرصت های شغلی فعال
                          </p>
                          <h5>۱۴</h5>
                          <p>
                            <Link to="/admin/projects">مشاهده جزییات </Link>
                          </p>
                          <span className="dash-widget-icon bg-1">
                            <i className="fas fa-bezier-curve" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/Wizard*/}
                  <div className="row">
                    <div className="col-lg-12 d-flex">
                      <div className="card w-100">
                        <div className="card-body pt-0 pb-2">
                          <div className="card-header">
                            <h5 className="card-title">بررسی</h5>
                          </div>
                          <div id="chart" className="mt-4">
                            <Chart
                              options={datas}
                              series={series}
                              type="area"
                              height={310}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 d-flex">
                  <div className="card w-100">
                    <div className="card-body pt-0">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-7">
                            <p>خوش آمدید,</p>
                            <h6 className="text-primary">ادمین</h6>
                          </div>
                          <div className="col-5 text-end">
                            <span className="welcome-dash-icon bg-1">
                              <i className="fas fa-user" />
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <h6 className="text-primary">پرداخت ها</h6>
                        <div className="table-responsive">
                          <table className="table table-center table-hover mb-0">
                            <thead>
                              <tr>
                                <th className="text-nowrap">کاربر</th>
                                <th>مقدار</th>
                                <th className="text-end">وضعیت</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-nowrap">علی خزایی</td>
                                <td>۲۱۰ هزار تومان</td>
                                <td className="text-end">پرداخت شده</td>
                              </tr>
                              <tr>
                                <td className="text-nowrap">شرکت فراوب</td>
                                <td>۲۱۰ هزار تومان</td>
                                <td className="text-end">پرداخت شده</td>
                              </tr>
                              <tr>
                                <td className="text-nowrap">
                                  امیررضا فلاح نژاد
                                </td>
                                <td>۲۱۰ هزار تومان</td>
                                <td className="text-end text-nowrap">
                                  انصراف از پرداخت
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-right">
                <div className="col-lg-12">
                  <div className="card bg-white projects-card">
                    <div className="card-body pt-0">
                      <div className="card-header">
                        <h5 className="card-title">نظرات</h5>
                      </div>
                      <div className="reviews-menu-links">
                        <ul
                          role="tablist"
                          className="nav nav-pills card-header-pills nav-justified"
                        >
                          <li className="nav-item">
                            <Link
                              to="#tab-4"
                              data-bs-toggle="tab"
                              className="nav-link active"
                            >
                              همه (272)
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#tab-5"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              فعال (218)
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#tab-6"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              {" "}
                              در انتظار تایید (3)
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              to="#tab-7"
                              data-bs-toggle="tab"
                              className="nav-link"
                            >
                              حذف شده (0)
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content pt-0 ">
                        <div
                          role="tabpanel"
                          id="tab-4"
                          className="tab-pane fade active show"
                        >
                          <div className="table-responsive align-right">
                            <Table
                              rowSelection={rowSelection}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه ها`,
                                showSizeChanger: true,
                                onShowSizeChange: onShowSizeChange,
                                itemRender: itemRender,
                              }}
                              className="table"
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              dataSource={data}
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-5"
                          className="tab-pane fade"
                        >
                          <div className="table-responsive">
                            <Table
                              rowSelection={rowSelection}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه ها`,
                                showSizeChanger: true,
                                onShowSizeChange: onShowSizeChange,
                                itemRender: itemRender,
                              }}
                              className="table"
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              dataSource={data}
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-6"
                          className="tab-pane fade"
                        >
                          <div className="table-responsive">
                            <Table
                              rowSelection={rowSelection}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه ها`,
                                showSizeChanger: true,
                                onShowSizeChange: onShowSizeChange,
                                itemRender: itemRender,
                              }}
                              className="table"
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              dataSource={data}
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                        <div
                          role="tabpanel"
                          id="tab-7"
                          className="tab-pane fade"
                        >
                          <div className="table-responsive">
                            <Table
                              rowSelection={rowSelection}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه ها`,
                                showSizeChanger: true,
                                onShowSizeChange: onShowSizeChange,
                                itemRender: itemRender,
                              }}
                              className="table"
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              // dataSource={data}
                              rowKey={(record) => record.id}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Wrapper */}
          </div>
          <Sidebar />
        </div>
      </>
    </>
  );
};

export default Dashboard;
