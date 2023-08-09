import React from "react";
import Layout from "./components/layout/Layout"
import Home from "./components/home/Home"
import Education from "./components/education/Education"
import WorkExperience from "./components/experience/Work-Experience"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/education" element={<Outlet />}>
            <Route index element={<Education />} />
          </Route>
          <Route path="/projects" element={<Outlet />}>
            <Route index element={<Projects />} />
          </Route>
          <Route path="/work-experience" element={<Outlet />}>
            <Route index element={<WorkExperience />} />
          </Route>
          <Route path="/contact" element={<Outlet />}>
            <Route index element={<Contact />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
