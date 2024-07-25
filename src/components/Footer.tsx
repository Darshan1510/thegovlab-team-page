// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row gap-4">
          <div className="col-md-3 text-start">
            <h6>Sections</h6>

            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Publications</a>
              </li>
              <li>
                <a href="#">Advisory Council</a>
              </li>
              <li>
                <a href="#">Job Board</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Our Transparency</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <a
              href="https://thegovlab.org/our-transparency"
              target="_blank"
              style={{
                textTransform: "uppercase",
                textDecoration: "none",
                backgroundColor: "#ffffff18",
              }}
              className="btn w-100 text-white btn-block"
            >
              Our Funders
            </a>
          </div>
          <div className="col-md-2 text-start">
            <h6>AFFILIATED WITH</h6>
            <a href="http://northeastern.edu/" target="_blank">
              <img
                src="https://thegovlab.org/static/img/burnes-logo-northeastern.png"
                alt="Affiliated Logo"
                className="affiliated-logo"
                style={{ maxHeight: "90px", padding: "10px 0px" }}
              />
            </a>
            <h6 className="mt-5">FOUNDED AT</h6>
            <a href="http://engineering.nyu.edu/tandon">
              <img
                src="https://thegovlab.org/static/img/partners/nyu.png"
                alt="Founded Logo"
                style={{
                  maxHeight: "60px",
                  maxWidth: "90%",
                  padding: "10px 0px",
                  marginTop: "10px",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
