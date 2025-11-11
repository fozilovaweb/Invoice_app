import React from "react";

function StatusBage({ status = "draft" }) {
  const styles = {
    draft: {
      bc: "bg-[rgba(55,59,83,5%)]",
      text: "text-[#373b53]",
      dot: "bg-[#373b53]",
    },
    pending: {
      bc: "bg-[rgba(255,143,0,5%)]",
      text: "text-[#ff8f00]",
      dot: "bg-[#ff8f00]",
    },
    paid: {
      bc: "bg-[rgba(51,214,159,5%)]",
      text: "text-[#33d69f]",
      dot: "bg-[#33d69f]",
    },
  };
  return (
    <span
      className={`inline-flex  justify-center items-center gap-2 py-3 px-[18px] rounded-md ${styles[status].bc} min-w-[104px]`}
    >
      <span
        className={`w-2 h-2 inline-block ${styles[status].dot} rounded-full`}
      ></span>
      <span
        className={`capitalize ${styles[status].text} font-medium text-[12px]`}
      >
        {status}
      </span>
    </span>
  );
}

export default StatusBage;
