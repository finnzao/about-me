<<<<<<< HEAD
import './App.css';
import Home from "./views/Home";
import Port from "./views/Port";
import Footer from "../src/components/Layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/port",
      element: <Port />
    }
  ])

  return (

    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/port" element={<Port />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
=======
import './App.css';
import Home from "./views/Home";
import Port from "./views/Port";
import Footer from "../src/components/Layout/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from 'react';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/port",
      element: <Port />
    }
  ])

  return (

    <div className="App">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/port" element={<Port />} />
          </Routes>
        </ScrollToTop>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
>>>>>>> d526fa272ed52c5957150f6feb0afff7f2520ff3
