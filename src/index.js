import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AboutMe from "./pages/AboutMe";
import Nav from "./Components/navbars/Nav";
import ContactMe from "./pages/Contact";
import Notes from "./pages/Notes/Notes";
import Note from "./pages/Notes/Note";
import AboutNotes from "./pages/AboutNotes.js";
import Tools from "./pages/Tools/Tools";
import Tool from "./pages/Tools/Tool";
// import Login from "./pages/Login";
// import Resume from "./pages/Resume";

import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="" element={<AboutMe />} />
          <Route path="contact-me" element={<ContactMe />} />
          {/* <Route path="resume" element={<Resume />} /> */}
          <Route path="notes" element={<Notes />}>
            <Route index element={<AboutNotes />} />

            <Route path=":name" element={<Note />} />
          </Route>
          {/* <Route path="tools" element={<Tools />}>
            <Route path=":name" element={<Tool />} />
          </Route> */}
          {/* <Route path="tools" element={<ToolsList />}> */}
          {/* <Route path="api" element={<ApiDashboard />} /> */}
          {/* <Route path="draw-ui" element={<DrawUi />} /> */}
          {/* <Route path="excel-data" element={<Excel />} /> */}
          {/* <Route path="list" element={<List />} /> */}
          {/* <Route path="calendar" element={<Calendar />} /> */}
          {/* <Route path="tier-list" element={<TierList />} /> */}
          {/* <Route path="todo" element={<Todo />} /> */}
          {/* <Route path="notes" element={<UserNotes />} /> */}
          {/* </Route> */}
          {/* <Route path="games" element={<GamesList />}> */}
          {/* <Route path="hangman" element={<Hangman />} /> */}
          {/* <Route path="worldle" element={<Wordle />} /> */}
          {/* <Route path="word-chain" element={<WordChain />} /> */}
          {/* <Route path="code-sandbox" element={<CodeSandbox />} /> */}
          {/* </Route> */}

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
