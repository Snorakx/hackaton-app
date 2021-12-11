import React from "react";
import "./style.css";
const MainPage = (props) => {
  return (
    <div className="main-page-container">
        <div className="main-page-form">
        <form>
            <div className="main-page-select">
                <select>
                    <option selected value="krakow">Kraków</option>
                    <option value="warszawa">Warszawa</option>
                </select>
            </div>
            <h2>Chcę jechać z</h2>
            <div className="main-page-route">
                <input type="text" value="dom"></input>
            </div>
        </form>
        </div>

    </div>
  );
};

export default MainPage;