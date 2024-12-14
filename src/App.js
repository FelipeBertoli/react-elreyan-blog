import "./App.css";
import { Footer, Navbar } from "./components/Components";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./screens/Home/index";
import Elreyan from "./screens/Elreyan";

function App() {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
}

function RouteWrapper() {
  const location = useLocation();
  const isElreyan = location.pathname === "/elreyan";

  return (
    <div className={`App ${isElreyan ? "elreyan-theme" : ""}`}>
      <Navbar />
      <Routes style={styles.container}>
        <Route path="/" element={<Home />} />
        <Route path="/elreyan" element={<Elreyan />} />
      </Routes>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'black',
    height: "100vh",
  },
};

export default App;
