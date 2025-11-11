import React from "react";
import StatusBage from "./StatusBage";
import { formatDate } from "../function";

function InvoiceCard({ elId, paymentDue, clientName, total, status }) {
  return (
    <div className=" flex py-4 px-8 rounded-xl shadow-md justify-between items-center">
      <span className="font-bold text-[12px]">
        <span className="text-[#7e88c3]">#</span>
        {elId}
      </span>
      <time className="text-[#7e88c3]" dateTime={paymentDue}>
        Due {formatDate(paymentDue)}
      </time>
      <h3 className="text-[#858bb2]">{clientName}</h3>
      <span className="text-[16px] font-bold">{total}</span>
      <StatusBage status={status} />
    </div>
  );
}

export default InvoiceCard;
