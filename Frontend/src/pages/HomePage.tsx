import React from "react";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const navigateToInventory = () => {
    navigate("/inventory");
  };

  const navigateToRouteOptimization = () => {
    navigate("/route-optimization");
  };
  return (
    <div>
      <h1>Welcome to the Last Mile Delivery System</h1>
      <p>Manage your inventory and optimize delivery routes efficiently.</p>
      <button onClick={navigateToInventory}>Go to Inventory Page</button>
      <button onClick={navigateToRouteOptimization}>
        Go to Route Optimization
      </button>
    </div>
  );
};

export default HomePage;
