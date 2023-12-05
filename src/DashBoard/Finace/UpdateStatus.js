import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export default function UpdateStatus({ updateData, showForm, hideModal }) {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      status: "Accepted",
    },
    onSubmit: async (data) => {
      console.log("data", data);
      const finalData = {
        status: data?.status?.name,
        depositID: updateData?._id,
      };
      try {
        setLoading(true);
        const res = await axios.put(
          `https://yellow-sparkly-station.glitch.me/deposit`,
          finalData
        );
        if (res?.status === 200) {
          toast.success("Successfully Upsated!");
          setLoading(false);
          formik?.resetForm();
          hideModal();
        }
      } catch (err) {
        // setLoading(false);
      }
    },
    // console.log("data", data);
    enableReinitialize: true,
  });

  //dropdown
  const status = [
    { name: "Accepted", code: "Accepted" },
    { name: "Rejected", code: "Rejected" },
    { name: "Refund", code: "Refund" },
    { name: "Completed", code: "Completed" },
    { name: "Remove", code: "Remove" },
  ];
  return (
    <div>
      <Dialog
        visible={showForm}
        style={{ width: "500px" }}
        header="Update Status"
        modal
        className="p-fluid"
        onHide={hideModal}
        closeOnEscape
        blockScroll
        icons
        focusOnShow
        resizable
        maximizable
        loading={true}>
        <div>
          <div>
            <h2>
              Your Current Status is :{" "}
              <span className="text-green-500">{updateData?.status}</span>
            </h2>
            <form onSubmit={formik?.handleSubmit}>
              <Dropdown
                inputId="status"
                name="status"
                value={formik.values.status}
                options={status}
                optionLabel="name"
                placeholder="Enter Your Status"
                className="w-full"
                onChange={(e) => {
                  formik.setFieldValue("status", e.value);
                }}
              />
              <br />

              <Button
                className="pt-2"
                type="submit"
                label="Submit"
                loading={loading}
              />
            </form>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
