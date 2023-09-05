import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "../../../commoncomponent/sidebar";
import { Table } from "antd";
import Loader from "../../../../Loader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import {
  skillListAction,
  updateSkillDetails,
  createSkill,
  deleteSkill,
} from "../../../../actions/adminAction";

const Skills = () => {
  const dispatch = useDispatch();
  const skillListAll = useSelector((state) => state.skillListAll);
  const skillDetailsUpdate = useSelector(
    (state) => state.skillUpdateDetailsReducer
  );
  const skillPost = useSelector((state) => state.skillPost);
  const skillDelete = useSelector((state) => state.skillDelete);
  const { skills, loading } = skillListAll;
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [editedSkillName, setEditedSkillName] = useState("");
  const [editedSkillId, setEditedSkillId] = useState("");
  const [addedSkillName, setAddedSkillName] = useState("");
  const [deletedSkillId, setDeletedSkillId] = useState("");

  const addhandleSubmit = (e) => {
    dispatch(createSkill({ title: addedSkillName }));
    dispatch(skillListAction());
    const closeButton = document.querySelector("#add-category .close");
    closeButton.click();
  };

  const handleSubmit = (e) => {
    dispatch(updateSkillDetails({ id: editedSkillId, title: editedSkillName }));
    dispatch(skillListAction());
    const closeButton = document.querySelector("#edit-category .close");
    closeButton.click();
  };

  const handleDeleteSubmit = (e) => {
    dispatch(deleteSkill(deletedSkillId));
    dispatch(skillListAction());
    const cancelLink = document.querySelector("#cancelLink");
    cancelLink.click();
  };

  const data = skills;
  const columns = [
    {
      title: "شماره",
      dataIndex: "id",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "مهارت",
      dataIndex: "title",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.title.length - b.title.length,
    },

    {
      title: "",
      dataIndex: "action",
      render: (text, record) => (
        <>
          <div>
            <Link
              to="#"
              className="btn btn-sm btn-secondary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#edit-category"
              onClick={() => {
                setSelectedSkill(record);
                setEditedSkillName(record.title);
                setEditedSkillId(record.id);
              }}
            >
              <i className="far fa-edit" />
            </Link>
            <Link
              to="#"
              className="btn btn-sm btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#delete_category"
              onClick={() => {
                setDeletedSkillId(record.id);
              }}
            >
              <i className="far fa-trash-alt" />
            </Link>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    dispatch(skillListAction());
  }, [dispatch]);

  return (
    <>
      <>
        <div className="main-wrapper">
          {/* Page Wrapper */}

          <Sidebar />
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">مهارت ها</h3>
                  </div>
                  <div className="col-auto">
                    <Link
                      to="#"
                      className="btn add-button ms-2"
                      data-bs-toggle="modal"
                      data-bs-target="#add-category"
                    >
                      <i className="fas fa-plus" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* /Page Header */}
              {/* Search Filter */}

              {/* /Search Filter */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      {loading ? (
                        <Loader />
                      ) : (
                        <div className="table-responsive">
                          <Table
                            pagination={{
                              total: data.length,
                              showTotal: (total, range) =>
                                `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه`,
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
            {/* The Modal */}
            <div className="modal fade custom-modal" id="add-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">اضافه کردن مهارت جدید</h4>
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
                        <label>نام مهارت</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام مهارت را وارد کنید"
                          onChange={(e) => setAddedSkillName(e.target.value)}
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          onClick={(event) => {
                            event.preventDefault();
                            addhandleSubmit();
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
            {/* /The Modal */}
            {/* The Modal */}
            <div className="modal fade custom-modal" id="edit-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header flex-wrap">
                    <h4 className="modal-title">ویرایش مهارت</h4>
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
                        <label>نام مهارت</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={editedSkillName}
                          onChange={(e) => setEditedSkillName(e.target.value)}
                        />
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
            {/* /The Modal */}
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
                              handleDeleteSubmit();
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

export default Skills;
