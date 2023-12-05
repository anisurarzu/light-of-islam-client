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

import axios from "axios";

export default function CustomerInformation() {
  const { depositInfo, setDepositInfo } = useContext(NewAppContext);
  const [loading, setLoading] = useState(false);
  const [depositInfo2, setDepositInfo2] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    getOrderList();
    //https://yellow-sparkly-station.glitch.me/
    // https://yellow-sparkly-station.glitch.me
  }, []);
  const getOrderList = async () => {
    try {
      const res = await axios.get(
        `https://yellow-sparkly-station.glitch.me/deposit`
      );
      if (res?.status === 200) {
        setLoading(false);
        const sortedData = res?.data?.sort(
          (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
        );

        const filteredDataWithStatus = sortedData.filter(
          (item) => item.status !== "Remove"
        );
        // console.log("event data", data[0].email);
        setDepositInfo(filteredDataWithStatus);
        setDepositInfo2(filteredDataWithStatus);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err);
    }
  };

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText) {
      const matchedDetails = depositInfo?.filter(
        (details) =>
          details?.serialNo?.includes(searchText) ||
          details?.customerName?.includes(searchText)
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
        }`}>
        {rowData.inventoryStatus}
      </span>
    );
  };
  const edit = (rowData) => {
    setShowForm(true);
    setUpdateData(rowData);
  };

  const actionButton = (rowData) => {
    return (
      <div className="flex justify-center items-center">
        <Button
          loading={loading}
          type="submit"
          className={`p-button-success w-8 h-4`}
          title="Return"
          label="Return"
          icon="pi pi-pencil"
          onClick={() => edit(rowData)}
        />
      </div>
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
              ? "text-blue-600"
              : rowData?.status === "Rejected"
              ? "text-red-600"
              : rowData?.status === "Refund"
              ? "text-yellow-300"
              : "text-green-600"
          }`}>
          {rowData?.status}
        </span>
      </div>
    );
  };
  const dateBodyTemplate = (rowData) => {
    return (
      <div>
        <span>{rowData?.orderDate?.slice(0, 10)}</span>
      </div>
    );
  };
  const dateBodyTemplate2 = (rowData) => {
    return (
      <div>
        <span>{rowData?.deliveryDate?.slice(0, 10)}</span>
      </div>
    );
  };

  const hideModal = async () => {
    setShowForm(false);
    getOrderList();

    // setRowData(false);
  };

  return (
    <div>
      <div>
        {/*  {userInfo?.payRole === "member" && (
          <Progress depositInfo={depositInfo} />
        )} */}
        <div class="flex bg-gray-50 items-center p-2 rounded-md my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor">
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
            placeholder="search...by SL No or Customer Name"
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
          header="Customer Information"
          responsiveLayout="scroll"
          loading={loading}
          scrollable>
          <Column
            field="customerName"
            header="Customer"
            className="text-sm"
            style={{ minWidth: "150px" }}
          />
          <Column
            field="phoneNumber"
            header="Phone"
            className="text-sm"
            style={{ minWidth: "150px" }}
          />
          <Column
            field="address"
            header="Address"
            className="text-sm"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="totalOrder"
            header="Total Order"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="completedOrder"
            header="Completed Order"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="pendingOrder"
            header="Pending Order"
            style={{ minWidth: "200px" }}
          />
          <Column
            className="text-sm"
            field="rejectedOrder"
            header="ReejectedOrder"
            style={{ minWidth: "130px" }}
          />

          {/* <Column field="action" header="Update" body={actionButton} /> */}
        </DataTable>
      </div>
    </div>
  );
}
