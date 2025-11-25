import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Pen, RefreshCcw } from "lucide-react";
import EditElementSheet from "../components/EditElementSheet";
import { toast } from "sonner";
import Empty from "../components/Empty";
import { formatDate } from "../functions";

export default function Details() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleDelete() {
    setDeleteLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        toast.success(res);
        back();
      })
      .catch(() => {
        setError("Xatolik");
      })
      .finally(() => {
        setDeleteLoading(false);
      });
  }

  function setPaid() {
    setLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "paid",
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoice(res);
      })
      .catch(() => {
        setError("Xatolik");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function back() {
    navigate(-1);
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://json-api.uz/api/project/invoice-app-fn43/invoices/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setInvoice(res);
      })
      .catch(() => {
        setError("Something went wrong :(");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (error)
    return (
      <div>
        <Button onClick={back} className="mb-5" variant={"secondary"}>
          <ArrowLeft /> Back
        </Button>
        <Empty />
      </div>
    );

  if (loading) return <p>Loading...</p>;

  return (
    invoice && (
      <div className="py-10">
        <div className="container mx-auto px-5">
          <Button onClick={back} className="mb-5" variant={"secondary"}>
            <ArrowLeft /> Back
          </Button>
          <div className="rounded-md shadow p-3 flex  flex-col sm:justify-between sm:flex-row  items-center  justify-center">
            <span className="inline-flex items-center gap-5 mb-4 sm:mb-1">
              Status <StatusBadge status={invoice.status} />
            </span>

            <div className="flex gap-5">
              <EditElementSheet setInvoice={setInvoice} invoice={invoice} />
              <Button
                disabled={deleteLoading}
                onClick={handleDelete}
                variant={"destructive"}
              >
                {deleteLoading && <RefreshCcw className="animate-spin mr-4" />}{" "}
                Delete
              </Button>
              {invoice.status === "pending" && (
                <Button onClick={setPaid} variant={"outline"}>
                  Mark as Paid
                </Button>
              )}
            </div>
          </div>

          <div className="py-10">
            <div className="container mx-auto ">
              <div className="rounded-md shadow p-12 flex flex-col justify-between">
                <div className="flex  flex-col justify-center mb-2 md:justify-between md:flex-row md:gap-2">
                  <div className="flex gap-2 flex-col  mb-2">
                    <h1 className="font-bold text-4  ">
                      <span className="text-[#7e88c3]">#</span>
                      {invoice.elId}
                    </h1>
                    <p className="text-[#7e88c3]">{invoice.description}</p>
                  </div>
                  <div className=" flex flex-col  md:items-end text-[#7e88c3]">
                    <p>
                      {invoice.senderAddress?.city
                        ? ` ${invoice.senderAddress.city}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.senderAddress?.country
                        ? ` ${invoice.senderAddress.country}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.senderAddress?.postCode
                        ? ` ${invoice.senderAddress.postCode}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.senderAddress?.street
                        ? ` ${invoice.senderAddress.street}`
                        : "------"}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-cols-1 mb-15 md:mb-13 ">
                  <div className="flex flex-col gap-8">
                    <div>
                      <h2 className=" text-[#7e88c3] mb-2">Invoise Data</h2>
                      <p className="font-bold">
                        {invoice.createdAt
                          ? ` ${formatDate(invoice.createdAt)}`
                          : "---"}
                      </p>
                    </div>
                    <div>
                      {" "}
                      <h2 className=" text-[#7e88c3]">Payment Due</h2>
                      <p className="font-bold">
                        {invoice.paymentDue
                          ? ` ${formatDate(invoice.paymentDue)}`
                          : "---"}
                      </p>
                    </div>
                  </div>
                  <div className="text-[#7e88c3]">
                    <p className="mb-2">Bill To</p>
                    <h2 className="text-[#000] font-bold mb-2">
                      {invoice.clientName}
                    </h2>
                    <p>
                      {invoice.clientAddress?.city
                        ? ` ${invoice.clientAddress.city}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.clientAddress?.country
                        ? ` ${invoice.clientAddress.country}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.clientAddress?.postCode
                        ? ` ${invoice.clientAddress.postCode}`
                        : "------"}
                    </p>
                    <p>
                      {invoice.clientAddress?.street
                        ? ` ${invoice.clientAddress.street}`
                        : "------"}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#7e88c3]">Sent to</h2>
                    <p className="font-bold">{invoice.clientEmail}</p>
                  </div>
                </div>
                <div clasName="">
                  <div className="bg-[#f9fafe] rounded-t-2xl p-8">
                    {invoice.items.map((inv, index) => {
                      return (
                        <div
                          key={index}
                          className="grid sm:grid-cols-2 gap-2  grid-cols-1 md:grid-cols-4 items-center text-[#7e88c3] mb-8"
                        >
                          <div>
                            <div className="mb-2">Items Name</div>
                            <div className="font-bold text-[#000]">
                              {inv.name}
                            </div>
                          </div>
                          <div>
                            <div className="mb-2">QTY.</div>
                            <div>{inv.quantity}</div>
                          </div>
                          <div>
                            <div className="mb-2">Price</div>
                            <div>£{inv.price}</div>
                          </div>
                          <div>
                            <div className="mb-2">Total</div>
                            <div className="font-bold text-[#000]">
                              £{inv.total}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-[#373b53] text-[#fff] rounded-b-2xl p-8 flex flex-col justify-between items-center sm:flex-row">
                    <h3>Amount Due</h3>
                    <h2 className="font-bold text-2xl"> £ {invoice.total}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
