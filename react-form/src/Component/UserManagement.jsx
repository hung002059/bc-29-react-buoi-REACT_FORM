import React, { Component } from "react";
import { connect } from "react-redux";
class UserManagement extends Component {
  renderUserList() {
    return this.props.userList.map((ele) => {
      const { id, fullName, phone, email } = ele;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{fullName}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>
            <button className="btn m-1 btn-success">EDIT</button>
            <button className="btn m-1 btn-danger">DELETE</button>
          </td>
        </tr>
      );
    });
  }
  render() {
    return (
      <table className="table text-center">
        <thead className="bg-dark text-white">
          <tr>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>SĐT</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderUserList()}</tbody>
      </table>
    );
  }
}

const mapPropsToState = (state) => {
  return {
    ...state.userReducer,
  };
};
export default connect(mapPropsToState)(UserManagement);
