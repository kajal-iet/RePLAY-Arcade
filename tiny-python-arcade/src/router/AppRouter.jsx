import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GamePage from "../pages/GamePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}
