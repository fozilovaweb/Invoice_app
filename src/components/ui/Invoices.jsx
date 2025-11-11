import { useEffect, useState } from "react";

function Invoices() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://json-api.uz/api/project/invoice-app-fn43/invoices")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoices(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setError("Something went wrong :(");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
  }
  if (error) {
  }

  return <div>Invoices</div>;
}

export default Invoices;
