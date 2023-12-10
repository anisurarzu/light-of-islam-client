import React, { useContext, useEffect, useMemo, useState } from "react";
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

import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { useFormik } from "formik";

export default function Report() {
  // const { depositInfo, setDepositInfo } = useContext(NewAppContext);
  const [loading, setLoading] = useState(false);
  const [depositInfo, setDepositInfo] = useState([]);
  const [depositInfo2, setDepositInfo2] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showForm1, setShowForm1] = useState(false);
  const [updateData, setUpdateData] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    // getOrderList();
    //https://yellow-sparkly-station.glitch.me/
    // https://yellow-sparkly-station.glitch.me
  }, []);

  const formik = useFormik({
    initialValues: {
      customerName: "",
      value: "",
      brand: "",
      startDate: useMemo(
        () => new Date(Date.now() - 17 * 24 * 60 * 60 * 1000),
        []
      ),
      endDate: useMemo(() => new Date(), []),
    },
    onSubmit: async (data) => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://yellow-sparkly-station.glitch.me/depositWithDate?startDate=${data?.startDate
            ?.toISOString()
            ?.slice(0, 10)}&endDate=${data?.endDate
            ?.toISOString()
            ?.slice(0, 10)}`
        );
        if (res?.status === 200) {
          setLoading(false);
          const sortedData = res?.data?.sort(
            (a, b) => new Date(b.orderDate) - new Date(a.orderDate)
          );
          const filteredDataWithStatus = sortedData?.filter(
            (item) => item.status === "Completed"
          );
          setDepositInfo(sortedData);
          setDepositInfo2(sortedData);
          setFilteredData(filteredDataWithStatus);
        }
      } catch (err) {}
    },
  });
  console.log("res", depositInfo);

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
  const invoiceView = (rowData) => {
    setShowForm1(true);
    setUpdateData(rowData);
  };

  /* const actionButton = (rowData) => {
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
  }; */

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
    setShowForm1(false);
    // getOrderList();

    // setRowData(false);
  };

  const actionButton = (rowData) => {
    const buttonTemp = [
      {
        label: "Update Status",
        icon: "pi pi-comments",
        command: (e) => {
          edit(rowData);
        },
      },
      {
        label: "Invoice",
        icon: "pi pi-comments",
        command: (e) => {
          invoiceView(rowData);
        },
      },
    ];
    return (
      <>
        {splitButtonTemp(
          rowData,
          { defaultFunc: "", defaultIcon: "pi pi-clip" },
          buttonTemp
        )}
      </>
    );
  };

  const totalAmount = depositInfo?.reduce(
    (acc, item) => acc + parseInt(item.serviceCost, 10),
    0
  );
  const discount = depositInfo?.reduce(
    (acc, item) => acc + parseInt(item.discount, 10),
    0
  );
  const finalAmount = totalAmount - discount;

  const completedTotalAmount = filteredData?.reduce(
    (acc, item) => acc + parseInt(item.serviceCost, 10),
    0
  );
  const completedDiscount = filteredData?.reduce(
    (acc, item) => acc + parseInt(item.discount, 10),
    0
  );
  const completedFinalAmount = completedTotalAmount - completedDiscount;
  const profit = filteredData?.reduce(
    (acc, item) => acc + parseInt(item.serviceProfit, 10),
    0
  );

  return (
    <div>
      <form onSubmit={formik?.handleSubmit}>
        <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 pb-4">
          <div>
            <Calendar
              id="startDate"
              name="startDate"
              value={formik?.values?.startDate}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("startDate", e.target.value);
              }}
              placeholder="Start Date"
              required
            />
          </div>
          <div>
            <Calendar
              id="endDate"
              name="endDate"
              value={formik?.values?.endDate}
              className="w-full"
              onChange={(e) => {
                formik?.setFieldValue("endDate", e.target.value);
              }}
              placeholder="End Date"
              required
            />
          </div>
          <div>
            <Button type="submit" label="Search" loading={loading} />
          </div>
        </div>
      </form>
      <div>
        {/*  {userInfo?.payRole === "member" && (
          <Progress depositInfo={depositInfo} />
        )} */}

        <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className=" shadow-sm  rounded bg-green-500 p-3 text-white font-bold">
            Total Order: {depositInfo?.length}
          </div>
          <div className="text-white shadow-sm  rounded bg-indigo-500 p-3 font-bold">
            Amount: {totalAmount}
          </div>
          <div className="text-white shadow-sm  rounded-sm bg-yellow-500 p-3 font-bold">
            Discount: {discount}
          </div>
          <div className="text-white shadow-sm  rounded-sm bg-green-500 p-3 font-bold">
            Final Amount: {finalAmount}
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-2 pt-2">
          <div className="text-white shadow-sm  rounded-sm bg-green-500 p-3 font-bold">
            Completed Order: {filteredData?.length}
          </div>
          <div className="text-white shadow-sm  rounded bg-indigo-500 p-3 font-bold">
            Completed Amount: {completedTotalAmount}
          </div>
          <div className="text-white shadow-sm  rounded-sm bg-yellow-500 p-3 font-bold">
            Completed Discount: {completedDiscount}
          </div>
          <div className="text-white shadow-sm  rounded-sm bg-green-500 p-3 font-bold">
            Completed Final Amount: {completedFinalAmount}
          </div>
          <div className="text-white shadow-sm  rounded-sm bg-green-500 p-3 font-bold">
            Completed Final Profit: {profit}
          </div>
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
          header="Order Information"
          responsiveLayout="scroll"
          loading={loading}
          scrollable>
          <Column
            field="serialNo"
            header="SL NO."
            style={{ minWidth: "100px" }}
          />
          <Column
            field="imei"
            header="IMEI NO."
            style={{ minWidth: "100px" }}
          />
          <Column
            field="customerName"
            header="Customer"
            className="text-sm"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="brandName"
            header="Brand"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="modelName"
            header="Model"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="problemName"
            header="Problem"
            style={{ minWidth: "200px" }}
          />
          <Column
            className="text-sm"
            field="warrantyName"
            header="Warranty"
            style={{ minWidth: "130px" }}
          />
          <Column
            className="text-sm"
            field="serviceCost"
            header="Service Cost"
            style={{ minWidth: "150px" }}
          />
          <Column
            className="text-sm"
            field="discount"
            header="Discount"
            style={{ minWidth: "150px" }}
          />

          <Column
            field="engineerName"
            header="Engineer"
            style={{ minWidth: "150px" }}
          />
          <Column
            field="orderDate"
            header="Receive Date"
            body={dateBodyTemplate}
            style={{ minWidth: "150px" }}
          />
          <Column
            field="deliveryDate"
            header="Delivery Date"
            body={dateBodyTemplate2}
            style={{ minWidth: "150px" }}
          />

          <Column field="status" header="Status" body={statusBodyTemplate} />
        </DataTable>
      </div>
    </div>
  );
}
