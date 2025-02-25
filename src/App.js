import "./App.css";
import { Footer, Header } from "./components/Components";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./screens/Home/index";
import Codex from "./screens/Codex/index";
import Tales from "./screens/Tales/index";
import World from "./screens/World/index";
import Bestiary from "./screens/World/SubPages/Bestiary";
import Legends from "./screens/Legends/index";
import LegendItem from "./screens/Legends/LegendItem/index";
import About from "./screens/About/index";

function App() {
  return (
    <Router>
      <Header/>
      <Routes style={styles.container}>
        <Route path="/" element={<Home />} />
        <Route path="/novidades" element={<Home />} />
        <Route path="/contos" element={<Tales/>} />
        <Route path="/mundo" element={<World/>} />
        <Route path="/codex" element={<Codex/>}/>
        <Route path="/codex/bestiario" element={<Bestiary/>}/>
        <Route path="/lendas" element={<Legends/>}/>
        <Route path="/lendas/a" element={<LegendItem/>}/>
        <Route path="/sobre" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

const styles = {
  container: {
    backgroundColor: "black",
    height: "100vh",
  },
};

export default App;
