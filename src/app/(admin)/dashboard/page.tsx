"use client";
import React from "react";
import DashboardSummary from "./DashboardSummary";
import Vaults from "@/components/Fragment/Vault";

const AdminPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <DashboardSummary />
      <Vaults />
    </div>
  );
};

export default AdminPage;
