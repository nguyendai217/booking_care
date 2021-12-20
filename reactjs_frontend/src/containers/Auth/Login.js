import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPass: false,
    };
  }

  handleOnChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleOnchangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleLogin = () => {};

  handleShowPassword = () => {
    this.setState({
      isShowPass: !this.state.isShowPass,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 from-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(event) => {
                  this.handleOnChange(event);
                }}
              />
            </div>
            <div className="col-12 from-group login-input">
              <label>Password:</label>
              <div className="custom-input-password">
                <input
                  className="form-control"
                  type={this.state.isShowPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={this.state.password}
                  onChange={(event) => {
                    this.handleOnchangePassword(event);
                  }}
                />
                <span
                  onClick={() => {
                    this.handleShowPassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPass ? "fa fa-eye" : "fa fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={(event) => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>

            <div className="col-12 ">
              <span className="forgot-password">Forgot your password ?</span>
            </div>
            <div className="col-12 text-center">
              <span>Or login with:</span>
            </div>
            <div className="social-login">
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-facebook-f"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
