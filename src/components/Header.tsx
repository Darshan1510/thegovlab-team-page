import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container-fluid row justify-content-between align-items-center">
        <div className="d-none d-lg-inline-block col-lg-4">
          <div className="d-flex align-items-center">
            <button className="btn btn-link-icon">
              <i className="bi bi-list"></i>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-link-icon">
              <i className="bi bi-search"></i>
            </button>
            <input type="text" className="form-control form-control-sm search-input rounded-0" />
            <button className="btn btn-link text-decoration-none rounded-0">SEARCH</button>
          </div>
        </div>
        <div className="d-none d-lg-inline-block col-lg-4">
          <a href="./">
            <img
              height="26px"
              width="140px"
              src="https://thegovlab.org/static/img/the-govlab-logo-white.png"
              alt=""
            />
          </a>
        </div>
        <div className="col-lg-4 d-none d-lg-inline-flex justify-content-end align-items-center gap-2">
          <a
            href="https://thegovlab.org/our-sites"
            target="_blank"
            className="btn btn-link text-decoration-none rounded-0"
          >
            OUR SITES
          </a>
          <a href="https://twitter.com/TheGovLab" target="_blank" className="btn btn-link-icon">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.youtube.com/user/TheGovLab"
            target="_blank"
            className="btn btn-link-icon"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <div className="d-md-block d-lg-none col-md-12">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn more-btn-link-icon">
              <i className="bi bi-list"></i>
            </button>
            <a href="./" className="flex-grow-1">
              <img
                height="22px"
                width="100px"
                src="https://thegovlab.org/static/img/the-govlab-logo-white.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="d-md-block d-lg-none col-md-12">
          <div className="d-flex align-items-center">
            <button className="btn btn-link-icon">
              <i className="bi bi-search" style={{ fontSize: "16px" }}></i>
            </button>
            <input type="text" className="form-control form-control-sm search-input rounded-0" />
            <button className="btn btn-link text-decoration-none rounded-0">SEARCH</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
