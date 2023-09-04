import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../../commoncomponent/sidebar";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import Loader from "../../../../Loader";
import { listJobs } from "../../../../actions/jobActions";

const Projects = () => {
  const dispatch = useDispatch();
  const jobListAll = useSelector((state) => state.jobList);
  const { jobs, loading } = jobListAll;

  const [date, setDate] = useState(new Date());
  const [inputfilter, setInputfilter] = useState(false);

  const handleChange = (date) => {
    setDate(date);
  };
  const togglefilter = (value) => {
    setInputfilter(value);
  };

  const data = jobs;

  const columns = [
    {
      title: "لوگو",
      dataIndex: "company",
      render: (text, record) => (
        <>
          <Link to="#" className="avatar">
            <img alt="" src={"http://127.0.0.1:8000" + text.image} />
          </Link>
        </>
      ),
      // sorter: (a, b) => a.image.length - b.image.length,
    },
    {
      title: "عنوان",
      dataIndex: "title",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: "حقوق",
      dataIndex: "salary_type",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.salary_type.length - b.salary_type.length,
    },

    {
      title: "دسته بندی",
      dataIndex: "job_category",
      render: (text, record) => <>{text.title}</>,
      sorter: (a, b) => a.job_category.length - b.job_category.length,
    },

    {
      title: "شرکت",
      dataIndex: "company",
      render: (text, record) => <>{text.Name}</>,
      sorter: (a, b) => a.company.length - b.company.length,
    },
    {
      title: "تاریخ انتشار",
      dataIndex: "published_at",
      render: (text, record) => <>{new Date(text).toLocaleDateString()}</>,
      sorter: (a, b) => a.published_at.length - b.published_at.length,
    },
    {
      title: "تاریخ انتقضا",
      dataIndex: "due_to",
      render: (text, record) => <>{new Date(text).toLocaleDateString()}</>,
      sorter: (a, b) => a.due_to.length - b.due_to.length,
    },

    {
      title: "عملیات",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <Link
            to="#"
            className="btn btn-sm btn-secondary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#add-category"
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

  useEffect(() => {
    dispatch(listJobs());
  }, [dispatch]);

  return (
    <>
      <>
        {/* Page Wrapper */}
        <div className="main-wrapper">
          <Sidebar />
          <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <h3 className="page-title">فرصت های شغلی</h3>
                    </div>
                    <div className="col-auto">
                      <Link
                        className="btn filter-btn"
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
                    <form action="#" method="post">
                      <div className="row filter-row">
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>نام شرکت</label>
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className="form-group">
                            <label>From Date</label>
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
                            <label>To Date</label>
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
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* /Search Filter */}
                <div className="card bg-white projects-card">
                  <div className="card-body pt-0">
                    <div className="card-header"></div>
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
                            غیرفعال (03)
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
                    <div className="tab-content pt-0">
                      <div
                        role="tabpanel"
                        id="tab-4"
                        className="tab-pane fade active show"
                      >
                        {loading ? (
                          <Loader />
                        ) : (
                          <div className="table-responsive">
                            <Table
                              rowSelection={rowSelection}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]}از ${total} کل نتیجه`,
                                showSizeChanger: true,
                                onShowSizeChange: onShowSizeChange,
                                itemRender: itemRender,
                              }}
                              className="table"
                              scroll={{ x: true }}
                              style={{ overflowX: "auto" }}
                              columns={columns}
                              dataSource={data}
                              rowKey={(record) => record.id}
                            />
                          </div>
                        )}
                      </div>
                      <div role="tabpanel" id="tab-5" className="tab-pane fade">
                        <div className="table-responsive">
                          <Table
                            rowSelection={rowSelection}
                            pagination={{
                              total: data.length,
                              showTotal: (total, range) =>
                                `نمایش ${range[0]} از ${range[1]}از ${total} کل نتیجه`,
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
                      <div role="tabpanel" id="tab-6" className="tab-pane fade">
                        <div className="table-responsive">
                          <Table
                            rowSelection={rowSelection}
                            pagination={{
                              total: data.length,
                              showTotal: (total, range) =>
                                `نمایش ${range[0]} از ${range[1]}از ${total} کل نتیجه`,
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
                      <div role="tabpanel" id="tab-7" className="tab-pane fade">
                        <div className="table-responsive">
                          <Table
                            rowSelection={rowSelection}
                            pagination={{
                              total: data.length,
                              showTotal: (total, range) =>
                                `نمایش ${range[0]} از ${range[1]}از ${total} کل نتیجه`,
                              showSizeChanger: true,
                              onShowSizeChange: onShowSizeChange,
                              itemRender: itemRender,
                            }}
                            className="table"
                            style={{ overflowX: "auto" }}
                            columns={columns}
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
          </>
          <>
            {/* Category Modal */}
            <div className="modal fade custom-modal" id="add-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">فرصت های شغلی</h4>
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
                        <label>عنوان</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="توسعه دهنده Front-end "
                        />
                      </div>

                      <div className="form-group">
                        <label>وضعیت</label>
                        <select
                          name="price"
                          className="form-control select-level"
                        >
                          <option value="">فعال</option>
                          <option value="">منقضی شده</option>
                          <option value="">درانتظار تایید</option>
                          <option value="">تکمیل شده</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>تاریخ انتشار</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>تاریخ اتقضا</label>
                        <div className="cal-icon">
                          <DatePicker
                            selected={date}
                            onChange={handleChange}
                            className="form-control datetimepicker"
                          />
                        </div>
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
                </div>
              </div>
            </div>
            {/* Category Modal */}
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
                            لفو
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

export default Projects;
