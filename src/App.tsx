import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<ComponentOne />} />
            <Route path="/two" element={<ComponentTwo />} />
            <Route path="/three" element={<ComponentThree />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
