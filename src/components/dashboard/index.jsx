import React from "react";
import Analytics from "./analytics/index.jsx";
import DashboardNavbar from "./navbar/index.jsx";
import RecentOrders from "./recentOrders/index.jsx";
import SalesOverview from "./salesOverview/index.jsx";
import { DF } from "./styles.js";
import Today from "./today/index.jsx";
import VisitCustomer from "./visitCustomers/index.jsx";

function Dashboard() {
  return (
    <div>
      <DashboardNavbar />
      <Today />
      <DF>
      <SalesOverview />
      <Analytics />
      </DF>
      <DF>
        <RecentOrders/>
        <VisitCustomer/>
      </DF>
    </div>
  );
}

export default Dashboard;
