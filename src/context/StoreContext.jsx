import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [orders, setOrders] = useState([]);
  const [likes, setLikes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [measurements, setMeasurements] = useState({});

  return (
    <StoreContext.Provider value={{ orders, setOrders, likes, setLikes,selectedSizes, setSelectedSizes,measurements, setMeasurements }}>
      {children}
    </StoreContext.Provider>
  );
}
