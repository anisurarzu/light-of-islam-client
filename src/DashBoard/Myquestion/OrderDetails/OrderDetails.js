import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import React from "react";

export default function OrderDetails({
  showForm1,
  setShowForm1,
  updateData,
  hideModal,
  loading1,
  updateFile,
  setUpdateFile,
}) {
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
  const paginatorLeft = (
    <Button type="button" icon="pi pi-refresh" className="p-button-text" />
  );
  const paginatorRight = (
    <Button type="button" icon="pi pi-cloud" className="p-button-text" />
  );
  return (
    <div>
      <Dialog
        visible={showForm1}
        style={{ width: "1200px" }}
        header={`Engineer Order Details`}
        modal
        className="p-fluid"
        onHide={hideModal}
        closeOnEscape
        blockScroll
        icons
        focusOnShow
        resizable
        maximizable
        keepInViewport={false}>
        <DataTable
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10}
          rowsPerPageOptions={[10, 20, 50]}
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          value={updateData}
          responsiveLayout="scroll"
          //   loading={loading}
          scrollable>
          <Column
            field="serialNo"
            header="SL NO."
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
            field="engineerName"
            header="Engineer"
            style={{ minWidth: "150px" }}
          />
          <Column
            field="orderDate"
            header="Order Date"
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
      </Dialog>
    </div>
  );
}
