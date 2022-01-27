import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./routes/Home";
import Nav from "./Components/Nav";
import Contact from "./routes/Contact";
// import Excel from "./routes/Excel"
// import Family from "./routes/Family";
import Login from "./routes/Login";
// import Game from "./routes/game/Game";
import Resume from "./routes/Resume";

import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact-me" element={<Contact />} />
          <Route path="resume" element={<Resume />} />

          {/* <Route path="excel" element={<Excel />} /> */}
          {/* <Route path="family" element={<Family />} /> */}
          {/* <Route path="game" element={<Game />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
