import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import Sidebar from "../../../commoncomponent/sidebar";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Pageheader from "./pageheader";
import Addplan from "./addplan";
import "../../../antdstyle.css";
import { logo_small } from "../imagepath";

const Subscription = () => {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => {
    setDate(date);
  };

  const data = [
    {
      name: "امیررضا فلاح نژاد",
      planname: "حرفه ای",
      plantype: "ماهانه",
      paymentmethod: "درگاه پرداخت",
      createdate: "۱۴۰۲-۰۳۰۱",
      enddate: "۱۴۰۲-۰۴-۰۱",
      status: "غیر فعال",
    },
    {
      name: "زهرا سعیدی ",
      planname: "حرفه ای",
      plantype: "سالانه",
      paymentmethod: "درگاه پرداخت",
      createdate: "۱۴۰۲-۰۳۰۱",
      enddate: "۱۴۰۳-۰۳-۰۱",
      status: "فعال",
    },
  ];
  const columns = [
    {
      title: "کاربر",
      dataIndex: "name",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "نام اشتراک",
      dataIndex: "planname",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.planname.length - b.planname.length,
    },
    {
      title: "نوع اشتراک",
      dataIndex: "plantype",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.plantype.length - b.plantype.length,
    },
    {
      title: "روش پرداخت",
      dataIndex: "paymentmethod",
      render: (text, record) => (
        <>
          <h2 className="table-avatar">
            <Link to="#">{text}</Link>
          </h2>
        </>
      ),
      sorter: (a, b) => a.paymentmethod.length - b.paymentmethod.length,
    },
    {
      title: "تاریخ شروع",
      dataIndex: "createdate",
      render: (text, record) => <>{text}</>,

      sorter: (a, b) => a.createdate.length - b.createdate.length,
    },
    {
      title: "تاریخ پایان",
      dataIndex: "enddate",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.enddate.length - b.enddate.length,
    },

    {
      title: "وضعیت",
      dataIndex: "status",
      render: (text, record) => (
        <>
          <Link
            to="#"
            className={` ${
              record.status === "فعال"
                ? "btn active-btn"
                : record.status === "غیر فعال"
                ? "btn inactive-btn"
                : ""
            }`}
          >
            {record.status}
          </Link>
        </>
      ),
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "عملیات",
      dataIndex: "action",
      render: (text, record) => (
        <div className="subscription-end">
          <Link
            to="#"
            className="btn btn-sm btn-secondary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#edit-category"
          >
            <i className="far fa-edit"></i>
          </Link>
          <Link
            to="#"
            className="btn btn-sm btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#delete_category"
          >
            <i className="far fa-trash-alt"></i>
          </Link>
        </div>
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
      <div className="main-wrapper">
        <Sidebar />
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <Pageheader />
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="subscribe-employe"></div>
                  <div className="card ">
                    <div className="table-responsive">
                      <Table
                        rowSelection={rowSelection}
                        pagination={{
                          total: data.length,
                          showTotal: (total, range) =>
                            `نمایش ${range[0]} از ${range[1]} از ${total} کل نتایح`,
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
          {/* /Page Wrapper */}
          <>
            {/* Add Modal */}
            <Addplan />
            {/* Add Modal */}
            {/* Add Modal */}
            <div className="modal fade custom-modal" id="edit-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header flex-wrap">
                    <div className="text-center w-100 mb-3">
                      <img src={logo_small} alt="" />
                    </div>
                    <h4 className="modal-title">ویرایش</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>تاریخ شروع</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>تاریخ پایان</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>وضعیت</label>
                        <select className="form-control form-select">
                          <option>انتخاب</option>
                          <option defaultValue="">فعال</option>
                          <option> غیر فعال</option>
                        </select>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          تایید
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Add Modal */}
            {/* Delete Modal */}
            <div
              className="modal custom-modal fade"
              id="delete_category"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="form-header">
                      <h3>حذف</h3>
                      <p> آیا میخواهید این مورد را حذف کنید؟</p>
                    </div>
                    <div className="modal-btn delete-action">
                      <div className="row">
                        <div className="col-6">
                          <Link to="#" className="btn btn-primary continue-btn">
                            حذف
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            to="#"
                            data-bs-dismiss="modal"
                            className="btn btn-primary cancel-btn"
                          >
                            بازگشت
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Delete Modal */}
          </>
        </>
      </div>
    </>
  );
};

export default Subscription;
