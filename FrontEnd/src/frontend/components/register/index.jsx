import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";
import Message from "../../../Message";
import Loader from "../../../Loader";
import { register } from "../../../actions/userActions";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  useEffect(() => {
    document.body.className = "account-page";
    return () => {
      document.body.className = "";
    };
  });

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (password != confirmPassword) {
      setMessage("رمزهای عبور یکسان نیست");
    } else {
      dispatch(register(email, password));
    }
  };
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              {/* Register Tab Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <Link to="/">
                        <img src={Logo_01} alt="logo" className="img-fluid" />
                      </Link>
                      <h3>در کمک کار عضو شوید</h3>
                      <p>
                         به صورت حرفه ای نیروی کار استخدام کنید و یا به شرکت های
                        برتر بپیوندید
                      </p>
                    </div>
                    {/* <nav className="user-tabs mb-4">
                      <ul
                        role="tablist"
                        className="nav nav-pills nav-justified"
                      >
                        <li className="nav-item">
                          <a
                            href="#developer"
                            data-bs-toggle="tab"
                            className="nav-link active"
                          >
                            کارجو
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#company"
                            data-bs-toggle="tab"
                            className="nav-link"
                          >
                            کارفرما
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                    <div className="tab-content pt-0">
                      <div
                        role="tabpanel"
                        id="developer"
                        className="tab-pane fade active show"
                      >
                        {message && (
                          <Message variant="danger">{message}</Message>
                        )}
                        {/* {error && <Message variant="danger">{error}</Message>}
                        {loading && <Loader />} */}
                        <form
                          onSubmit={submitHandler}
                          //  action="/template-reactjs/onboardScreen"
                        >
                          <div className="form-group form-focus">
                            <input
                              type="email"
                              className="form-control floating"
                              style={{ textAlign: "Left" }}
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="focus-label">ایمیل </label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                              style={{ textAlign: "Left" }}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="focus-label">رمزعبور</label>
                          </div>
                          <div className="form-group form-focus mb-0">
                            <input
                              type="password"
                              className="form-control floating"
                              style={{ textAlign: "Left" }}
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <label className="focus-label">
                              تایید رمز عبور
                            </label>
                          </div>
                          <div className="dont-have align-right">
                            <label className="custom_check ">
                              <input
                                type="checkbox"
                                name="rem_password"
                                style={{ textAlign: "Left" }}
                                onChange={handleCheckboxChange}
                              />
                              با{" "}
                              <Link to="/privacy-policy">قوانین و ضوابت</Link>{" "}
                              کمک کار موافقم <span className="checkmark" />
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                            disabled={!isChecked}
                          >
                            موافقت
                          </button>
                          <div className="login-or">
                            <p>یا از این طریق وارد شوید</p>
                          </div>
                          <div className="row social-login">
                            <div className="col-4">
                              <a href="#" className="btn btn-twitter btn-block">
                                {" "}
                                Twitter
                              </a>
                            </div>
                            <div className="col-4">
                              <a
                                href="#"
                                className="btn btn-facebook btn-block"
                              >
                                {" "}
                                Facebook
                              </a>
                            </div>
                            <div className="col-4">
                              <a href="#" className="btn btn-google btn-block">
                                {" "}
                                Google
                              </a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 text-start">
                              <Link
                                className="forgot-link"
                                to="/forgot-password"
                              >
                                رمزعبور خود را فراموش کرده اید؟
                              </Link>
                            </div>
                            <div className="col-6 text-end dont-have">
                              قبلا ثبت نام کرده اید؟{" "}
                              <Link to="/login">اینجا کلیک کنید</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div
                        role="tabpanel"
                        id="company"
                        className="tab-pane fade"
                      >
                        <form>
                          <div className="form-group form-focus">
                            <input
                              type="email"
                              className="form-control floating"
                            />
                            <label className="focus-label">نام کاربری</label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="email"
                              className="form-control floating"
                            />
                            <label className="focus-label">ایمیل </label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                            />
                            <label className="focus-label">رمزعبور</label>
                          </div>
                          <div className="form-group form-focus mb-0">
                            <input
                              type="password"
                              className="form-control floating"
                            />
                            <label className="focus-label">تایید رمزعبور</label>
                          </div>
                          <div className="dont-have align-right">
                            <label className="custom_check">
                              <input type="checkbox" name="rem_password" />
                              <span className="checkmark" /> با{" "}
                              <Link to="/privacy-policy">قوانین و ضوابت</Link>{" "}
                              کمک کار موافقم{" "}
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            موافقت
                          </button>
                          <div className="login-or">
                            <p>یا از این طریق وارد شوید</p>
                          </div>
                          <div className="row form-row social-login">
                            <div className="col-4">
                              <a href="#" className="btn btn-twitter btn-block">
                                {" "}
                                Twitter
                              </a>
                            </div>
                            <div className="col-4">
                              <a
                                href="#"
                                className="btn btn-facebook btn-block"
                              >
                                {" "}
                                Facebook
                              </a>
                            </div>
                            <div className="col-4">
                              <a href="#" className="btn btn-google btn-block">
                                {" "}
                                Google
                              </a>
                            </div>
                          </div>
                          <div className="row form-now">
                            <div className="col-6 text-start">
                              <Link
                                className="forgot-link"
                                to="/forgot-password"
                              >
                                رمزعبور خود را فراموش کرده اید؟
                              </Link>
                            </div>
                            <div className="col-6 text-end dont-have">
                              قبلا ثبت نام کرده اید؟{" "}
                              <Link to="/login">اینجا کلیک کنید</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Register Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Register;
