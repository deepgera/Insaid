import React from "react";
import "./style.css";

function Header() {
  return (
    <header id="header_section">
      <div className="container">
        <div class="row align-items-center">
            <div className="col-12 align-items-center d-flex justify-content-center">
                <h1 className="header-content">Data Science or Product Management: Which career is right for you?</h1>
                <button className="header-btn">Talk to an Expert</button>
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;