import Invoices from "../components/Invoices";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [invoices, setInvoices] = useState([]);
  const [originalInvoices, setOriginalInvoices] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [filterElement, setFilterElement] = useState([
    {
      checked: false,
      text: "draft",
    },
    {
      checked: false,
      text: "pending",
    },
    {
      checked: false,
      text: "paid",
    },
  ]);

  // useEffect(() => {
  //   const result = filterElement.map((el) => {
  //     if (el.checked) {
  //       return `|${el.text}`;
  //     } else {
  //       return "";
  //     }
  //   });

  //   setFilter(result.slice(1));
  //   console.log(result.slice(1));
  // }, [JSON.stringify(filterElement)]);

  useEffect(() => {
    setLoading(true);
    fetch("https://json-api.uz/api/project/invoice-app-fn43/invoices")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoices(res.data);
        setOriginalInvoices(res.data);
      })
      .catch(() => {
        setError("Xatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const activeFilters = filterElement
      .filter((el) => el.checked)
      .map((el) => el.text);
    console.log(activeFilters, "activelae");
    if (activeFilters.length === 0) {
      setInvoices(originalInvoices);
      return;
    }

    const filtered = originalInvoices.filter((inv) =>
      activeFilters.includes(inv.status)
    );

    setInvoices(filtered);
  }, [filterElement, originalInvoices]);

  return (
    <div>
      <Header
        total={invoices.length > 0 ? invoices.length : null}
        filterElement={filterElement}
        setFilterElement={setFilterElement}
      />
      <Invoices invoices={invoices} loading={loading} error={error} />
    </div>
  );
}
