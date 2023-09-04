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
import {
  listJobs,
  updateJobDetails,
  deletejob,
} from "../../../../actions/jobActions";

const Projects = () => {
  const dispatch = useDispatch();
  const jobListAll = useSelector((state) => state.jobList);
  const { jobs, loading } = jobListAll;

  const jobDetailsUpdate = useSelector((state) => state.jobUpdateDetail);
  const jobdelete = useSelector((state) => state.jobdelete);

  const [selectedJob, setSelectedJob] = useState(null);
  const [deletedJobid, setdeletedJobid] = useState("");
  const [editedJobName, setEditedJobName] = useState("");
  const [editedJobStatus, setEditedJobStatus] = useState("");
  const [editedJobid, setEditedJobid] = useState("");

  const handleSubmit = (e) => {
    dispatch(
      updateJobDetails({
        id: editedJobid,
        title: editedJobName,
        status: editedJobStatus,
      })
    );
    dispatch(listJobs());
    const closeButton = document.querySelector("#add-category .close");
    closeButton.click();
  };

  const handledeleteSubmit = (e) => {
    dispatch(deletejob(deletedJobid));
    dispatch(listJobs());
    const cancelLink = document.querySelector("#cancelLink");
    cancelLink.click();
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
      title: "وضعیت",
      dataIndex: "status",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.status.length - b.status.length,
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
            onClick={() => {
              setSelectedJob(record);
              setEditedJobStatus(record.status);
              setEditedJobName(record.title);
              setEditedJobid(record.id);
            }}
          >
            <i className="far fa-edit"></i>
          </Link>
          <Link
            to="#"
            className="btn btn-sm btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#delete_category"
            onClick={() => {
              setdeletedJobid(record.id);
            }}
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
                    <div className="col-auto"></div>
                  </div>
                </div>
                {/* /Page Header */}
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
                            همه
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-5"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            فعال
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-6"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            {" "}
                            در انتظار بررسی
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#tab-7"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            منقضی شده
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
                    <h4 className="modal-title"> ویرایش </h4>
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
                          defaultValue={editedJobName}
                          onChange={(e) => setEditedJobName(e.target.value)}
                        />
                      </div>

                      <div className="form-group">
                        <label>وضعیت</label>
                        <select
                          name="price"
                          className="form-control select-level"
                          value={editedJobStatus}
                          onChange={(e) => setEditedJobStatus(e.target.value)}
                        >
                          <option value="فعال">فعال</option>
                          <option value="منقضی شده">منقضی شده</option>
                          <option value="درانتظار تایید">درانتظار تایید</option>
                          <option value="تکمیل شده">تکمیل شده</option>
                        </select>
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={(event) => {
                            event.preventDefault();
                            handleSubmit();
                          }}
                        >
                          تایید
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
                          <Link
                            to="#"
                            className="btn btn-primary continue-btn"
                            onClick={(event) => {
                              event.preventDefault();
                              handledeleteSubmit();
                            }}
                          >
                            حذف
                          </Link>
                        </div>
                        <div className="col-6">
                          <Link
                            id="cancelLink"
                            to="#"
                            data-bs-dismiss="modal"
                            className="btn btn-primary cancel-btn"
                          >
                            لغو
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
