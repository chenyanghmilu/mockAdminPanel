import React, { Component } from "react";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-profile">
              <div className="card-avatar">
                <Link to="/javascript:;">
                  <img className="img" src="assets/img/faces/marc.jpg" alt="" />
                </Link>
              </div>
              <div className="card-body">
                <h6 className="card-category text-gray">Email:</h6>
                <p className="card-description">
                  {props.currentUser || `cy@example.com`}
                </p>
                <Link to="/javascript:;" className="btn btn-primary btn-round">
                  Follow
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
