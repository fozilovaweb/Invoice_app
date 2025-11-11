import React from "react";
import Invoices from "../components/ui/Invoices";
import StatusBage from "../components/StatusBage";

function Home() {
  return (
    <div>
      Home
      <Invoices />
      <StatusBage status="pending" />
    </div>
  );
}

export default Home;
