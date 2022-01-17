import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
// import AboutMe from "./routes/AboutMe";
// import Combat from "./routes/Combat";
// import Excel from "./routes/Excel"
import Family from "./routes/Family";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="about-me" element={<AboutMe />} />
          <Route path="combat" element={<Combat />} /> */}
          {/* <Route path="excel" element={<Excel />} /> */}
          <Route path="family" element={<Family />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p></p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
