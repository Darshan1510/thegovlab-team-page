import React from "react";
import Header from "./components/Header";
import TeamPage from "./components/TeamPage";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <TeamPage />
      <Footer />
      <div
        className="d-flex justify-content-center align-items-center gap-4"
        style={{ backgroundColor: "black", color: "white", height: "90px", fontSize: "14px" }}
      >
        <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
          <img
            src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png"
            height="40px"
            className="text-center"
          />
        </a>
        <div>
          <p>
            This work is licensed under a{" "}
            <a
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              className="text-decoration-none text-white"
            >
              Creative Commons Attribution-ShareAlike 4.0 International License
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
