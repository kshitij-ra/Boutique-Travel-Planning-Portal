import React from 'react'
import PropTypes from 'prop-types';
import SolidButton from './solid-button'
import './login-form.css'

const LoginForm = (props) => {
  return (
    <div className="login-form-container">
      <h1 className="login-form-text">{props.formName}</h1>
      <form className="login-form-form">
        <div className="login-form-container1">
          <label className="login-form-label">User Name</label>
          <input
            type="text"
            required
            placeholder="Enter User Name"
            className="login-form-textinput input"
          />
        </div>
        <div className="login-form-container2">
          <label className="login-form-label1">Password</label>
          <input
            type="text"
            required
            placeholder="Enter Password"
            className="login-form-textinput1 input"
          />
        </div>
        <SolidButton
          rootClassName="solid-button-root-class-name"
          button="Login"
          onClick={props.btnClick}
        ></SolidButton>
      </form>
    </div>
  )
}

LoginForm.defaultProps = {
  btnClick: () => {},
  formName: "Admin Login"
};

LoginForm.propTypes = {
  btnClick: PropTypes.func,
  formName: PropTypes.string,
};

export default LoginForm
