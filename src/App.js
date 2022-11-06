import "./index.css";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import Coins from "./Coins";
import Footer from "./Footer";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  const toggle = () => {
    if (isDarkMode) setIsDarkMode(false);
    else setIsDarkMode(true);
  };

  useEffect(() => {
    if (!isDarkMode) {
      const rows = document.querySelectorAll("tr");
      // console.log(rows);
      rows.forEach((row) => {
        row.style.boxShadow = "none";
        row.style.outline = "thin solid";
      });
    } else {
      const rows = document.querySelectorAll("tr");
      // console.log(rows);
      rows.forEach((row) => {
        row.style.boxShadow = "0 0 12px #18191b";
        row.style.outline = "none";
      });
    }
  }, [isDarkMode]);

  return (
    <>
      <div className={`container ${isDarkMode ? "dark" : "light"}`}>
        <main className="main-container">
          <DarkModeSwitch
            onClick={toggle}
            style={{ marginBottom: "2rem" }}
            className="btn-toggle"
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />
          <div className="content-container">
            <h1 className="heading-title">
              Coin <span className="heading-chorus">Trace</span>
            </h1>
            <div className="table-container">
              <table className="table">
                <thead className="table-heading-row">
                  <tr>
                    <th>
                      <p>#</p>
                    </th>
                    <th>
                      <p>Coin</p>
                    </th>
                    <th>
                      <p>Price</p>
                    </th>
                    <th className="mobile-hide2">
                      <p>24h</p>
                    </th>
                    <th className="mobile-hide">
                      <p>Volume</p>
                    </th>
                    <th className="mobile-hide">
                      <p>Mkt Cap</p>
                    </th>
                  </tr>
                </thead>
                <Coins />
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
