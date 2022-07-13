import React, { Component } from "react";
import RegisterForm from "./RegisterForm";
import UserManagement from "./UserManagement";

export default class BaiTapReactForm extends Component {
  render() {
    return (
      <div className="mx-auto">
        <RegisterForm />
        <UserManagement />
      </div>
    );
  }
}
