import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import splitButtonTemp from "../../components/SplitButton/SplitButtonTemp";
import { toast } from "react-toastify";
import axios from "axios";

const ProblemList = () => {
  const [models, setModels] = useState();
  const [modelsForFilter, setModelsForFilter] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  let email = user?.email;
  useEffect(() => {
    getmodels();
  }, []);
  const getmodels = () => {
    try {
      setLoading(true);
      fetch("https://yellow-sparkly-station.glitch.me/problem")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          // const question = data.filter((data) => data.email === email);
          setModels(data);
          setModelsForFilter(data);
          // console.log(question);
        });
    } catch (err) {}
  };

  // searching method
  const handleSearch = (event) => {
    const searchText = event.target.value;
    if (searchText) {
      const matchedDetails = models?.filter(
        (details) =>
          details?.modelName?.includes(searchText) ||
          details?.brandName?.includes(searchText)
      );
      setModels(matchedDetails);
    } else {
      setModels(modelsForFilter);
    }
  };
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
  const deleteBrand = async (rowData) => {
    try {
      setLoading(true);
      const res = await axios.delete(
        `https://yellow-sparkly-station.glitch.me/problem/${rowData?._id}`
      );
      if (res?.status === 200) {
        getmodels();
        toast.success("Successfully Deleted");
        setLoading(false);
      }
    } catch (err) {}
  };
  const actionBodyTemplate = (rowData) => {
    const buttonTemp = [
      {
        label: "Details",
        icon: "pi pi-file",
        command: (e) => {
          // deleteById(rowData);
        },
      },
    ];
    return (
      <>
        {splitButtonTemp(
          rowData,
          {
            defaultFunc: deleteBrand,
            defaultLabel: "Delete",
            defaultColor: "button",
            defaultIcon: "pi pi-trash",
          },
          buttonTemp
        )}
      </>
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
          }`}>
          {rowData?.status}
        </span>
      </div>
    );
  };
  const dateBodyTemplate = (rowData) => {
    return (
      <div>
        <span>{rowData?.date?.slice(0, 10)}</span>
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
          placeholder="search...by model or brand"
        />
      </div>

      <DataTable
        tableStyle={{ minHeight: "10rem" }}
        paginator
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10}
        rowsPerPageOptions={[10, 20, 50]}
        paginatorLeft={paginatorLeft}
        paginatorRight={paginatorRight}
        value={models}
        header="Problem Information"
        responsiveLayout="scroll"
        loading={loading}
        showGridlines>
        <Column field="_id" header="Model ID" />
        <Column field="name" header="Problem Name" />

        <Column
          header="Action"
          filterField="representative"
          showFilterMatchModes={false}
          filterMenuStyle={{ width: "5rem" }}
          style={{ minWidth: "0.1rem" }}
          body={actionBodyTemplate}
        />
      </DataTable>
    </div>
  );
};

export default ProblemList;
