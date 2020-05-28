import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";

const User = () => {
  var user = firebase.auth().currentUser;
  var email;

  if (user != null) {
    email = user.email;
  }
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
                <p className="card-description">{email}</p>
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
