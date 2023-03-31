import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

import Main from "./pages/Main";
import Play from "./pages/Play";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/play" element={<Play />} />
          <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
