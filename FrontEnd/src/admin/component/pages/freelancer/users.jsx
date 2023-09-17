import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import FeatherIcon from "feather-icons-react";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../../commoncomponent/sidebar";
import Loader from "../../../../Loader";
import { itemRender, onShowSizeChange } from "../../../paginationfunction";
import "../../../antdstyle.css";
import AddFreelancer from "./addfreelancer";
import ViewDetails from "../../../commoncomponent/viewdetails";
import { employeeListAll } from "../../../../actions/employeeActions";
import { deleteuser } from "../../../../actions/adminAction";
import {
  icon_01,
  avatar_10,
  avatar_14,
  avatar_15,
  avatar_16,
  avatar_13,
  icon_02,
  icon_03,
  icon_04,
  export_icon,
} from "../../pages/imagepath";
const Users = () => {
  const dispatch = useDispatch();
  const employeeListAlll = useSelector((state) => state.employeeListAll);
  const { employeeList, loading } = employeeListAlll;
  const userdelete = useSelector((state) => state.userdelete);
  const { success: successdel } = userdelete;

  const [deleteduserid, setdeleteduserid] = useState("");

  const handledeleteSubmit = (e) => {
    dispatch(deleteuser(deleteduserid));
    // dispatch(employeeListAll());
  };

  const data = employeeList;
  const columns = [
    {
      title: "کارجو",
      dataIndex: "image",
      render: (text, record) => (
        <>
          <div className="table-avatar user-profile">
            <Link
              to={{
                pathname: "/developer-profile",
                state: { idInfo: text.id },
              }}
            >
              <img
                className="avatar-img rounded-circle"
                alt="User Image"
                src={"http://127.0.0.1:8000" + text}
              />
            </Link>
            {/* {text} */}
          </div>
        </>
      ),
      sorter: (a, b) => a.freelancer.length - b.freelancer.length,
    },
    {
      title: "نام",
      dataIndex: "user",
      render: (text, record) => <>{text.first_name + " " + text.last_name}</>,
      sorter: (a, b) => a.expertise.length - b.expertise.length,
    },
    {
      title: "تخصص",
      dataIndex: "perfession_title",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.expertise.length - b.expertise.length,
    },

    {
      title: "جنسیت",
      dataIndex: "gender",
      render: (text, record) => <>{text}</>,
      sorter: (a, b) => a.joineddate.length - b.joineddate.length,
    },

    {
      title: "اخرین ورود",
      dataIndex: "user",
      render: (text, record) => (
        <>{new Date(text.last_login).toLocaleDateString()}</>
      ),
      sorter: (a, b) => a.lastlogin.length - b.lastlogin.length,
    },
    {
      title: "شهر",
      dataIndex: "city",
      render: (text, record) => <>{text.name}</>,
      sorter: (a, b) => a.lastlogin.length - b.lastlogin.length,
    },

    {
      title: "",
      dataIndex: "",
      render: (text, record) => (
        <>
          <div className="three-dots">
            <Link
              to="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
              onClick={(event) => {
                setdeleteduserid(text.user.id);
              }}
            >
              <i className="fas fa-ellipsis-v" />
            </Link>
            <div className="dropdown-menu user-menu-list">
              <Link
                className="dropdown-item"
                to={{
                  pathname: "/developer-profile",
                  state: { idInfo: text.id },
                }}
                data-bs-toggle="modal"
                data-bs-target="#transaction-category"
              >
                <img className="ms-2 " src={icon_01} alt="" /> مشاهده جزییات
              </Link>

              <Link
                className="dropdown-item mb-0"
                to="#"
                onClick={(event) => {
                  event.preventDefault();
                  handledeleteSubmit();
                }}
              >
                <FeatherIcon icon="trash-2" className="ms-2 text-danger" /> حذف
              </Link>
            </div>
          </div>
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
    dispatch(employeeListAll());
  }, [dispatch, successdel]);

  return (
    <>
      <div className="main-wrapper">
        <Sidebar />
        <>
          {/* Page Wrapper */}
          <div className="page-wrapper">
            <div className="content report-box container-fluid">
              {/* Page Header */}
              <div className="page-header subscribe-head">
                <div className="row align-items-center">
                  <div className="col">
                    <h3 className="page-title">کارجویان</h3>
                  </div>
                  <div className="col-auto"></div>
                </div>
              </div>
              {/* /Page Header */}
              <div className="row">
                <div className="col-sm-12">
                  {/* Active User Header */}
                  <div className="page-header user-active">
                    <div className="row align-items-center">
                      <div className="col"></div>
                      <div className="col-auto">
                        <Link to="#" className="btn export-btn ms-1">
                          <img src={export_icon} alt="" /> دانلود
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* /Active User Header */}

                  <div className="card ">
                    {loading ? (
                      <Loader />
                    ) : (
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
                    )}
                  </div>
                  <div className="row"></div>
                </div>
              </div>
            </div>
          </div>
          {/* /Page Wrapper */}
          <AddFreelancer />

          <ViewDetails />
        </>
      </div>
    </>
  );
};

export default Users;
