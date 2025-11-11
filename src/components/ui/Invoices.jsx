import { useState } from "react";

function Invoices() {
  const [invoices, setInvoices] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [filter, setFilter] = useState();

  fetch("https://json-api.uz/api/project/invoice-app-fn43/invoices")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch(() => {})
    .finally(() => {});
  return <div></div>;
}

export default Invoices;
