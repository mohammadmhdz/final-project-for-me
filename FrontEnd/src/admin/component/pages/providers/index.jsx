import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import Loader from "../../../../Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../../commoncomponent/sidebar";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import {
  companyListAction,
  updateCompanyDetailss,
  deletecompany,
} from "../../../../actions/companyActions";
import { deleteuser } from "../../../../actions/adminAction";

const Providers = () => {
  const dispatch = useDispatch();
  const companyListAll = useSelector((state) => state.companyListAll);
  const companyDetailsUpdate = useSelector(
    (state) => state.companyUpdateDetail
  );
  const companydelete = useSelector((state) => state.companydelete);
  const { compnanies, loading } = companyListAll;

  const [selectedCompany, setSelectedCompany] = useState(null);
  const [editedCompanyName, setEditedCompanyName] = useState("");
  const [editedCompanyid, setEditedCompanyid] = useState("");
  const [addedCompanyName, setAddedCompanyName] = useState("");
  const [deletedCompanyid, setDeletedCompanyid] = useState("");
  const [Editedowner, setEditedowner] = useState("");
  const [Editedplan, setEditedplan] = useState("");

  const handleSubmit = (e) => {
    dispatch(
      updateCompanyDetailss({
        id: editedCompanyid,
        Name: editedCompanyName,
        Owner_name: Editedowner,
        active_plan: Editedplan,
      })
    );
    dispatch(companyListAction());
    const closeButton = document.querySelector("#add-category .close");
    closeButton.click();
  };

  const handledeleteSubmit = (e) => {
    dispatch(deleteuser(deletedCompanyid));
    dispatch(companyListAction());
    const cancelLink = document.querySelector("#cancelLink");
    cancelLink.click();
  };

  const data = compnanies;
  console.log("data", data);
  const columns = [
    {
      title: "شناسه",
      dataIndex: "company_data",
      render: (text, record) => <>{text.id}</>,
      // sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "لوگو",
      dataIndex: "company_data",
      render: (text, record) => (
        <>
          <Link
            to={{
              pathname: "/company-profile",
              state: { companyIdInput: text.id },
            }}
            className="avatar"
          >
            <img alt="" src={"http://127.0.0.1:8000" + text.image} />
          </Link>
        </>
      ),
      // sorter: (a, b) => a.image.length - b.image.length,
    },
    {
      title: "نام شرکت",
      dataIndex: "company_data",
      render: (text, record) => <>{text.Name}</>,
      // sorter: (a, b) => a.Name.length - b.Name.length,
    },
    {
      title: "مدیر شرکت",
      dataIndex: "company_data",
      render: (text, record) => <>{text.Owner_name}</>,
      // sorter: (a, b) => a.primarycontact.length - b.primarycontact.length,
    },
    {
      title: "ایمیل",
      dataIndex: "company_data",
      render: (text, record) => <>{text.Email}</>,

      // sorter: (a, b) => a.website.length - b.website.length,
    },
    {
      title: " فرصت های شغلی",
      dataIndex: "all_jobs_count",
      render: (text, record) => <>{text}</>,
      // sorter: (a, b) => a.totalprojects.length - b.totalprojects.length,
    },

    {
      title: "تلفن",
      dataIndex: "company_data",
      render: (text, record) => <>{text.Phone}</>,
      // sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: "",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <Link
            to="#"
            className="btn btn-sm btn-secondary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#add-category"
            onClick={() => {
              setSelectedCompany(record);
              setEditedCompanyName(record.company_data.Name);
              setEditedCompanyid(record.company_data.id);
              setEditedplan(record.company_data.active_plan);
              setEditedowner(record.company_data.Owner_name);
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
              setDeletedCompanyid(record.company_data.userr.id);
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
    dispatch(companyListAction());
  }, [dispatch]);

  return (
    <>
      <>
        <div className="main-wrapper">
          <Sidebar />
          <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
              <div className="content container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-body">
                        {loading ? (
                          <Loader />
                        ) : (
                          <div className="table-responsive">
                            <Table
                              rowSelection={rowSelection}
                              scroll={{ x: true }}
                              pagination={{
                                total: data.length,
                                showTotal: (total, range) =>
                                  `نمایش ${range[0]} از ${range[1]} کل ${total} نتایج`,
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
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Page Wrapper */}
            </div>
            <>
              {/* Category Modal */}
              <div className="modal fade custom-modal" id="add-category">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header flex-wrap">
                      <h4 className="modal-title">ویرایش شرکت</h4>
                      <button
                        type="button"
                        className="close"
                        data-bs-dismiss="modal"
                      >
                        <span>×</span>
                      </button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                      <form>
                        <div className="form-group">
                          <label>نام شرکت</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={editedCompanyName}
                            onChange={(e) =>
                              setEditedCompanyName(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label>نام صاحب شرکت </label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={Editedowner}
                            onChange={(e) => setEditedowner(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <label>اشتراک فعال </label>
                          <select
                            name="price"
                            className="form-control select-level"
                            value={Editedplan}
                            onChange={(e) => setEditedplan(e.target.value)}
                          >
                            <option value="بنیادی">بنیادی</option>
                            <option value="پیشرفته">پیشرفته</option>
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
              {/* /Category Modal */}
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
                              id="#cancelLink"
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
          </>
        </div>
      </>
    </>
  );
};

export default Providers;
