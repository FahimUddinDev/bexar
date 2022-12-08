import React, { useState } from "react";

import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [bars, setbars] = useState(false);
  const [SActive, setSActive] = useState(false);
  const [BActive, setBActive] = useState(false);
  const searchSet = () => {
    setSearch(!search);
  };
  const subnav = () => {
    setbars(!bars);
  };
  return (
    <div className="navbar">
      <div className={search ? "deActive" : "active navBrand"}>
        <img src="images/logo.png" alt="brand" />
      </div>
      <div className={search ? "navInput active" : "deActive"}>
        <input
          className="searchInput"
          type="text"
          placeholder="Write & hit Enter"
        />
        <FontAwesomeIcon icon={faXmark} onClick={searchSet} />
      </div>
      <div className={search ? "deActive navList" : "navList"}>
        <div className={bars ? "active navBars" : "deActiveMenu navBars"}>
          <ul>
            <li
              onClick={() => {
                subnav();
                setBActive(false);
                setSActive(false);
              }}
              className
            >
              <NavLink
                to={"/home"}
                className={({ isActive }) => {
                  return isActive ? "navLink navActive" : "navLink";
                }}
              >
                Home
              </NavLink>
            </li>
            <li
              onClick={() => {
                subnav();
                setBActive(false);
                setSActive(false);
              }}
            >
              <NavLink
                to={"/aboutUs"}
                className={({ isActive }) =>
                  isActive ? "navLink navActive" : "navLink"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className={SActive ? "navActive" : "navLink"}>
              Service <FontAwesomeIcon icon={faCaretDown} />
              <div className="navsubMenu">
                <NavLink
                  onClick={() => {
                    subnav();
                    setBActive(false);
                    setSActive(true);
                  }}
                  to={"/service1"}
                  className={({ isActive }) =>
                    isActive
                      ? " navLink navsubLink navsubActive"
                      : "navLink navsubLink"
                  }
                >
                  Service 1
                </NavLink>
                <NavLink
                  onClick={() => {
                    subnav();
                    setBActive(false);
                    setSActive(true);
                  }}
                  to={"/service2"}
                  className={({ isActive }) =>
                    isActive
                      ? " navLink navsubLink navsubActive"
                      : "navLink navsubLink"
                  }
                >
                  Service 2
                </NavLink>
              </div>
            </li>
            <li
              onClick={() => {
                subnav();
                setBActive(false);
                setSActive(false);
              }}
            >
              <NavLink
                to={"/caseStudy"}
                className={({ isActive }) =>
                  isActive ? "navLink navActive" : "navLink"
                }
              >
                Projects
              </NavLink>
            </li>
            <li
              onClick={() => {
                subnav();
                setBActive(true);
                setSActive(false);
              }}
              className={BActive ? "navActive" : "navLink"}
            >
              Blog <FontAwesomeIcon icon={faCaretDown} />{" "}
              <div className="navsubMenu">
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive
                      ? " navLink navsubLink navsubActive"
                      : "navLink navsubLink"
                  }
                >
                  Blog
                </NavLink>
                <NavLink
                  to={"/blogSidebar"}
                  className={({ isActive }) =>
                    isActive
                      ? " navLink navsubLink navsubActive"
                      : "navLink navsubLink"
                  }
                >
                  Blog Sidebar
                </NavLink>
                <NavLink
                  to={"/blogDetails"}
                  className={({ isActive }) =>
                    isActive
                      ? " navLink navsubLink navsubActive"
                      : "navLink navsubLink"
                  }
                >
                  Blog Details
                </NavLink>
              </div>
            </li>
            <li
              onClick={() => {
                subnav();
                setBActive(false);
                setSActive(false);
              }}
            >
              <NavLink
                to={"/team"}
                className={({ isActive }) =>
                  isActive ? "navLink navActive" : "navLink"
                }
              >
                Team
              </NavLink>
            </li>
            <li
              style={{ display: "flex" }}
              onClick={() => {
                setbars(!bars);
                searchSet();
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li
              onClick={() => {
                subnav();
                setBActive(false);
                setSActive(false);
              }}
              className="button navSearch"
            >
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? "navBLink navBActive" : "navBLink"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={search ? "deActive" : "bars"}>
        <FontAwesomeIcon
          icon={bars ? faXmark : faBars}
          onClick={() => {
            setbars(!bars);
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
