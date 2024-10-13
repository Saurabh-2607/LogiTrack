import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage"; // Replace with the actual inventory component
import RouteOptimizationPage from "./pages/RouteOptimization"; // Replace with the actual route optimization component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/route-optimization" element={<RouteOptimizationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
