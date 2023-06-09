import React, { useContext, useEffect, useState } from "react";
import { NewAppContext } from "../../App";
import Loader from "../../components/Loader/Loader";
import Progress from "../../components/Progress/Progress";
import useAuth from "../../hooks/useAuth";
import Payment from "../../Pages/Payment/Payment";

import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
// import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { toast } from "react-toastify";
import { splitButtonTemp } from "../../components/SplitButton/SplitButtonTemp";

export default function Finance() {
  const { depositInfo, setDepositInfo } = useContext(NewAppContext);
  const [loading, setLoading] = useState(false);
  const [depositInfo2, setDepositInfo2] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    //https://yellow-sparkly-station.glitch.me/
    try {
      setLoading(true);
      fetch(`https://yellow-sparkly-station.glitch.me/deposit`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          // console.log("event data", data[0].email);
          if (userInfo?.payRole === "finance") {
            const latestData = data.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            setDepositInfo(latestData);
            setDepositInfo2(latestData);
          } else {
            const filteredData = data?.filter(
              (d) => d?.email === userInfo?.email
            );
            const latestData = filteredData.sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            );
            setDepositInfo(latestData);
            setDepositInfo2(latestData);
          }
        });
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  }, []);

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText) {
      const matchedDetails = depositInfo?.filter(
        (details) =>
          details?.dmfID?.includes(searchText) ||
          details?.transactionID?.includes(searchText)
      );
      setDepositInfo(matchedDetails);
    } else {
      setDepositInfo(depositInfo2);
    }
  };
  const statusTemplate = (rowData) => {
    return (
      <span
        className={`product-badge status-${
          rowData.inventoryStatus ? rowData.inventoryStatus.toLowerCase() : ""
        }`}
      >
        {rowData.inventoryStatus}
      </span>
    );
  };
  const edit = (rowData) => {};

  const actionBodyTemplate = (rowData) => {
    const buttonTemp = [
      {
        label: "Edit",
        icon: "",
        command: (e) => {
          edit(rowData);
        },
      },
    ];
    return (
      <>
        {splitButtonTemp(
          rowData,
          {
            defaultFunc: "",
            defaultLabel: "Actions",
            defaultColor: "button",
            defaultIcon: "",
          },
          buttonTemp
        )}
      </>
    );
  };
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  const imageBodyTemplate = (rowData) => {
    return (
      <div className="p-multiselect-representative-option flex items-center ">
        <img
          className="rounded-full"
          alt={""}
          src={rowData?.image}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          width={32}
          style={{ verticalAlign: "middle" }}
        />
        <span className="image-text pl-2">{rowData?.displayName}</span>
      </div>
    );
  };
  const statusBodyTemplate = (rowData) => {
    return (
      <div>
        <span
          className={`${
            rowData?.status === "Accepted"
              ? "text-green-500"
              : "text-yellow-500"
          }`}
        >
          {rowData?.status}
        </span>
      </div>
    );
  };
  const dateBodyTemplate = (rowData) => {
    return (
      <div>
        <span>{rowData?.date.slice(0, 10)}</span>
      </div>
    );
  };

  return (
    <div>
      <div>
        {userInfo?.payRole === "member" && (
          <Progress depositInfo={depositInfo} />
        )}
        <div class="flex bg-gray-50 items-center p-2 rounded-md my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            onChange={handleSearch}
            className="bg-gray-50 outline-none ml-1 block  w-full"
            type="text"
            name=""
            id=""
            placeholder="search...by dmfID or transactionID"
          />
        </div>

        <DataTable
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          value={depositInfo}
          header="Deposit Information"
          responsiveLayout="scroll"
          loading={loading}
          showGridlines
        >
          <Column
            header="User"
            filterField="representative"
            showFilterMatchModes={false}
            filterMenuStyle={{ width: "10rem" }}
            style={{ minWidth: "0.5rem" }}
            body={imageBodyTemplate}
          />

          <Column field="depositAmount" header="Deposit Amount" />
          <Column field="dmfID" header="DMF ID" />
          <Column field="transactionID" header="Transaction ID" />
          <Column field="date" header="Date" body={dateBodyTemplate} />
          <Column field="paymentType" header="Method" />
          <Column field="status" header="Status" body={statusBodyTemplate} />
          {/* <Column field="action" header="Action" body={actionBodyTemplate} /> */}
        </DataTable>
      </div>
    </div>
  );
}
