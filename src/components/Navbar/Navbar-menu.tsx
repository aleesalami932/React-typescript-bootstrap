import React from "react";

const NavbarMenu = () => {
  return (
    <div className="collapse navbar-collapse" id="navmenu">
      <ul className="nav nav-pills navbar-nav ms-auto">
        <li className="nav-item">
          <a href="learn" className="nav-link">
            Learning Material
          </a>
        </li>
        <li className="nav-item">
          <a href="questions" className="nav-link">
            Questions
          </a>
        </li>
        <li className="nav-item">
          <a href="instructors" className="nav-link">
            Instructors
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
