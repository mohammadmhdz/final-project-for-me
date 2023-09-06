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
  categoryListAction,
  updateCategoryDetails,
  postCategory,
  deletecategory,
} from "../../../../actions/adminAction";

const Categories = (props) => {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [editedCategoryName, setEditedCategoryName] = useState("");
  const [editedCategoryid, setEditedCategoryid] = useState("");
  const [addedCategoryName, setAddedCategoryName] = useState("");
  const [deletedCategoryid, setdeletedCategoryid] = useState("");
  const [delcategories, setdelcategories] = useState([]);
  const [mock, setmock] = useState([]);

  const categoryListAll = useSelector((state) => state.categoryListAll);
  const { categories, loading } = categoryListAll;

  const categoryDetailsUpdate = useSelector(
    (state) => state.categoryUpdateDetail
  );
  const {
    loading: loadingupdate,
    error: errorupdate,
    success: successupdate,
    categoryupdateList: updateCategory,
  } = categoryDetailsUpdate;

  const categorydelete = useSelector((state) => state.categorydelete);

  const categorypost = useSelector((state) => state.categorypostlistt);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    categoryPostList: createdCategory,
  } = categorypost;

  useEffect(() => {
    dispatch(categoryListAction());
  }, [dispatch, updateCategory, createdCategory, successCreate, successupdate]);

  const addhandleSubmit = (e) => {
    dispatch(postCategory({ title: addedCategoryName }));
    const closeButton = document.querySelector("#add-category .close");
    closeButton.click();
    setAddedCategoryName("");
  };

  const handleSubmit = (e) => {
    dispatch(
      updateCategoryDetails({ id: editedCategoryid, title: editedCategoryName })
    );
    const closeButton = document.querySelector("#edit-category .close");
    closeButton.click();
  };

  const handledeleteSubmit = (e) => {
    setdelcategories([...delcategories, deletedCategoryid]);
    dispatch(deletecategory(deletedCategoryid));
    dispatch(categoryListAction());
    const cancelLink = document.querySelector("#cancelLink");
    cancelLink.click();
  };

  const data = categories;

  const columns = [
    {
      title: "شماره",
      dataIndex: "id",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "نام دسته بندی",
      dataIndex: "title",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.title.length - b.title.length,
    },

    {
      dataIndex: "action",
      render: (text, record) => (
        <>
          <div className="text-end">
            <Link
              to="#"
              className="btn btn-sm btn-secondary ms-2"
              data-bs-toggle="modal"
              data-bs-target="#edit-category"
              onClick={() => {
                setSelectedCategory(record);
                setEditedCategoryName(record.title);
                setEditedCategoryid(record.id);
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
                setdeletedCategoryid(record.id);
              }}
            >
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
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <Sidebar />
          <div className="page-wrapper">
            <div className="content container-fluid">
              {/* Page Header */}
              <div className="page-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">دسته بندی ها</h3>
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
                            id="#table"
                            pagination={{
                              total: data.length,
                              showTotal: (total, range) =>
                                `نمایش ${range[0]} از ${range[1]} از ${total} کل نتیجه`,
                              showSizeChanger: true,
                              onShowSizeChange: onShowSizeChange,
                              itemRender: itemRender,
                            }}
                            className="table role"
                            style={{ overflowX: "auto" }}
                            columns={columns}
                            dataSource={data.filter(
                              (obj) => !delcategories.includes(obj.id)
                            )}
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
                    <h4 className="modal-title">اضافه کردن دسته بندی </h4>
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
                    <formn>
                      <div className="form-group">
                        <label>نام دسته بندی</label>
                        <input
                          id="inputtitle"
                          type="text"
                          className="form-control"
                          value={addedCategoryName}
                          placeholder="نام دسته بندی را وارد کنید"
                          onChange={(e) => setAddedCategoryName(e.target.value)}
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
                    </formn>
                  </div>
                </div>
              </div>
            </div>
            {/* /The Modal */}
            {/* Edit Modal */}
            <div className="modal fade custom-modal" id="edit-category">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* Modal Header */}
                  <div className="modal-header">
                    <h4 className="modal-title">ویرایش دسته بندی</h4>
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
                        <label>نام دسته بندی</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={editedCategoryName}
                          onChange={(e) =>
                            setEditedCategoryName(e.target.value)
                          }
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
            {/* /Edit Modal */}
            {/*Deelte modal*/}
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
          </>
        </div>
      </>
    </>
  );
};

export default Categories;
