import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import { useFormik } from "formik";
import { Button } from "primereact/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

export default function Invoice({ updateData, showForm1, hideModal }) {
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
  const print = () => {
    window.print();
  };
  return (
    <div>
      <Dialog
        visible={showForm1}
        style={{ width: "full" }}
        header=""
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
            <div className="layout-invoice-page">
              <div className="flex p-justify-end"></div>
              <div>
                {/*  <div className="grid grid-cols-7">
                  <Button
                    type="button"
                    label="Print"
                    icon="pi pi-print"
                    onClick={print}
                    className="p-mb-3 col-span-1"></Button>
                </div> */}

                <div className="p-grid layout-invoice-content mt-8">
                  <div className="p-col-12">
                    <div className="card">
                      <div className="grid grid-cols-6 gap-2">
                        <div className="col-span-1 border-t border-black border-l border-r flex justify-center">
                          <img
                            className="w-full object-contain p-1 bg-black"
                            src="https://i.ibb.co/gF9pHJb/logo-removebg-preview.png"
                            alt="invoice-logo"
                          />
                        </div>
                        <div className="col-span-5 flex justify-between text-left">
                          <div>
                            <div className="flex justify-between">
                              <h1 className="text-xl pt-4 font-bold"></h1>
                              <div className="">
                                <h1 className="text-xl font-bold">
                                  Order Details
                                </h1>
                              </div>
                            </div>
                            <div className=" py-2">
                              <ul>
                                <h1 className="text-2xl font-bold"></h1>
                              </ul>
                              <ul>
                                <h3 className="p-mt-1">Corporate Office: </h3>
                              </ul>
                              <p className="p-mt-1"> </p>
                            </div>
                          </div>
                          <div className=" flex justify-end"></div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <small className="text-sm flex justify-end">
                          Powered By : Porjotok360
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
