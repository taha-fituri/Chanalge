import React from "react";
import "../../App.css";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      {/* Footer Code */}
      <div className="mainfooter">
        <div className="row">
          <div className="col-3">
            <h5>Links</h5>
            <ul className="nav flex-column">
              {/* <ul className="list-unstyled"> */}
              <li>
                <a href="#!">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <i className="fa-brands fa-instagram-square"></i>
              </li>
              <li>
                <a href="#!">
                  <i className=" fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h5>Contact US</h5>
            <ul className="nav flex-column">
              {/* <ul className="list-unstyled"> */}
              <li>
                <a href="#!">Email address : tahatiay53@gmail.com</a>
              </li>
              <li>
                <a href="#!">Phone Number : 0021654080468</a>
              </li>
              <li>
                <a href="#!">Other Ph Num : 00218916627970</a>
              </li>
              <li>
                <a href="#!">Address : Aluwaina-tunes</a>
              </li>
            </ul>
          </div>

          <div className="col-4 offset-1">
            <form>
              <h5>Subscribe to our new Courses</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-center py-4 my-4 border-top">
          <p>© 2022 Company, Raqame . All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
