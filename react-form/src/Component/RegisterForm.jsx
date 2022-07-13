import React, { Component } from "react";

export default class RegisterForm extends Component {
  state = {
    user: { id: "", fullName: "", phone: "", email: "" },
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      user: {
        ...this.state.user,
        [name]: value,
      },
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h4>Thông tin sinh viên</h4>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6 form-group">
              <label>Mã SV</label>
              <input
                onChange={this.handleChange}
                name="maSV"
                type="text"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
            <div className="col-6 form-group">
              <label>Họ Tên</label>
              <input
                onChange={this.handleChange}
                name="fullName"
                type="text"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
            <div className="col-6 form-group">
              <label>SĐT</label>
              <input
                onChange={this.handleChange}
                name="phone"
                type="text"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
            <div className="col-6 form-group">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                name="email"
                type="text"
                className="form-control"
                aria-describedby="helpId"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
