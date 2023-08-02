import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
import { Table } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";

const Roles = () => {
  const [date, setDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);

  const handleChange = (date) => {
    setDate(date);
  };

  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const data = [
    {
      id: 1,
      rolename: "ادمین",
    },
    {
      id: 2,
      rolename: "کارجو",
    },
    {
      id: 3,
      rolename: "کارفرما",
    },
  ];
  const columns = [
    {
      title: "نقش",
      dataIndex: "rolename",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.rolename.length - b.rolename.length,
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) => <></>,
      sorter: (a, b) => a.rolename.length - b.rolename.length,
    },

    {
      title: "",
      dataIndex: "action",

      render: (text, record) => (
        <>
          <div className="text-end">
            <Link
              to="/admin/roles-permission"
              className="btn btn-sm bg-pink ms-2"
            >
              <i className="fas fa-user-shield"></i>
            </Link>
            <Link
              to="#"
              className="btn btn-sm btn-secondary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#edit-category"
            >
              <i className="far fa-edit" />{" "}
            </Link>
            <Link
              to="#"
              className="btn btn-sm btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#delete_category"
            >
              {" "}
              <i className="far fa-trash-alt" />
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <>
        {/* Page Wrapper */}
        <div className="main-wrapper">
          <Sidebar />
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">نقش ها و محوز ها</h3>
                  </div>
                  <div className="col-auto">
                    <Link
                      to="#"
                      className="btn add-button ms-1"
                      data-bs-toggle="modal"
                      data-bs-target="#add-category"
                    >
                      <i className="fas fa-plus" />
                    </Link>
                    <Link
                      className="btn btn-primary filter-btn"
                      to="#"
                      id="filter_search"
                    >
                      <i
                        className="fas fa-filter"
                        onClick={() => togglefilter(!inputfilter)}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* /Page Header */}
              {/* Search Filter */}
              <div
                className="card filter-card"
                id="filter_inputs"
                style={{ display: inputfilter ? "block" : "none" }}
              >
                <div className="card-body pb-0">
                  <form>
                    <div className="row filter-row">
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label>نفش ها</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label>از</label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <label>تا</label>
                          <div className="cal-icon">
                            <DatePicker
                              selected={date}
                              onChange={handleChange}
                              className="form-control datetimepicker"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                          >
                            تایید
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Search Filter */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <Table
                          pagination={{
                            total: data.length,
                            showTotal: (total, range) =>
                              `نمایش ${range[0]} از ${range[1]} از ${total} کل نتایج`,
                            showSizeChanger: true,
                            onShowSizeChange: onShowSizeChange,
                            itemRender: itemRender,
                          }}
                          className="table role"
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
          </div>
          <>
            {/* Add Modal */}
            <div className="modal fade custom-modal" id="add-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">اضافه کردن</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  {/* /Modal Header */}
                  {/* Modal body */}
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>عنوان</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="عنوان را وارد کنید"
                        />
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
                  {/* /Modal body */}
                </div>
              </div>
            </div>
            {/* /Add Modal */}
            {/* Edit Modal */}
            <div className="modal fade custom-modal" id="edit-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">ویرایش</h4>
                    <button
                      type="button"
                      className="close"
                      data-bs-dismiss="modal"
                    >
                      <span>×</span>
                    </button>
                  </div>
                  {/* /Modal Header */}
                  {/* Modal body */}
                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label>عنوان</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="ادمین"
                        />
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* /Modal body */}
                </div>
              </div>
            </div>
            {/* /Add Modal */}
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
        </div>
      </>
    </>
  );
};

export default Roles;
