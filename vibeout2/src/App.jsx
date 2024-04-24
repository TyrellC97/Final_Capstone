import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SubBar from "./components/subBar/SubBar";
import MainFeed from "./components/mainFeed/MainFeed";
import MyPage from "./components/mainFeed/MyPage/MyPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className="main">
      <SubBar />
        <Routes>
          <Route path="/" element={<MainFeed />} />
          <Route path="/profile" element={<MyPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
