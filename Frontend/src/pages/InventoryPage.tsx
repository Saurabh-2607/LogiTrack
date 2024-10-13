import React, { useEffect, useState } from "react";
import axios from "axios";

const InventoryPage: React.FC = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("/api/inventory");
        setInventoryData(response.data);
      } catch (error) {
        console.error("Error fetching inventory data:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Inventory Data</h1>
      <ul>
        {inventoryData.map(
          (item: { name: string; stock: number }, index: number) => (
            <li key={index}>
              {item.name}: {item.stock}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default InventoryPage;
