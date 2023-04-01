import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { GameProvider } from "./context/GameContext";
import Main from "./pages/Main";
import Play from "./pages/Play";
import Result from "./pages/Result";

function App() {
  return (
    <GameProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/play" element={<Play />} />
          <Route path="/result" element={<Result />} />
      </Routes>
        </Router>
    </GameProvider>
  );
}

export default App;
