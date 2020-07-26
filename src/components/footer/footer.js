import React from "react";
import "./footer.css";
function footer() {
  return (
    <footer className="footer">
      <div className="blank-bar"></div>
      <a className="copyRight" href="!#">
        {"\u00A9"} Copyright
      </a>
    </footer>
  );
}

export default footer;

