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

const VerifyIdentity = () => {
  const data = [
    {
      id: 1,
      name: "نوین فرادید |Novin Faradid",
      contactnumber: "601-316-9060",
      passport: "518-43-5504",
      address: "تهران , شریعتی",
      image: avatar_14,
    },
    {
      id: 2,
      name: "ارتباطات ویرا الکترونیک",
      contactnumber: "601-283-5402",
      passport: "158-07-8510",
      address: "قزوین , بلوار شمالی",
      image: avatar_01,
    },
  ];
  const columns = [
    {
      title: "شماره",
      dataIndex: "id",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "نام",
      dataIndex: "name",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.name.length - b.name.length,
    },

    {
      title: "شماره تماس ",
      dataIndex: "contactnumber",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.contactnumber.length - b.contactnumber.length,
    },
    {
      title: "شماره ثبت شرکت",
      dataIndex: "passport",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.passport.length - b.passport.length,
    },
    {
      title: "مدارک ثبت",
      dataIndex: "document",
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
      sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: "آدرس",
      dataIndex: "address",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.address.length - b.address.length,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <Link to="#" className="btn btn-success btn-disable ms-1">
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
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <Sidebar />
          <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">احراز هویت شرکت ها</h3>
                    </div>
                  </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card bg-white">
                      <div className="card-body pt-0">
                        <div className="tab-content pt-0">
                          <div
                            role="tabpanel"
                            id="employer"
                            className="tab-pane fade show active"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <Table
                                    rowSelection={rowSelection}
                                    pagination={{
                                      total: data.length,
                                      showTotal: (total, range) =>
                                        `نمایش ${range[0]} از ${range[1]} از ${total} کل نتایج`,
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
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            id="freelancer"
                            className="tab-pane fade"
                          >
                            <div className="card">
                              <div className="card-body">
                                <div className="table-responsive">
                                  <Table
                                    rowSelection={rowSelection}
                                    pagination={{
                                      total: data.length,
                                      showTotal: (total, range) =>
                                        `Showing ${range[0]} to ${range[1]} of ${total} entries`,
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Wrapper */}
          </>
        </div>
      </>
    </>
  );
};

export default VerifyIdentity;
