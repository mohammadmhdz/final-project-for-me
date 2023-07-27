import React, { useState } from "react";
import { Link } from "react-router-dom";

// {setShow3,toggleSetShowTwo,setShow2,toggleSetShowThree}
const ProfessionalInfo = ({ nextTab2, prevTab2 }) => {
  const [addList1, setAddList1] = useState([""]);
  const [addList2, setAddList2] = useState([""]);
  const [addList3, setAddList3] = useState([""]);
  const [addList4, setAddList4] = useState([""]);

  const handelAddOne = () => {
    setAddList1([...addList1, " "]);
  };

  const handelRemoveOne = (index) => {
    const list1 = [...addList1];
    list1.splice(index, 1);
    setAddList1(list1);
  };

  const handelAddTwo = () => {
    setAddList2([...addList2, " "]);
  };

  const handelRemoveTwo = (award) => {
    const list2 = [...addList2];
    list2.splice(award, 1);
    setAddList2(list2);
  };

  const handelAddThree = () => {
    setAddList3([...addList3, " "]);
  };

  const handelRemoveThree = (edu) => {
    const list3 = [...addList3];
    list3.splice(edu, 1);
    setAddList3(list3);
  };

  const handelAddFour = () => {
    setAddList4([...addList4, " "]);
  };

  const handelRemoveFour = (design) => {
    const list4 = [...addList4];
    list4.splice(design, 1);
    setAddList4(list4);
  };

  return (
    <>
      {/* Professional Info */}
      <div className=" field-card select-account select-btn align-right ">
        {" "}
        {/* style={{ display: setShow3 ? "block" : "none" }} */}
        <div className="text-center onboard-head">
          <h2>اطلاعات کاری</h2>
          <p>
            خود را به بهترین شکل معرفی کنید تا مورد توجه کارجویان قرار بگیرید.
            تجربیات تحصیلات و مهارت های خود را اضافه کنید.
          </p>
        </div>
        <div className="field-item personal-info space-info">
          <div id="individual">
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">
                  مهارت ها <span>*</span>
                </label>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="مثال : HTML/CSS"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <select name="price" className="form-control select-level">
                    <option value="">ابتدایی</option>
                    <option value="">متوسط</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="new-addd align-left">
                  <Link
                    to="#"
                    className="add-new"
                    id="skill_add"
                    onClick={handelAddFour}
                  >
                    <i className="fas fa-plus" /> اضافه کردن
                  </Link>
                </div>
              </div>
              <div id="skill_add_row" />
            </div>

            {addList4.map((value, design) => (
              <div key={design} className="row">
                <div className="col-md-12 col-lg-2">
                  <label className="focus-label"></label>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مثال : HTML/CSS"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-group">
                    <select name="price" className="form-control select-level">
                      <option value="">ابتدایی</option>
                      <option value="">متوسط</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="new-addd align-left">
                    <Link
                      to="#"
                      style={{ color: "red" }}
                      onClick={() => handelRemoveFour(design)}
                    >
                      حذف
                    </Link>
                  </div>
                </div>
                <div id="skill_add_row" />
              </div>
            ))}

            {/* Second-Add */}
            <div className="row  mb-4">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">تحصیلات</label>
              </div>
              <div className="col-md-2 col-lg-1">
                <div className="form-group">
                  <select
                    name="price"
                    className="form-control select-level select-edu"
                  >
                    <option value={0}>تهران</option>
                    <option value={1}>زنجان</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <select name="price" className="form-control select-level">
                    <option value={0}>نام موسسه/دانشگاه</option>
                    <option value={1}>دانشگاه</option>
                    <option value={1}>موسسه</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <select name="price" className="form-control select-level">
                    <option value={0}>کارشناسی</option>
                    <option value={1}>کاردانی</option>
                    <option value={1}>کارشناسی ارشد</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2 col-lg-1">
                <div className="form-group">
                  <select
                    name="price"
                    className="form-control select-level select-edu"
                  >
                    <option value={0}>سال</option>
                    <option value={1}>۱۳۹۷</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="new-addd">
                  <Link
                    to="#"
                    className="add-new"
                    id="edu_add"
                    onClick={handelAddThree}
                  >
                    <i className="fas fa-plus" /> اضافه کردن
                  </Link>
                </div>
              </div>
              <div id="education_add_row" />
            </div>

            {addList3.map((value, edu) => (
              <div key={edu} className="row mb-4">
                <div className="col-md-12 col-lg-2">
                  <label className="focus-label"></label>
                </div>
                <div className="col-md-2 col-lg-1">
                  <div className="form-group">
                    <select
                      name="price"
                      className="form-control select-level select-edu"
                    >
                      <option value={0}>تهران</option>
                      <option value={1}>زنجان</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <select name="price" className="form-control select-level">
                      <option value={0}>نام موسسه/دانشگاه</option>
                      <option value={1}>دانشگاه</option>
                      <option value={1}>موسسه</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <select name="price" className="form-control select-level">
                      <option value={0}>کارشناسی</option>
                      <option value={1}>کاردانی</option>
                      <option value={1}>کارشناسی ارشد</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2 col-lg-1">
                  <div className="form-group">
                    <select
                      name="price"
                      className="form-control select-level select-edu"
                    >
                      <option value={0}>سال</option>
                      <option value={1}>۱۳۹۷</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="new-addd">
                    <Link
                      to="#"
                      style={{ color: "red" }}
                      onClick={() => handelRemoveThree(edu)}
                    >
                      حذف
                    </Link>
                  </div>
                </div>
                <div id="education_add_row" />
              </div>
            ))}
            {/* /Second-Add */}

            {/* Third-Add */}
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">گواهی ها </label>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="گواهی یا جایزه"
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="اخذ شده از:"
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <select name="price" className="form-control select-level">
                    <option value={0}>سال</option>
                    <option value={1}>۱۳۹۵</option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="new-addd">
                  <Link
                    to="#"
                    className="add-new"
                    id="certify_add"
                    onClick={handelAddTwo}
                  >
                    <i className="fas fa-plus" /> اضافه کردن
                  </Link>
                </div>
              </div>
              <div id="certify_add_row" />
            </div>

            {addList2.map((value, award) => (
              <div key={award} className="row">
                <div className="col-md-12 col-lg-2">
                  <label className="focus-label"> </label>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="گواهی یا جایزه"
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-3">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="اخذ شده از:"
                    />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form-group">
                    <select name="price" className="form-control select-level">
                      <option value={0}>سال</option>
                      <option value={1}>۱۳۹۹</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="new-addd">
                    <Link
                      to="#"
                      style={{ color: "red" }}
                      onClick={() => handelRemoveTwo(award)}
                    >
                      حذف
                    </Link>
                  </div>
                </div>
                <div id="certify_add_row" />
              </div>
            ))}
            {/* /Third-Add */}

            {/* forth-add */}
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">سابقه شغلی </label>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="عنوان یا سمت شغلی"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="نام شرکت"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 d-flex align-items-end">
                    <div className="form-group">
                      <label>شروع</label>
                      <select
                        name="price"
                        className="form-control select-level"
                      >
                        <option value="">ماه</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-end">
                    <div className="form-group">
                      <select
                        name="price"
                        className="form-control select-level"
                      >
                        <option value={0}>سال</option>
                        <option value={1}>2012</option>
                        <option value={1}>2013</option>
                        <option value={1}>2014</option>
                        <option value={1}>2015</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-end">
                    <div className="form-group">
                      <label>پایان</label>
                      <select
                        name="price"
                        className="form-control select-level"
                      >
                        <option value="">ماه</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-end">
                    <div className="form-group">
                      <select
                        name="price"
                        className="form-control select-level"
                      >
                        <option value={0}>سال</option>
                        <option value={1}>2012</option>
                        <option value={1}>2013</option>
                        <option value={1}>2014</option>
                        <option value={1}>2015</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="new-addd">
                  <Link
                    to="#"
                    className="add-new"
                    id="experience_add"
                    onClick={handelAddOne}
                  >
                    <i className="fas fa-plus" /> اضافه کردن
                  </Link>
                </div>
              </div>

              <div id="experience_add_row" />
            </div>

            {addList1.map((add, index) => (
              <div key={index} className="row">
                <div className="col-md-12 col-lg-2">
                  <label className="focus-label"> </label>
                </div>
                <div className="col-md-10 col-lg-8">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="عنوان یا سمت شغلی"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="نام شرکت"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3 d-flex align-items-end">
                      <div className="form-group">
                        <label>شروع</label>
                        <select
                          name="price"
                          className="form-control select-level"
                        >
                          <option value="">ماه</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                      <div className="form-group">
                        <select
                          name="price"
                          className="form-control select-level"
                        >
                          <option value={0}>سال</option>
                          <option value={1}>2012</option>
                          <option value={1}>2013</option>
                          <option value={1}>2014</option>
                          <option value={1}>2015</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                      <div className="form-group">
                        <label>پایان</label>
                        <select
                          name="price"
                          className="form-control select-level"
                        >
                          <option value="">ماه</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex align-items-end">
                      <div className="form-group">
                        <select
                          name="price"
                          className="form-control select-level"
                        >
                          <option value={0}>سال</option>
                          <option value={1}>2012</option>
                          <option value={1}>2013</option>
                          <option value={1}>2014</option>
                          <option value={1}>2015</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="new-addd">
                    <Link
                      to="#"
                      style={{ color: "red" }}
                      onClick={() => handelRemoveOne(index)}
                    >
                      حذف
                    </Link>
                  </div>
                </div>

                <div id="experience_add_row" />
              </div>
            ))}
            {/* /forth-add */}
            <div className="row">
              <div className="col-md-12 col-lg-2" />
              <div className="col-md-12 col-lg-10">
                <div className="form-group workin-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="remember"
                  />{" "}
                  در حال حاضر مشغول به کار میباشم
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2" />
              <div className="col-md-10 col-lg-8">
                <div className="form-group min-characters">
                  <textarea
                    className="form-control"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-2">
                <label className="focus-label">وبسایت شخصی </label>
              </div>
              <div className="col-md-10 col-lg-8">
                <div className="form-group">
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className="btn btn-prev prev_btn btn-back ms-3"
            name="next"
            type="button"
            defaultValue="بازگشت"
            onClick={prevTab2}
          />
          <input
            className="btn next_btn btn-primary btn-get btn-next"
            name="next"
            type="button"
            defaultValue="ثبت"
            onClick={nextTab2}
          />
        </div>
      </div>
      {/* /Professional info */}
    </>
  );
};

export default ProfessionalInfo;
