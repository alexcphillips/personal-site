import "./Nav.css";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { useDispatch, useSelector } from "react-redux";
// import { userLogout, userLogin } from "../store/reducers/userSlice";

export default function AppNav() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // if (!user || !user.token) {
  //   let userStorage = localStorage.getItem("user");

  //   if (userStorage) {
  //     userStorage = JSON.parse(userStorage);
  //     const bearerToken = `Bearer ${userStorage.token}`;
  //     axios.defaults.headers.common["authorization"] = bearerToken;
  //     dispatch(userLogin(userStorage));
  //   }
  // }

  const links = {
    left: [
      {
        linkAttributes: {
          to: "/"
        },
        text: "Alex"
      },
      // {
      //   linkAttributes: {
      //     to: "/contact-me"
      //   },
      //   text: "Contact Me"
      // },
      {
        linkAttributes: {
          to: "/contact-me"
        },
        text: "Contact me"
      },
      {
        linkAttributes: {
          to: "/resume"
        },
        text: "Resume"
      },
      {
        linkAttributes: {
          to: "/notes"
        },
        text: "Notes"
      }
      // {
      //   linkAttributes: {
      //     to: "/portfolio"
      //   },
      //   text: "Portfolio"
      // }

      // {
      //   linkAttributes: {}
      // }
      // {
      //   linkAttributes: {
      //     to: "/family"
      //   },
      //   text: "Family"
      // }
      // {
      //   linkAttributes: {
      //     to: "/game"
      //   },
      //   text: "Game"
      // }
    ],
    right: [
      // {
      //   hidden: () => user.token,
      //   linkAttributes: {
      //     to: "/login"
      //   },
      //   text: "Login"
      // },
      // {
      //   hidden: () => !user.token,
      //   itemAttributes: {
      //     onClick: async () => {
      //       // remove token from axios
      //       axios.defaults.headers.common["authorization"] = "";
      //       localStorage.removeItem("user");
      //       // notify backend
      //       axios.post("logout", { token: user.token });
      //       dispatch(userLogout());
      //       console.log("dispatched user logout user:", user);
      //       // go home
      //       navigate("/", { replace: true });
      //     }
      //   },
      //   text: "Logout"
      // }
    ]
  };

  return (
    <Navbar
      className="side-padding-10"
      collapseOnSelect
      expand="sm"
      sticky="top"
      bg="dark"
      variant="dark"
    >
      {/* <Link className="navbar-brand" id="no-margins" to="/">
        Alex
      </Link> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="vertical-center">
          {links.left.map(
            ({ hidden, itemAttributes, linkAttributes, text }, i) =>
              (!hidden || !hidden()) &&
              ((linkAttributes && (
                <Link key={i} className="nav-link" {...linkAttributes}>
                  {text + "  "}
                </Link>
              )) ||
                (itemAttributes && (
                  <div key={i} {...itemAttributes}>
                    {text + "  "}
                  </div>
                )))
          )}
        </Nav>

        <Nav className="ms-auto vertical-center">
          {links.right.map(
            ({ hidden, itemAttributes, linkAttributes, text }, i) =>
              (!hidden || !hidden()) &&
              ((linkAttributes && (
                <Link key={i} className="nav-link" {...linkAttributes}>
                  {text + "  "}
                </Link>
              )) ||
                (itemAttributes && (
                  <div className="nav-link" key={i} {...itemAttributes}>
                    {text + "  "}
                  </div>
                )))
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
