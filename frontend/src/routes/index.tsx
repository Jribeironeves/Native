import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Dashboard } from "../pages/Dashboard";
import { CustomersCityPage } from "../pages/Dashboard/CustomersByCity";
import { CustomersId } from "../pages/Dashboard/CustomersId";
import { Customers } from "../pages/Customers";

export const Routa: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/customers-city" element={<CustomersCityPage />} />
        <Route path="/dashboard/customers/:id" element={<CustomersId />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </>
  );
};
